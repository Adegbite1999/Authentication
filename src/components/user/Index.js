import React from 'react';
import logo from 'assets/devchallenges.svg';
import user from 'assets/user-avatar.png';

function UserIndex() {
    return (
        <section>
            <header>
                <div className='header__logo'>
                    <img src={logo} alt="devchallenges-logo"/>
                </div>
                <nav>
                    <div>
                        <div>
                            <img src={user} alt="user-profile"/>
                        </div>
                        <p>Xanthe Neal</p>
                    </div>
                </nav>
            </header>
        </section>
    )
}

export default UserIndex
