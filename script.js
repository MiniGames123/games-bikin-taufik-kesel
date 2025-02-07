const inputAngka = document.getElementById('inputAngka');
const btnTebak = document.getElementById('btnTebak');
const hasilTebak = document.getElementById('hasilTebak');

let angkaAcak = Math.floor(Math.random() * 100) + 1;

btnTebak.addEventListener('click', () => {
    const angkaPlayer = parseInt(inputAngka.value);

    if (angkaPlayer === angkaAcak) {
        hasilTebak.textContent = `Selamat! Anda menebak angka ${angkaAcak} dengan benar!`;
    } else if (angkaPlayer < angkaAcak) {
        hasilTebak.textContent = `Angka yang Anda masukkan terlalu rendah! Coba lagi!`;
    } else {
        hasilTebak.textContent = `Angka yang Anda masukkan terlalu tinggi! Coba lagi!`;
    }
});