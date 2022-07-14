import React from 'react'
import { Image, Modal, Button } from 'react-bootstrap'

const CustomModal = props => {
    return (
        <Modal show={props.show} onHide={() => props.closeHandler(false)} backdrop="static">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center">
                <Image src={`/assets/imgs/undraw_enter_uhqk.svg`} className="w-25" />
                <div className="pt-3">
                    <h4>آیا میخواید خارج شوید؟</h4>
                </div>
            </Modal.Body>
            <Modal.Footer className="row">
                <Button className="col m-2 bg-danger" onClick={() => props.exitStatusHandler(true)}>بله</Button>
                <Button className="col m-2 bg-success" onClick={() => props.closeHandler(false)}>خیر</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal;