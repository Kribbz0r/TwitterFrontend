import React from 'react'
import './home.css'
import '../assets/global.css'
import { RegisterModal } from '../features/register/components/registerModal/RegisterModal'

export const Landing: React.FC = () => {
    return (
        <div className="home background-color">
            <RegisterModal />
        </div>
    )
}
