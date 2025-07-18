import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DateOfBirth } from "../../features/utils/GlogalInterfaces";
import axios from "axios";

interface RegisterUser {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
}


interface RegisterSliceState {
    loading: boolean;
    error: boolean;
    firstName: string;
    firstNameValid: boolean;
    lastName: string;
    lastNameValid: boolean;
    email: string;
    emailValid: boolean;
    dateOfBirth: DateOfBirth;
    dateOfBirthValid: boolean;
    step: number;
}


interface UpdatePayload {
    name: string;
    value: string | number | boolean;
}

const initialState: RegisterSliceState = {
    loading: false,
    error: false,
    firstName: "",
    firstNameValid: false,
    lastName: "",
    lastNameValid: false,
    email: "",
    emailValid: false,
    dateOfBirth: {
        day: 0,
        month: 0,
        year: 0
    },
    dateOfBirthValid: false,
    step: 1
}

export const registerUser = createAsyncThunk(
    "register/register",
    async (user: RegisterUser, thunkAPI) => {
        try {
            const req = await axios.post("http://localhost:8888/authenticate/register", user);
            return await req.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)

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

            console.log('This is the new global register state: ', state);


            return state;
        },

        increaseStep(state) {
            state.step++;
            return state;
        },

        decreaseStep(state) {
            if (state.step === 1 || state.step === 4 || state.step >= 6) {
                return state;
            } else {
                state.step--;
                return state;
            }
        }


    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true;
            return state;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.step++;
            return state;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
            return state;
        })
    }
});

export const { updateRegister, increaseStep, decreaseStep } = RegisterSlice.actions;

export default RegisterSlice.reducer;