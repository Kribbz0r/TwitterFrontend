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
    phoneNumber: string;
    step: number;
    username: string;
}

interface UpdatePhone {
    username: string;
    phoneNumber: string;
}


interface UpdatePayload {
    name: string;
    value: string | number | boolean;
}

interface VerifyCode {
    username: string;
    verificationCode: string;
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
    phoneNumber: "",
    step: 1,
    username: "",
}

export const verifyCode = createAsyncThunk(
    "register/verifyCode",
    async (body: VerifyCode, thunkAPI) => {
        try {
            const request = await axios.post("http://localhost:8888/authenticate/email/verification/verify", body);
            return request.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    })

export const registerUser = createAsyncThunk(
    "register/register",
    async (body: RegisterUser, thunkAPI) => {
        try {
            const request = await axios.post("http://localhost:8888/authenticate/register", body);
            return await request.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)

export const sendVerificationEmail = createAsyncThunk(
    "register/sendVerificationEmail",
    async (body: string, thunkAPI) => {
        try {
            await axios.post("http://localhost:8888/authenticate/email/verification/code", { username: body });
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)

export const updateUserPhoneNumber = createAsyncThunk(
    "register/phone",
    async (body: UpdatePhone, thunkAPI) => {
        try {
            await axios.put("http://localhost:8888/authenticate/update/phoneNumber", body);
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

        builder.addCase(updateUserPhoneNumber.pending, (state, action) => {
            state = {
                ...state,
                loading: true
            }
            return state;
        });

        builder.addCase(verifyCode.pending, (state, action) => {
            state = {
                ...state,
                loading: true
            }
            return state;
        })

        builder.addCase(sendVerificationEmail.pending, (state, action) => {
            state = {
                ...state,
                loading: true
            }
            return state;
        });

        builder.addCase(registerUser.fulfilled, (state, action) => {
            let nextStep = state.step + 1
            state = {
                ...state,
                username: action.payload.username,
                loading: false,
                error: false,
                step: nextStep
            }
            return state;
        });

        builder.addCase(updateUserPhoneNumber.fulfilled, (state, action) => {
            let nextStep = state.step + 1
            state = {
                ...state,
                loading: false,
                error: false,
                step: nextStep
            }
            return state;
        });

        builder.addCase(sendVerificationEmail.fulfilled, (state, action) => {

            state = {
                ...state,
                loading: false,
                error: false,

            }
            return state;
        });

        builder.addCase(verifyCode.fulfilled, (state, action) => {
            let nextStep = state.step + 1;
            state = {
                ...state,
                loading: false,
                error: false,
                step: nextStep
            }
            return state;
        });

        builder.addCase(registerUser.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
            return state;
        });

        builder.addCase(updateUserPhoneNumber.rejected, (state, action) => {
            state = {
                ...state,
                loading: false,
                error: true
            }
            return state;
        });

        builder.addCase(sendVerificationEmail.rejected, (state, action) => {
            state = {
                ...state,
                loading: false,
                error: true
            }
            return state;
        });

        builder.addCase(verifyCode.rejected, (state, action) => {
            state = {
                ...state,
                loading: false,
                error: true
            }
            return state;
        });


    }
});

export const { updateRegister, increaseStep, decreaseStep } = RegisterSlice.actions;

export default RegisterSlice.reducer;