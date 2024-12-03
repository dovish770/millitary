import React from 'react';
import NameInput from '../nameComponent/Name';
import './Form.css';
import Instructions from '../instructionsComponents/Instructions';
import LandSection from '../landComponent/Land';
import PartTime from '../partTimeComponent/PartTime';
import Kodkod from '../kodcodCopmonent/Kodkod';
import Comment from '../commentComponent/Comment';

const Form = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); 
        console.log("הטופס נשלח!");
    };

    return (
        <div className='form-container'>
            <form className='inner-form'>
                <NameInput />
                <Instructions />
                <LandSection />
                <PartTime />
                <Kodkod />
                <Comment />
                <button type="submit" className="submit-button" onClick={handleSubmit}>
                    שלח טופס
                </button>
            </form>
        </div>
    );
}

export default Form;
