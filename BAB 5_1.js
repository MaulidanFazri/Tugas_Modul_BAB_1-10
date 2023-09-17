function hitung() {
  var hn = parseFloat(document.fform.n.value);
  if (hn > 0) {
    var f = 1;
  } else {
    var f = 0;
  }

  var jumlah = 0.0;
  for (i = 1; i <= hn; i++) {
    f = f * i;
    jumlah = jumlah + i;
  }
  document.fform.of.value = eval(f);
  document.fform.ojumlah.value = eval(jumlah);
}
