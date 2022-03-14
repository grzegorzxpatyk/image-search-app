import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalImage({
    id,
    urls,
    alt,
    updatedat,
    user,
    onHide,
    show,
}) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="d-flex justify-content-center" closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <img
                        src={urls.regular}
                        alt={alt}
                        style={{ maxWidth: '50vw' }}
                    />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{alt}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
