import React, { useState } from 'react'
import { Modal } from '../../../../components/modal/Modal'
import { RegistrationStepCounter } from './registrationStepCounter/RegistrationStepCounter'
import './registerModal.css'

export const RegisterModal: React.FC = () => {

    const [step, setStep] = useState<number>(3);

    const stepButtonClick = () => {
        step === 1 || step === 4 || step >= 6 ? setStep(step) : setStep(step - 1);
    }

    return (

        <Modal>
            <div className='register-container'>
                <RegistrationStepCounter step={step} changeStep={stepButtonClick} />
            </div>
        </Modal>

    )
}
