import React from 'react';
import Form from 'react-bootstrap/Form';
import { isEmpty } from '../utilities/validation';

function Alamat({ alamat, setAlamat }) {
    return (
        <Form.Group>
            <Form.Label>Alamat</Form.Label>
            <Form.Control 
                type="text" 
                value={alamat.text} 
                isInvalid={!alamat.valid}
                onChange={(e) => setAlamat({
                    text: e.target.value,
                    valid: !isEmpty(e.target.value)
                })}
            />
            <Form.Control.Feedback type="invalid">
                Wajib di isi!
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default Alamat;