import React from 'react'
import { Link } from 'react-router-dom';
// import avatar from 'assets/user-avatar.png';
import FormInput from 'Input/Input';
import TextArea from 'Input/TextArea';
import 'styles/edit.css';
import {FiCamera} from 'react-icons/fi';
import {IoIosArrowBack} from 'react-icons/io';
function Edit() {
    return (
        <React.Fragment>
            <div className="profile__edit-wrapper">
                <p className="arrow__back"><Link to="/user/profile" style={{ textDecoration: 'none' }}><span className="arrow"><IoIosArrowBack/>Back</span></Link></p>
                <section className="profile__container--edit" >
                    <div className="edit__profile--intro">
                        <h5>Change Info</h5>
                        <p>Changes will be reflected to every service.</p>
                    </div>
                    <div className="user__box">
                        <div className='user__profile--bg'>
                            <input className="image__file" type="file"/>
                            <span className="image__file--icon"><FiCamera size={25}/></span>
                        </div>
                        <h5 className="user--action">Change photo</h5>
                    </div>
                    <form className="form__user">
                        <FormInput
                            label={`Name`}
                            type={`text`}
                            name={`name`}
                            className='form__edit'
                            placeholder={`Enter your name..`}
                        />

                        <TextArea
                            label={`Bio`}
                            name={`bio`}
                            className="textarea"
                            placeholder={`Enter your bio..`}
                        />
                        <FormInput
                            label={`Phone`}
                            type={`tel`}
                            name={`phone`}
                            className='form__edit'
                            placeholder={`Enter your phone`}
                        />
                        <FormInput
                            label={`Email`}
                            type={`text`}
                            name={`email`}
                            className='form__edit'
                            placeholder={`Enter your email`}
                        />
                        <FormInput
                            label={`Password`}
                            type={`password`}
                            name={`password`}
                            className='form__edit'
                            placeholder={`Enter your password`}
                        />
                        <button className="edit__btn--action">Save</button>
                    </form>
                </section>
            </div>
        </React.Fragment>
    )
}

export default Edit
