import React, { useState, useEffect } from 'react'
import { useSelector, UseSelector } from 'react-redux';
import { RootState } from '../../../../../redux/Store';
import './formOne.css'
import { RegisterDateInput } from '../registerDateInput/RegisterDateInput';
import { RegisterNameInputs } from '../registerNameInput/RegisterNameInputs';
import { RegisterEmailInput } from '../registerEmailInput/RegisterEmailInput';
import { StyledNextBtn } from '../../registrationNextBtn/RegisterNextBtn';

interface FormOneState {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
}


export const FormOne: React.FC = () => {

    const registerState = useSelector((state: RootState) => state.register);


    const [btnActive, setBtnActive] = useState<boolean>(false)



    useEffect(() => {
        if (registerState.dateOfBirthValid && registerState.emailValid && registerState.firstNameValid && registerState.lastNameValid) {
            setBtnActive(true);
        } else {
            setBtnActive(false);
        }

    }, [registerState])

    return (
        <div className='registerStepOneContainer'>
            <div className='registerStepOneContent'>
                <RegisterNameInputs />
                <RegisterEmailInput />
                <RegisterDateInput />
            </div>
            <StyledNextBtn disabled={!btnActive} color={"black"} active={btnActive} onClick={() => console.log("Click for next page")}>
                Next
            </StyledNextBtn>

        </div>
    )
}
