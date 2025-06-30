import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateOfBirth } from "../../features/utils/GlogalInterfaces";

interface RegisterSliceState {
    loading: boolean;
    error: boolean;
    firstName: string;
    fistNameValid: boolean;
    lastName: string;
    lastNameValid: boolean;
    email: string;
    emailValid: boolean;
    dateOfBirth: DateOfBirth;
    dateOfBirthValid: boolean;
}


interface UpdatePayload {
    name: string;
    value: string | number | boolean;
}

const initialState: RegisterSliceState = {
    loading: false,
    error: false,
    firstName: "",
    fistNameValid: false,
    lastName: "",
    lastNameValid: false,
    email: "",
    emailValid: false,
    dateOfBirth: {
        day: 0,
        month: 0,
        year: 0
    },
    dateOfBirthValid: false
}

export const RegisterSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        updateRegister(state, action: PayloadAction<UpdatePayload>) {
            let { name, value } = action.payload;

            if (name === "day" || name === "month" || name === "year") {
                let dateOfBirth = state.dateOfBirth;
                dateOfBirth = {
                    ...dateOfBirth,
                    [name]: value
                }
                state = {
                    ...state, dateOfBirth
                };
            } else {
                state = { ...state, [name]: value }
            }

            return state;
        }

    }
});

export const { updateRegister } = RegisterSlice.actions;

export default RegisterSlice.reducer;