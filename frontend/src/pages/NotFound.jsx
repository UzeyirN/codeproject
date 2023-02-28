import React from 'react'
import notfound from '../assets/media/computer.png'
import '../styles/NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound-wrapper'>
            <div className='notfound-image__wrapper'>
                <img src={notfound} alt="notfound" />
            </div>
        </div>
    )
}

export default NotFound
