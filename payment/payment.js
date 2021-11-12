var paymentbtm = document.getElementById("pay");
paymentbtm.onclick = function()
{
    window.location.href = "../success_page/success.html";
}


let total01 = JSON.parse(localStorage.getItem("myglamm-promo"));
let stotal = total01[0];
console.log(stotal);



var total = document.getElementById("total");
total.innerHTML = null;
var srng = stotal;
total.append("Rs "+srng);


