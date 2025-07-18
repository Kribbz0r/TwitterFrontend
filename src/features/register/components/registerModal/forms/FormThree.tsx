import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ValidatedDisplay } from "../../../../../components/validatedInput/ValidatedDisplay";
import { registerUser } from "../../../../../redux/slices/RegisterSlice";
import { RootState, AppDispatch } from "../../../../../redux/Store";
import { stringifyDate } from "../../../../utils/DateUtils";

import "./formThree.css"
import "./forms.css"
import { StyledNextBtn } from "../../registrationNextBtn/RegisterNextBtn";

export const FormThree: React.FC = () => {

    const state = useSelector((state: RootState) => state.register);
    const dispatch: AppDispatch = useDispatch();

    const postUser = () => {
        const user = {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            dateOfBirth: `${state.dateOfBirth.year}-${String(state.dateOfBirth.month).padStart(2, '0')}-${String(state.dateOfBirth.day).padStart(2, '0')}`
        }
        dispatch(registerUser(user));
    }

    return (
        <div className="registerStepThreeContainer">
            <div className="registerStepThreeContent">
                <h1 className="registerStepThreeHeader">Create your account</h1>
                <div className="registerStepThreeValue">
                    <ValidatedDisplay label={"Name"} value={`${state.firstName} ${state.lastName}`} />
                </div>
                <div className="registerStepThreeValue">
                    <ValidatedDisplay label={"Email"} value={state.email} />
                    {state.error ? <p className="registerStepThreeError">The email is in use</p> : <></>}
                </div>
                <div className="registerStepThreeValue">
                    <ValidatedDisplay label={"Date of Birth"} value={stringifyDate(state.dateOfBirth)} />
                </div>
                <p className="registerPolicy">
                    By signing up, you agree to our <span className="registerLink">Terms</span>, and <span className="registerLink">Cookies</span>. <span className="registerLink">Learn more.</span>
                </p>
            </div>
            <StyledNextBtn active={true} color={"blue"} onClick={postUser}>
                Sign up
            </StyledNextBtn>
        </div>
    )

}