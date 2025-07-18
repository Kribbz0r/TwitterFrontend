import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, UseSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../../../redux/Store';
import { increaseStep, updateRegister } from '../../../../../redux/slices/RegisterSlice';
import './formOne.css'
import { RegisterDateInput } from '../registerDateInput/RegisterDateInput';
import { RegisterNameInputs } from '../registerNameInput/RegisterNameInputs';
import { RegisterEmailInput } from '../registerEmailInput/RegisterEmailInput';
import { StyledNextBtn } from '../../registrationNextBtn/RegisterNextBtn';


export const FormOne: React.FC = () => {

    const registerState = useSelector((state: RootState) => state.register);
    const dispatch: AppDispatch = useDispatch();

    const [btnActive, setBtnActive] = useState<boolean>(false)

    const nextPage = () => {
        dispatch(updateRegister({
            name: "error",
            value: false
        }));
        dispatch(increaseStep());
    }


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
                <h1 className='registerStepOneHeader'>Create account</h1>
                <RegisterNameInputs firstName={registerState.firstName} lastName={registerState.lastName} />
                <RegisterEmailInput email={registerState.email} />
                <div className='registerStepOneAgeInformation'>
                    <span className='registerStepOneDateOfBirthText'>Date of birth will not be shown publicly.</span>
                </div>
                <RegisterDateInput date={registerState.dateOfBirth} />
            </div>
            <StyledNextBtn disabled={!btnActive} color={"black"} active={btnActive} onClick={nextPage}>
                Next
            </StyledNextBtn>

        </div>
    )
}
