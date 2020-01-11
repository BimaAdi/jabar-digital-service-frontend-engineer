import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import ToastHeader from 'react-bootstrap/ToastHeader';


function RiwayatPekerjaan({ id, pekerjaan, tempat, tahunMasuk, tahunKeluar, 
    changePekerjaan, changeTempat, changeTahunMasuk, changeTahunKeluar, hapusRiwayat }) {
    return (
        <Card style={{marginTop: '0.5em'}}>
            <Card.Body>
                <ToastHeader style={{float: 'right'}} onClick={() => hapusRiwayat(id)}></ToastHeader>
                <Form.Group>
                    <Form.Label>pekerjaan</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={pekerjaan.text}
                        onChange={(e) => changePekerjaan(e, id)}
                        isInvalid={!pekerjaan.valid}
                    />
                    <Form.Control.Feedback type="invalid">
                        Wajib diisi!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>tempat/instansi</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={tempat.text}
                        onChange={(e) => changeTempat(e, id)}
                        isInvalid={!tempat.valid}
                    />
                    <Form.Control.Feedback type="invalid">
                        Wajib diisi!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>tahun masuk</Form.Label>
                        <Form.Control 
                            type="number"  
                            value={tahunMasuk.text}
                            onChange={(e) => changeTahunMasuk(e, id)}
                            isInvalid={!tahunMasuk.valid}
                        />
                        <Form.Control.Feedback type="invalid">
                            format tahun salah!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>tahun keluar</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={tahunKeluar.text}
                            onChange={(e) => changeTahunKeluar(e, id)}
                            isInvalid={!tahunKeluar.valid}
                        />
                        <Form.Text className="text-muted">
                            Kosongkan jika masih bekerja.
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            format tahun salah!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
            </Card.Body>
        </Card>
    );
}

export default RiwayatPekerjaan;