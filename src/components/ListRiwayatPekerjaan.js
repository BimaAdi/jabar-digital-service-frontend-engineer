import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { isEmpty, isTahun } from '../utilities/validation';
import RiwayatPekerjaan from './RiwayatPekerjaan';

function ListRiwayatPekerjaan({ riwayatPekerjaan, setRiwayatPekerjaan}) {

    // Event
    let changePekerjaan = (e, id) => {
        setRiwayatPekerjaan({
            maxId: riwayatPekerjaan.maxId,
            data: riwayatPekerjaan.data.map((item) => {
                if (item.id === id) {
                    let obj = {
                        id: item.id,
                        pekerjaan: {
                            text: e.target.value,
                            valid: !isEmpty(e.target.value)
                        },
                        tempat: item.tempat,
                        tahunMasuk: item.tahunMasuk,
                        tahunKeluar: item.tahunKeluar
                    };
                    return obj;
                } else {
                    return item;
                }
            })
        });
    }

    let changeTempat = (e, id) => {
        setRiwayatPekerjaan({
            maxId: riwayatPekerjaan.maxId,
            data: riwayatPekerjaan.data.map((item) => {
                if (item.id === id) {
                    let obj = {
                        id: item.id,
                        pekerjaan: item.pekerjaan,
                        tempat: {
                            text: e.target.value,
                            valid: !isEmpty(e.target.value)
                        },
                        tahunMasuk: item.tahunMasuk,
                        tahunKeluar: item.tahunKeluar
                    };
                    return obj;
                } else {
                    return item;
                }
            })
        });
    }

    let changeTahunMasuk = (e, id) => {
        setRiwayatPekerjaan({
            maxId: riwayatPekerjaan.maxId,
            data: riwayatPekerjaan.data.map((item) => {
                if (item.id === id) {
                    let obj = {
                        id: item.id,
                        pekerjaan: item.pekerjaan,
                        tempat: item.tempat,
                        tahunMasuk: {
                            text: e.target.value,
                            valid: (!isEmpty(e.target.value)&&(isTahun(e.target.value)))
                        },
                        tahunKeluar: item.tahunKeluar
                    };
                    return obj;
                } else {
                    return item;
                }
            })
        });
    }

    let changeTahunKeluar = (e, id) => {
        setRiwayatPekerjaan({
            maxId: riwayatPekerjaan.maxId,
            data: riwayatPekerjaan.data.map((item) => {
                if (item.id === id) {
                    let obj = {
                        id: item.id,
                        pekerjaan: item.pekerjaan,
                        tempat: item.tempat,
                        tahunMasuk: item.tahunMasuk,
                        tahunKeluar: {
                            text: e.target.value,
                            valid: (isEmpty(e.target.value) || isTahun(e.target.value))
                        }
                    };
                    return obj;
                } else {
                    return item;
                }
            })
        });
    }

    let tambahRiwayat = () => {
        let { maxId, data } = riwayatPekerjaan;
        maxId = maxId + 1;
        data.push({
            id: maxId,
            pekerjaan: {
              text: '',
              valid: true
            },
            tempat: {
              text: '',
              valid: true
            },
            tahunMasuk: {
              text: '2012',
              valid: true
            },
            tahunKeluar: {
              text: '',
              valid: true
            }
          })
        setRiwayatPekerjaan({
            maxId: maxId,
            data: data
        })
    }

    let hapusRiwayat = (id) => {
        let { maxId, data } = riwayatPekerjaan;
        setRiwayatPekerjaan({
            maxId: maxId,
            data: data.filter((item) => {
                return item.id !== id;
            })
        })
    }

    return (
        <Form.Group>
            <Form.Label>Riwayat Pekerjaan</Form.Label>
            {riwayatPekerjaan.data.map((item) => {
                return(<RiwayatPekerjaan 
                    key={item.id}
                    id={item.id} 
                    pekerjaan={item.pekerjaan} 
                    tempat={item.tempat}
                    tahunMasuk={item.tahunMasuk}
                    tahunKeluar={item.tahunKeluar}
                    changePekerjaan={changePekerjaan}
                    changeTempat={changeTempat}
                    changeTahunMasuk={changeTahunMasuk}
                    changeTahunKeluar={changeTahunKeluar}
                    hapusRiwayat={hapusRiwayat}
                />);
            })}
            <br></br>
            <Button variant="secondary" style={{marginTop: '-6px'}} onClick={() => tambahRiwayat()}>Tambah Riwayat Pekerjaan</Button>
        </Form.Group>
    )
}

export default ListRiwayatPekerjaan;