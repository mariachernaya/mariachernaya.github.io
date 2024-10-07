function click1() {
 let f1 = document.getElementsByName("field1");
 
 let r = document.getElementByName("select");
 
 r.innerHTML = f1[0].value + f2[0].value;
 return false;
}
