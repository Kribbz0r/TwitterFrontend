import React, { useState } from 'react'
import { useDispatch, UseDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/Store'
import { decreaseStep } from '../../../../redux/slices/RegisterSlice'
import { Modal } from '../../../../components/modal/Modal'
import { RegistrationStepCounter } from './registrationStepCounter/RegistrationStepCounter'
import { determineModalContent } from '../../../utils/RegisterModalUtils'
import './registerModal.css'


export const RegisterModal: React.FC = () => {

    const state = useSelector((state: RootState) => state.register);
    const dispatch: AppDispatch = useDispatch();
    const stepButtonClick = () => {
        dispatch(decreaseStep());

    }

    return (

        <Modal>
            <div className='register-container'>
                <RegistrationStepCounter step={state.step} changeStep={stepButtonClick} />
                <div className='register-modal-content'>{determineModalContent(state.step)}
                </div>
            </div>
        </Modal>

    )
}
