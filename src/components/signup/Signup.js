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

function Index() {
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

    const { signUp } = useAuth();
    const history = useHistory()



    const formSubmissionHandler = async (event) => {
        event.preventDefault()
        if (!isEmailValid && !isValidPassword) {
            return setError('user credentials invalid')
        }
        try {
            setError('')
            setLoading(true)
            await signUp(email, password)
            resetEmail()
            resetPassword()
            history.push('/login')
        } catch (error) {
            setError(error.message)
        }
        setLoading(false)
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
                    <p className="form__text--intro">Join thousands of learners from around the world</p>
                    <p className="form__text--sub">Master web development by building real-life projects. There are multiple part for you to choose</p>
                    <div className="input__field--email input">
                        <label htmlFor="email"></label>
                        <span className="input__icon"><HiOutlineMail size={20} color="#828282" /></span>
                        <FormInput
                            className={`input__fields ${emailError}`}
                            id="email"
                            type="email"
                            placeholder='Email'
                            onChange={emailChangeHandler}
                            value={email}
                            onBlur={emailBlurHandler}
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
                            onBlur={passwordBlurHandler}
                            onChange={passwordChangeHandler}
                        />
                        {hasErrorPassword && <p className="text-red">Password must be 6 characters in length</p>}
                    </div>
                    <Link to="/user/profile">
                        <button disabled={loading} onClick={formSubmissionHandler} className="btn__action">Start coding now </button>
                    </Link>

                    <div className="social__login">
                        <p className="social__caption--intro">Or login with these social profile</p>
                        <div className='social__login--icons'>
                            <div className="social__icon-google icon">
                                <img src={google} alt="google-logo" />
                            </div>
                            <div className="social__icon-facebook icon">
                                <img src={facebook} alt="facebook-logo" />
                            </div>
                            <div className="social__icon-twitter icon">
                                <img src={twitter} alt="twitter-logo" />
                            </div>
                            <div className="social__icon-github icon">
                                <img src={github} alt="github-logo" />
                            </div>
                        </div>
                        <p className="social__caption--sub">Already a member?  <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Index
