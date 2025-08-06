import React, { useEffect, useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { ValidatedTextInput } from "../../../../../components/validatedInput/ValidatedTextInput";
import { AppDispatch, RootState } from "../../../../../redux/Store";
import { StyledNextBtn } from "../../registrationNextBtn/RegisterNextBtn";
import "./formFive.css"
import { sendVerificationEmail, verifyCode } from "../../../../../redux/slices/RegisterSlice";

export const FormFive: React.FC = () => {

    const state = useSelector((state: RootState) => state.register);
    const dispatch: AppDispatch = useDispatch();
    const [code, setCode] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value);
    }

    const resendEmail = () => {
        dispatch(sendVerificationEmail(
            state.username
        ))
        alert("A verification code has been sent to you")
    }

    const verify = () => {
        dispatch(verifyCode(
            {
                username: state.username,
                verificationCode: code
            }
        ))
    }


    return (
        <div className="registerFormFiveContainer">
            <div className="registerStepFiveContent">
                <h1>A verification code has been sent</h1>
                <p>Enter it below to verify</p>
                <ValidatedTextInput valid={true}
                    name={code}
                    label={"verification code"}
                    changeValue={handleChange} />
                <p className="registerStepFiveMessage" onClick={resendEmail}>Didn't receive an email?</p>
                <StyledNextBtn active={code ? true : false} disabled={code ? false : true} color={"black"}
                    onClick={verify}>Next</StyledNextBtn>
            </div>
        </div>
    )

}