import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

const AdminRoot = () => {
    return (
        <>
            <AdminNavbar />
            <Outlet />
            {/* <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <p className='lato-font' style={{fontSize:"5em"}}>WELCOME TO ADMIN PANEL</p>


            </div> */}

        </>
    )
}

export default AdminRoot
