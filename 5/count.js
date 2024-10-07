function click1(event) {
  let f1 = document.getElementsByName("field1");
  let r = document.getElementById("result");
  let s = document.getElementsByName("select1");
  if (s[0].value=="v1")  r.innerHTML = f1[0].value*3500;
  if (s[0].value=="v2")  r.innerHTML = f1[0].value*9000;
  if (s[0].value=="v3")  r.innerHTML = f1[0].value*11500;
  if (s[0].value=="v4")  r.innerHTML = f1[0].value*8000;
  if (s[0].value=="v5")  r.innerHTML = f1[0].value*4000;
  console.log(r[0].value);
  event.preventDefault();
  return false;
}
window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("button1");
  b.addEventListener("click", click1);
});
