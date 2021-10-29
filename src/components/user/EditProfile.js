import React from 'react';
import Header from 'components/Layout/Header'
import Edit from './Edit';
import 'styles/edit.css';
function EditProfile() {
    return (
        <React.Fragment>
            <section className="edit__wrapper">
            <Header/>
            <Edit/>
            </section>
        </React.Fragment>
    )
}

export default EditProfile
