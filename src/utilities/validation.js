export let isEmpty = (input) => {
    // check is field empty?
    return input.trim().length === 0 ? true : false;
}

export let isTanggal = (input) => {
    // check is tanggal?
    input = parseInt(input.trim());
    return ((input > 0) && (input <= 31));
}

export let isTahun = (input) => {
    // check is tahun?
    return input.trim().length === 4 ? true : false;
}

export let validateNamaLengkap = (namaLengkap) => {
    // check not empty
    return !isEmpty(namaLengkap.text);
}

export let validateTanggalLahir = (tanggalLahir) => {
    let { tanggal, tahun } = tanggalLahir;
    // check not empty
    if (isEmpty(tanggal.text) || isEmpty(tahun.text)) return false;
    // check tanggal and tahun is valid?
    if (!isTanggal(tanggal.text) || !isTahun(tahun.text)) return false;
    return true;
}

export let validateAlamat = (alamat) => {
    // check not empty
    return !isEmpty(alamat.text);
}

export let validateRiwayatPekerjaan = (riwayatPekerjaan) => {
    let { data } = riwayatPekerjaan;
    let validate = data.map((item) => {
        let { pekerjaan, tempat, tahunMasuk, tahunKeluar } = item;
        // check empty
        if (isEmpty(pekerjaan.text) || isEmpty(tempat.text) || isEmpty(tahunMasuk.text)) {
            return false;
        }
        // check tahun is valid?
        if (!isTahun(tahunMasuk.text)) {
            return false;
        }

        if (!isTahun(tahunKeluar.text) && !isEmpty(tahunKeluar.text)) {
            return false;
        }
        
        return true;
    })
    // check is all true?
    return validate.reduce((current, item) => {
        return current && item;
    });
}
