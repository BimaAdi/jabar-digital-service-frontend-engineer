import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {isEmpty, isTanggal, isTahun, validateNamaLengkap, 
  validateTanggalLahir, validateAlamat, validateRiwayatPekerjaan } from './utilities/validation';
import NamaLengkap from './components/NamaLengkap';
import TanggalLahir from './components/TanggalLahir';
import JenisKelamin from './components/JenisKelamin';
import Alamat from './components/Alamat';
import ListRiwayatPekerjaan from './components/ListRiwayatPekerjaan';
import './App.css';

function App() {
  // State
  const [namaLengkap, setNamaLengkap] = useState({
    text: '',
    valid: true
  });
  const [tanggalLahir, setTanggalLahir] = useState({
    tanggal: {
      text: '5', 
      valid: true
    },
    bulan: 'Febuari',
    tahun: {
      text: '1945',
      valid: true
    }
  });
  const [jenisKelamin, setJenisKelamin] = useState('Pria');
  const [alamat, setAlamat] = useState({
    text: '',
    valid: true
  });
  const [riwayatPekerjaan, setRiwayatPekerjaan] = useState({
    maxId: 0,
    data: [{
      id: 0,
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
    }]
  });

  // Event
  let clickSubmit = (e) => {
    // recheck all input
    setNamaLengkap({
      text: namaLengkap.text,
      valid: !isEmpty(namaLengkap.text)
    });
    setTanggalLahir({
      tanggal: {
        text: tanggalLahir.tanggal.text,
        valid: (!isEmpty(tanggalLahir.tanggal.text) && isTanggal(tanggalLahir.tanggal.text))
      },
      bulan: tanggalLahir.bulan,
      tahun: {
        text: tanggalLahir.tahun.text,
        valid: (!isEmpty(tanggalLahir.tahun.text) && isTahun(tanggalLahir.tahun.text))
      }
    });
    setAlamat({
      text: alamat.text,
      valid: !isEmpty(alamat.text)
    });
    setRiwayatPekerjaan({
      maxId: riwayatPekerjaan.maxId,
      data: riwayatPekerjaan.data.map((item) => {
        let obj = {
          id: item.id,
          pekerjaan: {
            text: item.pekerjaan.text,
            valid: !isEmpty(item.pekerjaan.text)
          },
          tempat:{
            text: item.tempat.text,
            valid: !isEmpty(item.tempat.text)
          },
          tahunMasuk:{
            text: item.tahunMasuk.text,
            valid: (!isEmpty(item.tahunMasuk.text)&&(isTahun(item.tahunMasuk.text)))
          },
          tahunKeluar:{
            text: item.tahunKeluar.text,
            valid: (isEmpty(item.tahunKeluar.text) || isTahun(item.tahunKeluar.text))
          },
        }
        return obj;
      })
    });

    // Check if all input valid, if all input valid continue to submit it
    if (validateNamaLengkap(namaLengkap) && validateTanggalLahir(tanggalLahir) 
    && validateAlamat(alamat) && validateRiwayatPekerjaan(riwayatPekerjaan)) {
      alert('submitted');
    }
  }

  let clickBatal = () => {
    window.scrollTo(0, 0);
    setNamaLengkap({
      text: '',
      valid: true
    });
    setTanggalLahir({
      tanggal: {
        text: '5', 
        valid: true
      },
      bulan: 'Febuari',
      tahun: {
        text: '1945',
        valid: true
      }
    });
    setJenisKelamin('Pria');
    setAlamat({
      text: '',
      valid: true
    });
    setRiwayatPekerjaan({
      maxId: 0,
      data: [{
        id: 0,
        pekerjaan: '',
        tempat: '',
        tahunMasuk: '2012',
        tahunKeluar: ''
      }]
    });
  }

  return (
    <Container>
      <Card style={marginAuto}>
        <Card.Body>
          <h1>Formulir Pendaftaraan</h1>
          <Form>
            <NamaLengkap 
              namaLengkap={namaLengkap}
              setNamaLengkap={setNamaLengkap}
            />
            <TanggalLahir 
              tanggalLahir={tanggalLahir} 
              setTanggalLahir={setTanggalLahir}
            />
            <JenisKelamin 
              jenisKelamin={jenisKelamin} 
              setJenisKelamin={setJenisKelamin} 
            />
            <Alamat 
              alamat={alamat}
              setAlamat={setAlamat}
            />
            <ListRiwayatPekerjaan 
              riwayatPekerjaan={riwayatPekerjaan}
              setRiwayatPekerjaan={setRiwayatPekerjaan}
            />
            <div style={{float: 'right'}}>
              <Button variant="primary" style={{marginRight: '0.5em', width: '80px'}} onClick={(e) => clickSubmit(e)}>Daftar</Button>
              <Button variant="secondary" style={{width: '80px'}} onClick={() => clickBatal()}>Batal</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

// Style
let marginAuto = {
  maxWidth: '800px',
  margin: '1rem auto'
}

export default App;
