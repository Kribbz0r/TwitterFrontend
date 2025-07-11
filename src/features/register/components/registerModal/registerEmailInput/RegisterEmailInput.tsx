import React, { useState, useEffect } from "react";
import { ValidatedTextInput } from "../../../../../components/validatedInput/ValidatedTextInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../redux/Store";
import { updateRegister } from "../../../../../redux/slices/RegisterSlice";
import { validateEmail } from "../../../../../services/Validators"
import "./registerEmailInput.css"

interface RegisterEmailInputProps {
    email: string;
}

export const RegisterEmailInput: React.FC<RegisterEmailInputProps> = ({ email }) => {
    const [vaildEmail, setValidEmail] = useState<boolean>(true);

    const dispatch: AppDispatch = useDispatch();
    const updateEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(updateRegister({
            name: "email",
            value: e.target.value,
        }));

        let valid = validateEmail(e.target.value);
        setValidEmail(valid);

        dispatch(updateRegister({
            name: "emailValid",
            value: valid
        }))
    }

    return (
        <div className="registerEmailInput">
            <ValidatedTextInput valid={vaildEmail} label={"Email"} name={"email"} changeValue={updateEmail} data={email} />
            {vaildEmail ? <></> : <span className="registerEmailError">Enter your email, please.</span>}

        </div>
    )
}