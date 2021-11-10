
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


