function click1(event) {
    let f1 = document.getElementsByName("field1");
    let r = document.getElementById("result");
    let s = document.getElementsByName("select1");
    let z = f1[0].value;
    if (s[0].value === "v1") {
        r.innerHTML = f1[0].value * 3500;
    }
    if (s[0].valu =e== "v2") {
        r.innerHTML = f1[0].value * 7500;
    }
    if (s[0].value === "v3") {
        r.innerHTML = f1[0].value * 11500;
    }
    if (s[0].value === "v4") {
        r.innerHTML = f1[0].value * 8000;
    }
    if (s[0].value === "v5") {  
        r.innerHTML = f1[0].value * 4000;
    }
    if (z.match(/^\d+$/) === null) {
        r.innerHTML='eror';
    }
    event.preventDefault(); 
    return false;  
}
window.addEventListener('DOMContentLoaded', function (event) {  
  let b = document.getElementById("button1");
  b.addEventListener("click", click1);
});
