import React from "react";
import { CheckBox } from "../../../../../components/checkbox/Checkbox";

import "./forms.css"
import { DropDown } from "../../../../../components/dropDown/DropDown";
import { ValidatedTextInput } from "../../../../../components/validatedInput/ValidatedTextInput";


export const FormFour: React.FC = () => {
    return (
        <div className="registerStepFourContainer">
            <div className="registerStepFourContent">
                <h1>Add a telephone number</h1>
                <p>Enter the telephone number associated with this account.</p>
                <div className="registerStepFourGroup">
                    <p>Let people who have your telephone number find and connect with you
                        <span className="registerLink"> Learn more</span>
                    </p>
                    <div className="registerStepFourInputs">
                        <DropDown
                            content={() => { return [] }}
                            change={() => console.log("123 123 123")}
                            label={"Contry code here"}
                            defaultValue={"Sweden +46"}
                        />
                        <ValidatedTextInput
                            valid={true}
                            name={"telephoneNumber"}
                            label={"Yo numba"}
                            changeValue={() => console.log("Da numba")}
                        />
                    </div>
                    <CheckBox />
                </div>
                <div className="registerStepFourGroup">
                    <p>Let us use your telephone number, so that we can send persoalize adds.
                        If you dont enable this we will use your telephone number to gather data about you.
                        <span className="registerLink"> Privacy Policy</span>.
                    </p>
                    <CheckBox />
                </div>
            </div>
        </div>
    )
}