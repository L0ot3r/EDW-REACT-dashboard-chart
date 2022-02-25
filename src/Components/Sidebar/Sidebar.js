import React from 'react'
import iconeDashboard from './analytics.svg'
import './Sidebar.css'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    return (
        <nav className="sidenav">
            <img src={iconeDashboard} />
            <Link to="/">FINANCES</Link>
            <Link to="/dashboardEmployees">EMPLOI</Link>
        </nav>
    )
}
