import React, { useState } from 'react';
import { ValidatedTextInput } from '../../../../../components/validatedInput/ValidatedTextInput';
import { useDispatch, UseDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../redux/Store';
import { updateRegister } from '../../../../../redux/slices/RegisterSlice';
import { ValidateName } from '../../../../../services/Validators';


export const RegisterNameInputs: React.FC = () => {

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
            <ValidatedTextInput valid={true} name={'firstName'} label='First' changeValue={updateName} />
            <ValidatedTextInput valid={true} name={'lastName'} label='Last' changeValue={updateName} />

        </div>
    )
}