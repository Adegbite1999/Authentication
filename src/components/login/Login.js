import React, { useState, useEffect } from 'react'
import 'styles/style.css';
import { Link } from 'react-router-dom';
import logo from 'assets/devchallenges.svg'
import google from 'assets/Google.svg';
import facebook from 'assets/Facebook.svg';
import twitter from 'assets/Twitter.svg';
import github from 'assets/Gihub.svg';
import { BiLock } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import FormInput from 'Input/Input';
import useInput from 'hooks/use-input';
import { useAuth } from 'context/AuthContext';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider, githubAuthProvider } from 'firebase-config';


function Login() {

    const {
        value: email,
        valueChangeHandler: emailChangeHandler,
        blurHandler: emailBlurHandler,
        resetFields: resetEmail,
        isInvalid: hasError,
        Valid: isEmailValid
    } = useInput(value => value.includes('@'))

    const {
        value: password,
        valueChangeHandler: passwordChangeHandler,
        blurHandler: passwordBlurHandler,
        resetFields: resetPassword,
        isInvalid: hasErrorPassword,
        Valid: isValidPassword
    } = useInput(value => value.trim().length > 6)

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)

    const { login } = useAuth();
    const history = useHistory()


    // Submit Handler
    const formSubmissionHandler = async (event) => {
        event.preventDefault()
        if (!isEmailValid && !isValidPassword) {
            return setError('user credentials invalid')
        }
        try {
            setError('')
            setLoading(true)
            await login(email, password)
            resetEmail()
            resetPassword()
            history.push('/user/profile')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
    }

    // GoogleAuth Handler
    const signInWithGoogle = async (event) => {
        event.preventDefault()
        try {
            const user = await signInWithPopup(auth, googleAuthProvider)
            if (user) {
                return history.push('user/profile');
            }
        } catch (error) {
            setError(error.message)
        }
    }

    // GithubAuth Handler
    const signInWithGithub = async (event) => {
        event.preventDefault()
        try {
            const user = await signInWithPopup(auth, githubAuthProvider)
            if (user) {
                return history.push('user/profile');
            }
        } catch (error) {
            setError(error.message)
        }
    }


    useEffect(() => {
        if (error) {
            toast.error(error, {
                toastId: error.message,
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
            })
            setError(null)
        }
        if (showToast) {
            toast.success('Successful', {
                toastId: "Account created successfully",
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
            })
            setShowToast(false)
        }
    }, [error, setError, showToast, setShowToast])

    const emailError = hasError ? 'invalid' : 'valid';
    const passwordError = hasErrorPassword ? ' invalid' : 'valid';
    return (
        <div>
            <ToastContainer />
            <div className="wrapper">
                <form className="form">
                    <div>
                        <img src={logo} alt="devchallenge-logo" />
                    </div>
                    <p className="form__text--intro">Login</p>
                    <div className="input__field--email input">
                        <label htmlFor="email"></label>
                        <span className="input__icon"><HiOutlineMail size={20} color="#828282" /></span>
                        <FormInput
                            className={`input__fields ${emailError}`}
                            id="email"
                            type="email"
                            placeholder='Email'
                            value={email}
                            onBlur={emailBlurHandler}
                            onChange={emailChangeHandler}
                        />
                        {hasError && <p className="text-red">Please include a valid email address e.g johndoe@gmail.com </p>}
                    </div>
                    <div className="input__field--password input">
                        <label htmlFor="password"></label>
                        <span className="input__icon"><BiLock size={20} color="#828282" /></span>
                        <FormInput
                            className={`input__fields ${passwordError}`}
                            id="password"
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}

                        />
                        {hasErrorPassword && <p className="text-red">Password must be 6 characters in length</p>}
                    </div>
                    <button disabled={loading} onClick={formSubmissionHandler} className="btn__action">Start coding now</button>

                    <div className="social__login">
                        <p className="social__caption--intro">Or login with these social profile</p>
                        <div className='social__login--icons'>
                            <button onClick={signInWithGoogle} className="social__icon-google icon">
                                <img src={google} alt="google-logo" />
                            </button>
                            <button className="social__icon-facebook icon">
                                <img src={facebook} alt="facebook-logo" />
                            </button>
                            <button className="social__icon-twitter icon">
                                <img src={twitter} alt="twitter-logo" />
                            </button>
                            <button onClick={signInWithGithub} className="social__icon-github icon">
                                <img src={github} alt="github-logo" />
                            </button>
                        </div>
                        <p className="social__caption--sub">Don't have an account yet?  <Link to='/'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
