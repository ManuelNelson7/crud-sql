import SidebarAdmin from '../Sidebar/SidebarAdmin';
import { Container, Row, Col } from 'react-bootstrap';

import './Layout.scss'

import React from 'react'

const LayoutAdmin = (props) => {
    return (
        <div className="layout">
            <SidebarAdmin />
            {props.children}
        </div>
    )
}

export default LayoutAdmin


