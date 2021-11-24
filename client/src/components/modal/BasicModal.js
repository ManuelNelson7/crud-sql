import React from 'react'
import { Modal } from 'react-bootstrap'

import "./BasicModal.scss"

const BasicModal = (props) => {
    const { show, setShow, children } = props;

    return (
        <Modal className='basic-modal'
            show={show}
            onHide={() => setShow(false)}
            centered
            size='lg'

        >
            
            <Modal.Body>{children}</Modal.Body>

        </Modal>
    )
}

export default BasicModal