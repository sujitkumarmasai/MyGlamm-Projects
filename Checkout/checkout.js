
var tamount = document.getElementById("tamount");
var shipcharge = document.getElementById("shipcharge");
var discount = document.getElementById("discount");

    
let total01 = JSON.parse(localStorage.getItem("myglamm-total"));
let total = total01[0];
console.log(total);


tamount.innerHTML = null;
shipcharge.innerHTML = null;
discount.innerHTML = null;

tamount.style.fontWeight = "bold";
tamount.style.textAlign = "right";
shipcharge.style.textAlign = "right";
discount.style.textAlign = "right";


tamount.innerHTML = "₹ "+total;
shipcharge.innerHTML = "₹ "+120;
discount.innerHTML = "₹ "+30;


var payamount = document.getElementById("payamount");
var srng = total+90;
payamount.innerHTML = null;
payamount.style.fontWeight = "bold";
payamount.style.textAlign = "right";

payamount.innerHTML = "₹ "+srng;


var yousaved = document.getElementById("yousaved");

yousaved.innerHTML = null;
yousaved.style.textAlign = "right";

yousaved.innerHTML = "₹ "+30;



var non = document.getElementById("non");
non.style.textAlign = "right";



var proceed_payment = document.getElementById("proceed_payment");
proceed_payment.onclick = function()
{
    window.location.href = "../payment/payment.html";
}


var op = document.getElementById("op");

function ckeckaddr()
{
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var pin = document.getElementById("pin").value;
    console.log(city)

    var addr = city+", "+state+", "+pin;
    
    op.innerHTML = null;


    if(city.length <= 3 && state.length <= 3 && pin <= 15)
    {
        alert("Please Add Your Address....")
    }
    else
    {
        op.append("Delivery Available On  "+addr);
    }
     


}


