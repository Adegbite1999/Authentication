import React from 'react'
import 'styles/style.css';
import { Link } from 'react-router-dom';
import logo from 'assets/devchallenges.svg'
import google from 'assets/Google.svg';
import facebook from 'assets/Facebook.svg';
import twitter from 'assets/Twitter.svg';
import github from 'assets/Gihub.svg';
import { BiLock } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
function Login() {
    return (
        <div className="wrapper">
            <form>
                <div>
                    <img src={logo} alt="devchallenge-logo" />
                </div>
                <p className="form__text--intro">Login</p>
                <div className="input__field--email input">
                    <label htmlFor="email"></label>
                    <span className="input__icon"><HiOutlineMail size={20} color="#828282" /></span>  <input id="password" type="email" placeholder='Email' />
                </div>
                <div className="input__field--password input">
                    <label htmlFor="password"></label>
                    <span className="input__icon"><BiLock size={20} color="#828282" /></span>  <input id="password" type="password" placeholder='Password' />
                </div>
                <button>Start coding now</button>

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
                    <p className="social__caption--sub">Don't have an account yet?  <Link to='/'>Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login
