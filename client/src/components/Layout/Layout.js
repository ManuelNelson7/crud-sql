import Sidebar from "../Sidebar/Sidebar"
import { Container, Row, Col } from 'react-bootstrap';

import './Layout.scss'

import React from 'react'

const Layout = (props) => {
    return (
        <div className="layout">
            <Sidebar />
            {props.children}

        </div>
    )
}

export default Layout


