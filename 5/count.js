function click1(event) {
  let f1 = document.getElementsByName("field1");
  let r = document.getElementById("result");
  let s = document.getElementsByName("select1");
  if (f1.match(/^\d+$/)!== null){
  if (s[0].value=="v1")  r.innerHTML = f1[0].value*3500;
  if (s[0].value=="v2")  r.innerHTML = f1[0].value*7500;
  if (s[0].value=="v3")  r.innerHTML = f1[0].value*11500;
  if (s[0].value=="v4")  r.innerHTML = f1[0].value*8000;
  if (s[0].value=="v5")  r.innerHTML = f1[0].value*4000;
}
  return false;  
  event.preventDefault();
}
window.addEventListener('DOMContentLoaded', function (event) {
  
  let b = document.getElementById("button1");
  b.addEventListener("click", click1);
});
