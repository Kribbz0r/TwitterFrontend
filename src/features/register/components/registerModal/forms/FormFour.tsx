import React, { useEffect, useState } from "react";
import { CheckBox } from "../../../../../components/checkbox/Checkbox";
import { countryCodeDropDown } from "../../../../utils/CountryCodeDropDownUtils";
import { StyledNextBtn } from "../../registrationNextBtn/RegisterNextBtn";

import "./forms.css"
import { DropDown } from "../../../../../components/dropDown/DropDown";
import { ValidatedTextInput } from "../../../../../components/validatedInput/ValidatedTextInput";
import { validateSwedishPhoneNumber } from "../../../../../services/Validators";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/Store";
import { updateUserPhoneNumber } from "../../../../../redux/slices/RegisterSlice";


export const FormFour: React.FC = () => {

    const [countryCode, setCountryCode] = useState<string>("+46");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [country, setCountry] = useState<string>("Sweden");
    const [validNumber, setValidNumber] = useState<boolean>(true);
    const state = useSelector((state: RootState) => state.register)

    const dispatch: AppDispatch = useDispatch();

    const changeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountryCode(e.target.value.split(" ")[0]);
        setCountry(e.target.value.split(" ")[1])
    }

    const changePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    }

    const sendPhoneNumber = () => {
        dispatch(updateUserPhoneNumber({
            username: state.username,
            phoneNumber: phoneNumber
        }))
    }


    useEffect(() => {
        console.log("Country code:", countryCode);
        console.log("Phone number:", phoneNumber);
        console.log("Country:", country);
        console.log("Number length: ", phoneNumber.length);


        if (phoneNumber) {
            setValidNumber(validateSwedishPhoneNumber(phoneNumber));
        }



    }, [countryCode, phoneNumber, country])

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
                            name={"phoneNumber"}
                            label={"Yo numba"}
                            changeValue={changePhoneNumber}
                        />
                        {validNumber ? <></> : <p className="registerInvalid">+46 is translated into the first 0 of your telephone number. Please enter the rest of your telephone number</p>}
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
                <StyledNextBtn
                    disabled={(phoneNumber && validNumber) ? false : true}
                    color={'black'}
                    active={(phoneNumber && validNumber) ? true : false}
                    onClick={sendPhoneNumber}>
                    Update telephone number
                </StyledNextBtn>
            </div>
        </div>
    )
}