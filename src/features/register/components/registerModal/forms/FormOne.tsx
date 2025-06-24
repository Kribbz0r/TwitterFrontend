import React, { useState, useEffect } from 'react'
import { TextInput } from '../../../../../components/textInput/TextInput'
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
                <TextInput name={"firstName"} label={'First'} errorMessage={'Enter your name, please'} onChange={updateUser} />
                <TextInput name={"lastName"} label={'Last'} errorMessage={'Enter your surname, please'} onChange={updateUser} />
                <TextInput name={"email"} label={'Email'} errorMessage={'Enter your email, please'} onChange={updateUser} />
            </div>

        </div>
    )
}
