import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ValidatedDateSelector } from "../../../../../components/validatedInput/ValidatedDateSelector";
import { updateRegister } from "../../../../../redux/slices/RegisterSlice";
import { AppDispatch, RootState } from "../../../../../redux/Store";
import { getDays, getMonths, getYears } from "../../../../utils/DateUtils";
import { validateDateOfBirth } from "../../../../../services/Validators";
import { DateOfBirth } from "../../../../utils/GlogalInterfaces";

interface RegisterDateInputProps {
    date: DateOfBirth;
}


export const RegisterDateInput: React.FC<RegisterDateInputProps> = ({ date }) => {
    const state = useSelector((state: RootState) => state.register)
    const dispatch: AppDispatch = useDispatch();

    const [valid, setValid] = useState<boolean>(true)



    const updateState = (name: string, value: string | number | boolean): void => {
        dispatch(updateRegister({
            name,
            value
        }));
    }

    useEffect(() => {
        let { day, month, year } = state.dateOfBirth;

        if (day && month && year) {
            setValid(validateDateOfBirth({
                day, month, year
            }));
            dispatch(updateRegister({ name: 'dateOfBirthValid', value: valid }))
        }

    }, [state.dateOfBirth.day, state.dateOfBirth.month, state.dateOfBirth.year, state.dateOfBirthValid, valid])

    return (
        <div className="registerDate">
            <ValidatedDateSelector
                style={"validatedDay"}
                valid={valid}
                name={"Day"}
                dropDown={getDays}
                dispatcher={updateState}
                data={date.day} />

            <ValidatedDateSelector
                style={"validatedMonth"}
                valid={valid}
                name={"Month"}
                dropDown={getMonths}
                dispatcher={updateState}
                data={date.month} />

            <ValidatedDateSelector
                style={"validatedYear"}
                valid={valid}
                name={"Year"}
                dropDown={getYears}
                dispatcher={updateState}
                data={date.year} />

        </div>
    );
}