import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogRoot() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default BlogRoot