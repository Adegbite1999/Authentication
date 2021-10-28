import React from 'react'

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
                    <button className="btn__profile">Edit</button>
                </div>
            </section>
        </div>
    )
}

export default Profile
