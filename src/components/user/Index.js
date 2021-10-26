import React, { useState } from 'react';
import logo from 'assets/devchallenges.svg';
import user from 'assets/user-avatar.png';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { GrGroup } from 'react-icons/gr';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';

function UserIndex() {
    const [show, setShow] = useState(false)
    const showHandler = () => {
        setShow(show => !show)
    }
    return (
        <div className="user__wrapper">
            <section>
                <header className="header__user">
                    <div className='header__logo'>
                        <img src={logo} alt="devchallenges-logo" />
                    </div>
                    <div>
                        <div className="header__user--details">
                            <div className="user__image">
                                <img className="img" src={user} alt="user-profile" />
                            </div>
                            <p className="username">Xanthe Neal</p>
                            <div className="drop-down" onClick={showHandler}>
                                {
                                    show === false ? <IoMdArrowDropdown /> :
                                        <React.Fragment>
                                            <IoMdArrowDropup />
                                            <nav>
                                                <ul>
                                                    <Link to="" className="link"><li><span className="nav__icon"><FaUserCircle /></span>My Profile</li></Link>
                                                    <Link to="" className="link"><li><span className="nav__icon"><GrGroup /></span>Group Chat</li></Link>
                                                    <Link to="/login" className="link"><li><span className="nav__icon"><MdLogout /></span>My LogOut</li></Link>
                                                </ul>
                                            </nav>
                                        </React.Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </header>


            </section>
        </div>
    )
}

export default UserIndex
