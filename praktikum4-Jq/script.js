$(document).ready(function () { //memanggil jquery 
  // Ubah warna kotak
  $("#ubahWarna").click(function () {
    $("#kotak").css("background-color", "orange");
  });

  // Sembunyikan elemen
  $("#sembunyikan").click(function () {
    $("#kotak").hide();
  });

  // Tampilkan elemen
  $("#tampilkan").click(function () {
    $("#kotak").show();
  });

  // Animasi sederhana
  $("#animasi").click(function () {
    $("#kotak")
      .animate(
        {
          width: "200px",
          height: "200px",
          opacity: 0.5,
        },
        1000
      )
      .animate(
        {
          width: "150px",
          height: "150px",
          opacity: 1,
        },
        1000
      );
  });
});