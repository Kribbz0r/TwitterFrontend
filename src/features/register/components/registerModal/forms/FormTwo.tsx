import React from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { increaseStep } from "../../../../../redux/slices/RegisterSlice";
import { AppDispatch } from "../../../../../redux/Store";
import { StyledNextBtn } from "../../registrationNextBtn/RegisterNextBtn";

import { CheckBox } from "../../../../../components/checkbox/Checkbox";
import "./formTwo.css";
import "./forms.css"


export const FormTwo: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    const nextStep = () => {
        dispatch(increaseStep());
    }


    return (
        <div className="registerStepTwoContainer">
            <div className="registerStepTwoContent">
                <h1 className="registerStepTwoHeader">
                    Customize your experience
                </h1>
                <h3 className="registerStepTwoSubHeader">
                    Track where you see Twitter content across the web.
                </h3>
                <div className="registerStepTwoToggleGroup">
                    <p className="registerPrivacy">
                        We use this data to personalize your experience. This web browsing history will never be stored with your name, email or phone number.
                    </p>
                    <CheckBox />
                </div>
                <p className="registerPolicy">
                    By signing up, you agree to our <span className="registerLink">Terms</span>, and <span className="registerLink">Cookies</span>. <span className="registerLink">Learn more.</span>
                </p>
            </div>
            <StyledNextBtn active={true} color={"black"} onClick={nextStep}>
                Next
            </StyledNextBtn>


        </div>
    )

}