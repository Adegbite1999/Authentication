import React from 'react';
import avatar from 'assets/user-avatar.png';
import { Link} from 'react-router-dom';

function Profile() {
    return (
        <div className="profile__wrapper">
            <div className="profile__intro--text">
                <h5>Personal </h5>
                <p>Basic info, like your names and photo</p>
            </div>
            <section className="profile__container" >
                <div className="profile__header--box">
                    <div className="profile__header--text">
                        <h5 className="profile">Profile</h5>
                        <p className="profile__sub">Some info maybe visible to others</p>
                    </div>
                    <button className="btn__profile"> <Link className="link" to='/user/profile/edit'>Edit</Link></button>
                </div>
                <div className="profile__header--photo border-bottom">
                    <div className="profile__photo">
                        <h5 className="photo__sub">Photo</h5>
                    </div>
                    <div className='user__profile--image'>
                        <img src={avatar} className="img" alt="user-placeholder" />
                    </div>
                </div>
                <div className="profile__header--photo border-bottom">
                    <div className="profile__photo">
                        <h5 className="photo__sub">Name</h5>
                    </div>
                    <p className="user__sub">Jone Doe</p>
                </div>
                <div className="profile__header--photo border-bottom">
                    <div className="profile__photo">
                        <h5 className="photo__sub">Bio</h5>
                    </div>
                    <p className="user__sub">I am a software developer and a big fan of devchallenge....</p>
                </div>
                <div className="profile__header--photo border-bottom">
                    <div className="profile__photo">
                        <h5 className="photo__sub">Phone</h5>
                    </div>
                    <p className="user__sub">+2348104750773</p>
                </div>
                <div className="profile__header--photo border-bottom">
                    <div className="profile__photo">
                        <h5 className="photo__sub">Email</h5>
                    </div>
                    <p className="user__sub">JohnDoe@gmail.com</p>
                </div>
                <div className="profile__header--photo">
                    <div className="profile__photo">
                        <h5 className="photo__sub">Password</h5>
                    </div>
                    <p className="user__sub">*************</p>
                </div>
            </section>
        </div>
    )
}

export default Profile
