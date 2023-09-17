document.writeln("<center>");
document.writeln("<h1>Data Mahasiswa</h1>");
document.writeln("<h1>Sekolah Vokasi Institut Pertanian Bogor</h1>");
document.writeln("<hr width=800 color=black>");
document.writeln("</center>");

function tekan() {
  var nimstr = document.iform.nim.value;
  var namastr = document.iform.nama.value;
  document.iform.inim.value = nimstr;
  document.iform.inama.value = namastr;

  var sexstr = document.iform.sex.value;
  document.iform.isex.value = sexstr;
  var agamastr = document.iform.agama.value;
  document.iform.iagama.value = agamastr;

  if (iform.status.checked == true) {
    document.iform.istatus.value = "Kawin";
  } else {
    document.iform.istatus.value = "Tidak Kawin";
  }

  var jurusanstr = document.iform.jurusan.value;
  document.iform.ijurusan.value = jurusanstr;
  var komentarstr = document.iform.komentar.value;
  document.iform.ikomentar.value = komentarstr;
}
