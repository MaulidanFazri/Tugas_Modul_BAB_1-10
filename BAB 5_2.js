function hitung() {
  var osaldo = parseFloat(document.fform.saldo.value);
  var obunga = parseFloat(document.fform.bunga.value);
  var owaktu = parseFloat(document.fform.waktu.value);
  var jumlah = osaldo;
  var komentar = "";

  for (var i = 1; i <= owaktu; i++) {
    jumlah = jumlah + (jumlah * obunga) / 100;
    komentar += "Saldo Bulan " + i + " = Rp. " + jumlah + "\n";
  }

  document.fform.okomentar.value = komentar;
}
