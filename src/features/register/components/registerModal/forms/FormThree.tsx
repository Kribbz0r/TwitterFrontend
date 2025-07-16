import React from "react";
import { useSelector, UseSelector } from "react-redux";
import { ValidatedDisplay } from "../../../../../components/validatedInput/ValidatedDisplay";
import { RootState } from "../../../../../redux/Store";
import { stringifyDate } from "../../../../utils/DateUtils";

import "./formThree.css"
import "./forms.css"
import { StyledNextBtn } from "../../registrationNextBtn/RegisterNextBtn";

export const FormThree: React.FC = () => {

    const state = useSelector((state: RootState) => state.register);

    return (
        <div className="registerStepThreeContainer">
            <div className="registerStepThreeContent">
                <h1 className="registerStepThreeHeader">Create your account</h1>
                <div className="registerStepThreeValue">
                    <ValidatedDisplay label={"Name"} value={`${state.firstName} ${state.lastName}`} />
                </div>
                <div className="registerStepThreeValue">
                    <ValidatedDisplay label={"Email"} value={state.email} />
                </div>
                <div className="registerStepThreeValue">
                    <ValidatedDisplay label={"Date of Birth"} value={stringifyDate(state.dateOfBirth)} />
                </div>
                <p className="registerPolicy">
                    By signing up, you agree to our <span className="registerLink">Terms</span>, and <span className="registerLink">Cookies</span>. <span className="registerLink">Learn more.</span>
                </p>
            </div>
            <StyledNextBtn active={true} color={"blue"} onClick={() => { alert("You are now signing up") }}>
                Sign up
            </StyledNextBtn>
        </div>
    )

}