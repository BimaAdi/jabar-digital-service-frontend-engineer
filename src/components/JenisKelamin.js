import React from 'react';
import Form from 'react-bootstrap/Form';

function JenisKelamin({jenisKelamin, setJenisKelamin}) {
    return (
        <Form.Group>
            <Form.Label>Jenis Kelamin</Form.Label>
            <Form.Group>
                <Form.Check 
                    inline label="Pria" 
                    type="radio" 
                    value="Pria" 
                    checked={jenisKelamin === 'Pria'} 
                    onChange={() => setJenisKelamin('Pria')} 
                />
                <Form.Check 
                    inline label="Wanita" 
                    type="radio"
                    value="Wanita"
                    checked={jenisKelamin === 'Wanita'} 
                    onChange={() => setJenisKelamin('Wanita')}
                />
            </Form.Group>
        </Form.Group>
    )
}

export default JenisKelamin;