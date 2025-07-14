import React from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { increaseStep } from "../../../../../redux/slices/RegisterSlice";
import { AppDispatch } from "../../../../../redux/Store";
import { StyledNextBtn } from "../../registrationNextBtn/RegisterNextBtn";

import { Checkbox } from "../../checkbox/Checkbox";
import "./formTwo.css";


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
                    <p className="registerStepTwoPrivacy">
                        We use this data to personalize your experience. This web browsing history will never be stored with your name, email or phone number.
                    </p>
                </div>
                <Checkbox />
                <p className="registerStepTwoPolicy"> {/* Make it a something global later */}
                    By signing up, you agree to our <span className="registerStepTwoLink">Terms</span>, and <span className="registerStepTwoLink">Cookies</span>. <span className="registerStepTwoLink">Learn more.</span>
                </p>
            </div>
            <StyledNextBtn active={true} color={"black"} onClick={nextStep}>
                Next
            </StyledNextBtn>


        </div>
    )

}