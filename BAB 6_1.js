var pesanDitampilkan = false;

function tampilkanjam() {
  var waktu = new Date();
  var jam = waktu.getHours();
  var menit = waktu.getMinutes();
  var detik = waktu.getSeconds();

  var jamstr = (jam < 10 ? "0" : "") + jam;
  var menitstr = (menit < 10 ? "0" : "") + menit;
  var detikstr = (detik < 10 ? "0" : "") + detik;

  document.getElementById("jam").textContent = jamstr;
  document.getElementById("menit").textContent = menitstr;
  document.getElementById("detik").textContent = detikstr;

  if (!pesanDitampilkan) {
    var pesan = "";
    if (jam >= 0 && jam < 9) {
      pesan = "Selamat Pagi";
    } else if (jam >= 9 && jam < 18) {
      pesan = "Selamat Siang";
    } else {
      pesan = "Selamat Malam";
    }

    alert(pesan);
    pesanDitampilkan = true;
  }
}

tampilkanjam();
setInterval(tampilkanjam, 0);
