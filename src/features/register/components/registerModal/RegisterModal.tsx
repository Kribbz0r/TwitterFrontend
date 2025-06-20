import React from 'react'
import { Modal } from '../../../../components/modal/Modal'
import { RegistrationStepCounter } from './registrationStepCounter/RegistrationStepCounter'
import './registerModal.css'

export const RegisterModal: React.FC = () => {
    return (

        <Modal>
            <div className='register-container'></div>
            <RegistrationStepCounter step={6} />
        </Modal>

    )
}
