function hitung() {
    var a = parseFloat(document.fform.bila.value);
    if (isNaN(a)) {
        a = 0.0;
    }

    var b = parseFloat(document.fform.bilb.value);
    if (isNaN(b)) {
        b = 0.0;
    }

    var c = parseFloat(document.fform.bilc.value);
    if (isNaN(c)) {
        c = 0.0;
    }
    var d=b*b-4*a*c;
    var x1=(-b+Math.sqrt(d))/2*a;
    var x2=(-b-Math.sqrt(d))/2*a;
    alert("x1 = "+x1+"\nx2 = "+x2)
}