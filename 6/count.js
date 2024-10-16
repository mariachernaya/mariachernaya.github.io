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
    let rd = document.querySelectorAll(".radiobutton input[type=radio]");
    let f = document.getElementsByName("field");
    let s = document.getElementsByName("select");
    let r = document.getElementById("result");
    let c1 = document.getElementsByName("check-1");
    let c2 = document.getElementsByName("check-2");
    let я = f1[0].value;
    if (rad[0].checked) {
        r.innerHTML = f[0].value * 4200;
    }
    if (rd[1].checked) {
        if (s[0].value === "v1") {
            r.innerHTML = f1[0].value * 500;
        }
        if (s[0].value === "v2") {
            r.innerHTML = f1[0].value * 400;
        }
        if (s[0].value === "v3") {
            r.innerHTML = f1[0].value * 600;
        }
        if (s[0].value === "v4") {
            r.innerHTML = f1[0].value * 700;
        }
    }
    if (rd[2].checked) {
        if (c1[0].checked && c2[0].checked) {
            r.innerHTML = f1[0].value * 1200;
        } else if (c1[0].checked) {
            r.innerHTML = f1[0].value * 1100;
        } else if (c2[0].checked) {
            r.innerHTML = f1[0].value * 900;
        } else {
            r.innerHTML = f1[0].value * 800;
        }
    }

    if (m.match(/^\d+$/) === null) {
        r.innerHTML = "некорректное значение";
    }
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button1");
    b.addEventListener("click", click1);
});
