import React, { useState, useEffect } from 'react'
import { ValidateName } from '../../../../../services/Validators';
import { ValidatedInput } from '../../../../../components/validatedInput/ValidatedInput';
import './formOne.css'

interface FormOneState {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
}


export const FormOne: React.FC = () => {

    const [stepOneState, setStepOneState] = useState<FormOneState>({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: ""
    });


    const updateUser = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setStepOneState({ ...stepOneState, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        console.log("New State: ", stepOneState);
    }, [stepOneState])

    return (
        <div className='registerStepOneContainer'>
            <div className='registerStepOneContent'>
                <ValidatedInput name={"firstName"} label={"First"} errorMessage='What is your name' changeValue={updateUser} validator={ValidateName}></ValidatedInput>
                <ValidatedInput name={"lastName"} label={"Last"} errorMessage='What is your surname' changeValue={updateUser} validator={ValidateName}></ValidatedInput>
                <ValidatedInput name={"email"} label={"Email"} errorMessage='Please enter a valid email' changeValue={updateUser} validator={() => true}></ValidatedInput>

            </div>

        </div>
    )
}
