import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalImage({
    urls,
    alt,
    createdat,
    user,
    onHide,
    show,
}) {
    let dateFormatted = new Date(createdat).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });
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
                    {/* author */}
                    <h2>@{user.username}</h2>
                    <p className="m-0">
                        {user.first_name + ' ' + user.last_name}
                    </p>
                    <p className="m-0">instagram: @{user.instagram_username}</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center align-items-center">
                <img
                    src={urls.regular}
                    alt={alt}
                    style={{ maxWidth: '100%' }}
                />
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <div
                    className="details"
                    style={{ width: '35%', minWidth: 'fit-content' }}
                >
                    {user.location && (
                        <div
                            className="user-location"
                            style={{ minWidth: 'fit-content' }}
                        >
                            {user.location}
                        </div>
                    )}
                    {createdat && (
                        <div
                            className="photo-createdAt"
                            style={{ minWidth: 'fit-content' }}
                        >
                            {dateFormatted}
                        </div>
                    )}
                </div>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
