import React from 'react'
import { Outlet } from 'react-router-dom'

const NotFoundRoot = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default NotFoundRoot
