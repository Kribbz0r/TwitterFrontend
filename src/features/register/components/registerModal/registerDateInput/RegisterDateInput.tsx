import React from "react";
import { useDispatch } from "react-redux";
import { ValidatedDateSelector } from "../../../../../components/validatedInput/ValidatedDateSelector";
import { updateRegister } from "../../../../../redux/slices/RegisterSlice";
import { AppDispatch } from "../../../../../redux/Store";
import { getDays, getMonths, getYears } from "../../../../utils/DateUtils";



export const RegisterDateInput: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    const updateState = (name: string, value: string | number | boolean): void => {
        dispatch(updateRegister({
            name,
            value
        }));
    }

    return (
        <div className="registerDate">
            <ValidatedDateSelector
                style={"validatedDay"}
                valid={true}
                name={"Day"}
                dropDown={getDays}
                dispatcher={updateState} />

            <ValidatedDateSelector
                style={"validatedMonth"}
                valid={true}
                name={"Month"}
                dropDown={getMonths}
                dispatcher={updateState} />

            <ValidatedDateSelector
                style={"validatedYear"}
                valid={true}
                name={"Year"}
                dropDown={getYears}
                dispatcher={updateState} />

        </div>
    );
}