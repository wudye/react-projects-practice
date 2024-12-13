
import React, { useState } from 'react';
import Modal from './modal';

export default function ModalTest() {
    const [showModal, setShowModal] = useState(false);
    function handleTogglePopup() {
        setShowModal(!showModal);
    }

    function onClose() {
        setShowModal(false);
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <button style={{margin: '50px 20px'}} onClick={handleTogglePopup}>open modal popub</button>
            {
                showModal && <Modal
                id={'custom-modal'}
                header={<h1>Costomer header</h1>}
                footer={<h1>Costomer footer</h1>}
                onClose={() =>  onClose()}
                body={<div>costomer body</div>}
                />
            }
        </div>
    )
}