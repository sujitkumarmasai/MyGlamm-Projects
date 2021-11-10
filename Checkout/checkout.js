
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

    var addr = city+", "+state+", "+pin;
    
    op.innerHTML = null;

    op.append("Delivery Available On  "+addr);



}


