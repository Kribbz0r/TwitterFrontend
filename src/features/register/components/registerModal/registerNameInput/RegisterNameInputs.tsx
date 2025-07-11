import React, { useState } from 'react';
import { ValidatedTextInput } from '../../../../../components/validatedInput/ValidatedTextInput';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../redux/Store';
import { updateRegister } from '../../../../../redux/slices/RegisterSlice';
import { ValidateName } from '../../../../../services/Validators';

import "./registerNameInput.css"

interface RegisterNameInputProps {
    firstName: string;
    lastName: string;
}


export const RegisterNameInputs: React.FC<RegisterNameInputProps> = ({ firstName, lastName }) => {

    const [fisrtNameValid, setFirstNameValid] = useState<boolean>(true);
    const [lastNameValid, setLastNameValid] = useState<boolean>(true);

    const dispatch: AppDispatch = useDispatch();

    const updateName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === 'firstName') {
            dispatch(updateRegister({ name: e.target.name, value: e.target.value }))

            let valid = ValidateName(e.target.value);
            setFirstNameValid(valid);

            dispatch(updateRegister({ name: 'firstNameValid', value: valid }));
        }


        if (e.target.name === 'lastName') {
            dispatch(updateRegister({ name: e.target.name, value: e.target.value }))

            let valid = ValidateName(e.target.value);
            setLastNameValid(valid);

            dispatch(updateRegister({ name: 'lastNameValid', value: valid }));
        }
    }

    return (
        <div className='registerNameInput'>
            <div className='registerNameContent'>
                <ValidatedTextInput valid={fisrtNameValid}
                    name={'firstName'}
                    label={'First name'}
                    changeValue={updateName}
                    attributes={{
                        maxLength: 50
                    }}
                    data={firstName} />
                {fisrtNameValid ? <></> : <span className='registerNameError'>What is your name?</span>}
            </div>
            <div className='registerNameContent'>
                <ValidatedTextInput valid={lastNameValid}
                    name={'lastName'}
                    label={'Last name'}
                    changeValue={updateName}
                    attributes={{
                        maxLength: 50
                    }}
                    data={lastName} />
                {lastNameValid ? <></> : <span className='registerNameError'>What is your name?</span>}

            </div>
        </div>
    )
}