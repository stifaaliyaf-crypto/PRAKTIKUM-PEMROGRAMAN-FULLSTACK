// 1. getElementById() - Mengubah warna dan teks judul
const btnId = document.getElementById("btnId");
btnId.addEventListener("click", function () {
    const judul = document.getElementById("judul");
    judul.style.color = "#16d9e7";
    judul.textContent = "Biodata Mahasiswa";
});

// 2. getElementsByClassName() - Menampilkan info biodata ke dalam Kotak Pesan
const btnClass = document.getElementById("btnClass");
btnClass.addEventListener("click", function () {
    const kotakPesan = document.getElementById("kotakPesan");
    kotakPesan.textContent = "Nama: Stifa Aliya Fauziyyah | NIM: 2511501049";
    kotakPesan.style.backgroundColor = "#e1f5fe";
    kotakPesan.style.borderColor = "#00a8e8";
});

// 3. getElementsByTagName() - Mengubah teks tag <p> tertentu
const btnTag = document.getElementById("btnTag");
btnTag.addEventListener("click", function () {
    const paragrafList = document.getElementsByTagName("p");
    paragrafList[0].textContent = "Status Akademik: Aktif (Semester Gasal)";
});

// 4. getElementsByName() - Mengubah nilai / value pada input form
const btnName = document.getElementById("btnName");
btnName.addEventListener("click", function () {
    const inputElemen = document.getElementsByName("inputNama");
    inputElemen[0].value = "Stifa Aliya Fauziyyah";
});

// 5. querySelectorAll() / Tombol Ubah Semua Sekaligus
const btnAll = document.getElementById("btnAll");
btnAll.addEventListener("click", function () {
    // A. Ubah Judul (ID)
    const judul = document.getElementById("judul");
    judul.style.color = "#002855";
    judul.textContent = "Profil Mahasiswa IT";

    // B. Ubah Kotak Pesan (Class / ID)
    const kotakPesan = document.getElementById("kotakPesan");
    kotakPesan.textContent = "Nama: Stifa Aliya Fauziyyah | NIM: 2511501049";
    kotakPesan.style.backgroundColor = "#e1f5fe";
    kotakPesan.style.borderColor = "#00a8e8";

    // C. Ubah Tag Paragraf (<p>)
    const paragrafList = document.getElementsByTagName("p");
    if (paragrafList.length > 0) {
        paragrafList[0].textContent = "Status Akademik: Aktif (Semester Genap)";
    }

    // D. Ubah Input Form (Name)
    const inputElemen = document.getElementsByName("inputNama");
    if (inputElemen.length > 0) {
        inputElemen[0].value = "Mahasiswa Teknologi Informasi Keren Abiez";
    }

    // E. Ubah Styling Semua Paragraf Sekaligus (querySelectorAll)
    const semuaParagraf = document.querySelectorAll("p");
    semuaParagraf.forEach(function (el) {
        el.style.fontWeight = "600";
        el.style.color = "#003f88";
    });
});