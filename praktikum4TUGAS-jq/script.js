// Memastikan seluruh dokumen HTML telah dimuat sebelum menjalankan jQuery
$(document).ready(function () {

    // 1. EVENT HANDLER: click() & METODE: css(), html()
    // Mengubah skema warna elemen dan memperbarui teks status HTML.
    $("#btnGantiTema").click(function () {
        // Metode css(): Mengubah warna latar belakang dan teks pada card
        $(".card").css({
            "background-color": "#eef6ff",
            "border-left-color": "#002b4d"
        });

        // Metode html(): Memperbarui konten HTML di dalam statusBox
        $("#statusBox").html("<strong>Status:</strong> Warna tema elemen berhasil diubah ke mode Biru Gelap!");
    });


    // 
    // 2. EVENT HANDLER: click() & METODE: toggle(), text()
    // Sembunyikan atau tampilkan kartu biodata secara bergantian.
    // 
    $("#btnToggleBio").click(function () {
        // Metode toggle(): Menyembunyikan/menampilkan elemen #cardBiodata
        $("#cardBiodata").toggle(400, function () {
            // Metode text(): Mengganti teks status berdasarkan kondisi visual
            if ($("#cardBiodata").is(":visible")) {
                $("#statusBox").text("Kartu Biodata ditampilkan.");
            } else {
                $("#statusBox").text("Kartu Biodata disembunyikan.");
            }
        });
    });


    // 
    // 3. EVENT HANDLER: click() & METODE: fadeOut(), fadeIn()
    // Efek memudar (fade) pada kartu keahlian.
    // 
    $("#btnFadeKeahlian").click(function () {
        // Jika elemen terlihat, lakukan fadeOut; jika tidak, lakukan fadeIn
        if ($("#cardKeahlian").is(":visible")) {
            // Metode fadeOut(): Memudarkan elemen hingga hilang
            $("#cardKeahlian").fadeOut(500);
            $("#statusBox").text("Keahlian dipudarkan (fadeOut).");
        } else {
            // Metode fadeIn(): Memunculkan kembali elemen secara perlahan
            $("#cardKeahlian").fadeIn(500);
            $("#statusBox").text("Keahlian dimunculkan (fadeIn).");
        }
    });


    // 
    // 4. EVENT HANDLER: click() & METODE: slideUp(), slideDown()
    // Efek gulung (slide) pada daftar proyek portofolio.
    // 
    $("#btnSlidePortofolio").click(function () {
        if ($("#projectContent").is(":visible")) {
            // Metode slideUp(): Menggulung elemen ke atas (menyembunyikan)
            $("#projectContent").slideUp(400);
            $("#statusBox").text("Daftar Proyek digulung ke atas (slideUp).");
        } else {
            // Metode slideDown(): Menggulung elemen ke bawah (menampilkan)
            $("#projectContent").slideDown(400);
            $("#statusBox").text("Daftar Proyek digulung ke bawah (slideDown).");
        }
    });


    // 
    // 5. EVENT HANDLER: click() & METODE: animate() (EFEK ANIMASI)
    // Animasi perbesaran dan rotasi opacity pada gambar foto profil.
    // 
    $("#btnAnimateAvatar").click(function () {
        // Metode animate(): Mengubah properti CSS secara bertahap (animasi)
        $("#avatarImg")
            .animate({
                width: "150px",
                height: "150px",
                opacity: 0.7
            }, 400)
            .animate({
                width: "120px",
                height: "120px",
                opacity: 1.0
            }, 400);

        $("#statusBox").text("Animasi perbesaran foto profil dijalankan (animate).");
    });


    // 
    // 6. EVENT HANDLER: hover() & METODE: css()
    // Efek interaktif saat kursor melintasi tag keahlian (Skill Tags).
    // 
    $(".skill-tag").hover(
        // Fungsi saat kursor masuk (Mouseenter)
        function () {
            $(this).css({
                "background-color": "#0056b3",
                "color": "#ffffff",
                "cursor": "pointer"
            });
        },
        // Fungsi saat kursor keluar (Mouseleave)
        function () {
            $(this).css({
                "background-color": "#e6f0fa",
                "color": "#0056b3"
            });
        }
    );

});