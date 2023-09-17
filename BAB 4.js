function hitungtotal() {
  var nama = document.fform.inama.value;
  var tujuan = document.fform.itujuan.value;
  var kelas = document.fform.ikelas.value;
  var jumlahtiket = parseFloat(document.fform.ijumlah.value);
  var ht = 0.0;
  var sub = 0.0;
  var diskon = 0.0;
  var total = 0.0;

  if (tujuan == "Jakarta") {
    if (kelas == "Eksklusif") {
      ht = 70000;
    } else if (kelas == "Bisnis") {
      ht = 40000;
    } else {
      ht = 10000;
    }
  } else if (tujuan == "Solo") {
    if (kelas == "Eksklusif") {
      ht = 80000;
    } else if (kelas == "Bisnis") {
      ht = 50000;
    } else {
      ht = 20000;
    }
  } else {
    if (kelas == "Eksklusif") {
      ht = 90000;
    } else if (kelas == "Bisnis") {
      ht = 60000;
    } else {
      ht = 30000;
    }
  }
  sub = jumlahtiket * ht;

  if (document.fform.imember.checked == true) {
    diskon = 0.1 * sub;
  } else {
    diskon = 0.0;
  }

  total = sub - diskon;
  document.fform.otiket.value = eval(ht);
  document.fform.osub.value = eval(sub);
  document.fform.odiskon.value = eval(diskon);
  document.fform.ototal.value = eval(total);
  // gunakan untuk mengecek !!! alert (total);
}
