import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AdminRoot = () => {
    return (
        <>
            <AdminNavbar />
            <Outlet />
        </>
    )
}

export default AdminRoot



