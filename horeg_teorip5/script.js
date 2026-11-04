const form = document.getElementById("formDaftar");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let valid = true;

    // Menghapus pesan error sebelumnya
    document.querySelectorAll("small").forEach(function(error) {
        error.textContent = "";
    });

    document.getElementById("pesanSukses").textContent = "";

    // Validasi nama
    if (nama === "") {
        document.getElementById("errorNama").textContent =
            "Nama tidak boleh kosong.";
        valid = false;
    }

    // Validasi email
    if (!email.includes("@")) {
        document.getElementById("errorEmail").textContent =
            "Email harus mengandung @.";
        valid = false;
    }

    // Validasi password
    if (password.length < 8) {
        document.getElementById("errorPassword").textContent =
            "Password minimal 8 karakter.";
        valid = false;
    }

    // Pesan jika semua data benar
    if (valid) {
        document.getElementById("pesanSukses").textContent =
            "Pendaftaran berhasil, selamat datang, " + nama + "!";
        form.reset();
    }
});

// Menampilkan dan menyembunyikan password
document.getElementById("togglePassword").addEventListener("click", function() {
    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
        this.textContent = "Sembunyikan";
    } else {
        password.type = "password";
        this.textContent = "Tampilkan";
    }
});