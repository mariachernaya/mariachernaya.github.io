window.addEventListener('DOMContentLoaded', function () {
  const price =
    {"pr1": 10, "pr2": 20, "pr3": 30, "pr4": 40, "pr5": 50};
 
  let b = document.getElementById("my-button");
  let product = document.getElementById("list");
  let count = document.getElementById("count");
  let r = document.getElementById("result");
  count.addEventListener("click", function () {
        let inp = amount.value;
        if (inp.match(/^\d+$/) !== null) {
            let result = priceList[product.value] * inp;
            r.innerText = result;
        } else {
            resultfield.innerText = "неверный формат ввода";
        }
    });
});


