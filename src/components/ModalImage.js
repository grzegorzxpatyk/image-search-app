import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { appName } from '../App';

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
            <Modal.Header className="d-flex justify-content-start">
                <Modal.Title id="contained-modal-title-vcenter">
                    {/* author */}
                    Photo by{' '}
                    <a
                        href={
                            user.links.html +
                            `?utm_source=${appName}&utm_medium=referral`
                        }
                        target="_blank"
                        rel="noreferrer"
                    >
                        @{user.name}
                    </a>{' '}
                    on{' '}
                    <a
                        href={`https://unsplash.com/?utm_source=${appName}&utm_medium=referral`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Unsplash
                    </a>
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
