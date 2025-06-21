import React from 'react'
import { displayIcon, displayIconCheck } from '../../../../utils/RegisterStepCountUtils';
import './registrationStepCounter.css';


interface RegisterStepProps {
    step: number;
    changeStep(): void;
}

export const RegistrationStepCounter: React.FC<RegisterStepProps> = ({ step, changeStep }) => {
    return (
        <div className='reg-step-counter-container'>
            <div className={displayIconCheck(step)} onClick={changeStep}>
                {displayIcon(step)}
            </div>
            <span className='reg-step-number'>Step {step} of 6</span>
        </div>
    )
}