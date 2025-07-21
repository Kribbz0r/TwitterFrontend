import React, { useEffect, useState } from "react";
import { CheckBox } from "../../../../../components/checkbox/Checkbox";
import { countryCodeDropDown } from "../../../../utils/CountryCodeDropDownUtils";

import "./forms.css"
import { DropDown } from "../../../../../components/dropDown/DropDown";
import { ValidatedTextInput } from "../../../../../components/validatedInput/ValidatedTextInput";


export const FormFour: React.FC = () => {

    const [countryCode, setCountryCode] = useState<string>("+46");
    const [telephoneNumber, setTelephoneNumber] = useState<string>("");
    const [country, setCountry] = useState<string>("Sweden")

    const changeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountryCode(e.target.value.split(" ")[0]);
        setCountry(e.target.value.split(" ").slice(1).join())
    }

    const changeTelephoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTelephoneNumber(e.target.value);
    }


    useEffect(() => {
        console.log("Country code:", countryCode);
        console.log("Telephone number:", telephoneNumber);
        console.log("Country:", country);

    }, [countryCode, telephoneNumber, country])

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
                            content={countryCodeDropDown}
                            change={changeCountry}
                            label={"Contry code here"}
                            defaultValue={country}
                        />
                        <ValidatedTextInput
                            valid={true}
                            name={"telephoneNumber"}
                            label={"Yo numba"}
                            changeValue={changeTelephoneNumber}
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