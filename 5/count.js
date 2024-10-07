function click1() {
 let f1 = document.getElementsByName("field1");
 
 let s = document.getElementByName("select1");
 if (s[0].value=="v1") r.innerHTML = f1[0].value*3500;
 if (s[0].value=="v2") r.innerHTML = f1[0].value*9000;
 if (s[0].value=="v3") r.innerHTML = f1[0].value*11500;
 if (s[0].value=="v4") r.innerHTML = f1[0].value*8000;
 if (s[0].value=="v5") r.innerHTML = f1[0].value*4000;
 return false;
}
