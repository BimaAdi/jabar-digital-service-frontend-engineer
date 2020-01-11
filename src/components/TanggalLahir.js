import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { isEmpty, isTanggal, isTahun } from '../utilities/validation';

function TanggalLahir({ tanggalLahir, setTanggalLahir }) {
    // variabels
    const bulan = [
        {id:1, bulan:'Januari'},
        {id:2, bulan:'Febuari'},
        {id:3, bulan:'Maret'},
        {id:4, bulan:'April'},
        {id:5, bulan:'Mei'},
        {id:6, bulan:'Juni'},
        {id:7, bulan:'Juli'},
        {id:8, bulan:'Agustus'},
        {id:9, bulan:'September'},
        {id:10, bulan:'Oktober'},
        {id:11, bulan:'November'},
        {id:12, bulan:'Desember'}
    ];

    return (
        <Form.Group>
            <Form.Label>Tanggal Lahir</Form.Label>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>tanggal</Form.Label>
                    <Form.Control 
                        type="number"  
                        value={tanggalLahir.tanggal.text}
                        isInvalid={!tanggalLahir.tanggal.valid}
                        onChange={(e) => setTanggalLahir({
                            tanggal: {
                                text: e.target.value,
                                valid: (!isEmpty(e.target.value) && isTanggal(e.target.value))
                            },
                            bulan: tanggalLahir.bulan,
                            tahun: tanggalLahir.tahun
                        })}
                    />
                    <Form.Control.Feedback type="invalid">
                        format tanggal salah!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>bulan</Form.Label>
                    <Form.Control as="select" value={tanggalLahir.bulan} onChange={(e) => setTanggalLahir(Object.assign({}, tanggalLahir, {
                        bulan: e.target.value
                    }))}>
                        {bulan.map((item) => {
                            return (
                                <option 
                                    key={item.id} 
                                    value={item.bulan}
                                >
                                    {item.bulan}
                                </option>
                            )
                        })}
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>tahun</Form.Label>
                    <Form.Control 
                        type="number" 
                        value={tanggalLahir.tahun.text}
                        isInvalid={!tanggalLahir.tahun.valid}
                        onChange={(e) => setTanggalLahir({
                            tanggal: tanggalLahir.tanggal,
                            bulan: tanggalLahir.bulan,
                            tahun: {
                                text: e.target.value,
                                valid: (!isEmpty(e.target.value) && isTahun(e.target.value))
                            }
                        })}
                    />
                    <Form.Control.Feedback type="invalid">
                        format tahun salah!
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
        </Form.Group>
    );
}

export default TanggalLahir;