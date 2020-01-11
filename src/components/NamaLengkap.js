import React from 'react';
import Form from 'react-bootstrap/Form';
import { isEmpty } from '../utilities/validation';

function NamaLengkap({ namaLengkap, setNamaLengkap }) {
    return (
        <Form.Group>
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control 
                type="text" 
                value={namaLengkap.text} 
                isInvalid={!namaLengkap.valid}
                onChange={(e) => setNamaLengkap({
                    text: e.target.value,
                    valid: !isEmpty(e.target.value)
                })} 
            />
            <Form.Control.Feedback type="invalid">
                Wajib di isi!
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default NamaLengkap;