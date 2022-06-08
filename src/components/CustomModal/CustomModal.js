import React from 'react'
import { Image, Modal, Button } from 'react-bootstrap'
import './CustomModal.scss'

const CustomModal = props => {
    return (
        <Modal show={props.show} onHide={props.closeHandler} backdrop="static">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center">
                <Image src={`/assets/imgs/${props.image}.svg`} className="w-25" />
                <div className="pt-3">
                    <h2>{props.title}</h2>
                    <p>{props.extraText}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="w-100 btn-primary" onClick={() => props.closeHandler()}>بستن</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal;