window.addEventListener("DOMContentLoaded", function () {
    let chek = document.getElementById("ch");
    let s = document.getElementById("sel");
    let r = document.querySelectorAll(".radiobutton input[type=radio]");
    r.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
            let rad = event.target;
            if (rad.value === "r1") {
                chek.style.display = "none";
                s.style.display = "none";
            }
            if (rad.value === "r2") {
                chek.style.display = "none";
                s.style.display = "block";
            }
            if (rad.value === "r3") {
                chek.style.display = "block";
                s.style.display = "none";
            }
            if (rad.value === "r4") {
                chek.style.display = "none";
                s.style.display = "none";
            }
        });
    });
});

function click1() {
    let r1 = document.querySelectorAll(".radiobutton input[type=radio]");
    let f1 = document.getElementsByName("field1");
    let s = document.getElementsByName("select1");
    let r = document.getElementById("result");
    let c1 = document.getElementsByName("check-1");
    let c2 = document.getElementsByName("check-2");
    let z = f1[0].value;
    if (r1[0].checked) {
        r.innerHTML = f1[0].value * 1500;
    }
    if (r1[1].checked) {
        if (s[0].value === "v1") {
            r.innerHTML = f1[0].value * 4500;
        }
        if (s[0].value === "v2") {
            r.innerHTML = f1[0].value * 5200;
        }
        if (s[0].value === "v3") {
            r.innerHTML = f1[0].value * 7000;
        }
        if (s[0].value === "v4") {
            r.innerHTML = f1[0].value * 11000;
        }
    }
    if (r1[2].checked) {
        if (c1[0].checked && c2[0].checked) {
            r.innerHTML = f1[0].value * 100000;
        } else if (c1[0].checked) {
            r.innerHTML = f1[0].value * 30000;
        } else if (c2[0].checked) {
            r.innerHTML = f1[0].value * 40000;
        } else {
            r.innerHTML = f1[0].value * 20000;
        }
    }
    if (r1[3].checked) {
        r.innerHTML = f1[0].value * 10000;
    }
    if (z.match(/^\d+$/) === null) {
        r.innerHTML = "некорректное значение";
    }
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button1");
    b.addEventListener("click", click1);
});
