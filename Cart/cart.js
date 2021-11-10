var parent = document.getElementById("product_div");
let cartitems = JSON.parse(localStorage.getItem("myglammCart"));

var subtotal = 0;
var c = 1;
function showProducts() {
  cartitems.forEach(function (product) {
    cartitems.innerHTML = null;

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = product.displayimg;

    let product_price = document.createElement("p");
    product_price.textContent = "₹" + product.price;
    let product_name = document.createElement("p");
    product_name.textContent = product.title;

    let quantity_div = document.createElement("div");
    let plus = document.createElement("p");
    let quantity = document.createElement("p");
    let minus = document.createElement("p");
    quantity.innerText = c;

    // -----style----
    product_name.setAttribute(
      "style",
      "font-size:16px; margin: 20px 35px;width:350px"
    );
    product_price.setAttribute("style", "font-size:20px; margin: 40px 40px;");
    div.setAttribute("style", "Margin-top:30px; display:flex;");
    quantity_div.setAttribute(
      "style",
      "display:flex;justify-content:center; align-items:center; width:100px;height:60px; background-color:#EEEEEE;margin:30px 100px;position:relative;"
    );

    plus.innerText = "+";

    plus.setAttribute(
      "style",
      "font-size:30px; margin-left:10px;cursor:pointer;"
    );
    minus.setAttribute(
      "style",
      "font-size:30px; margin-right:12px;cursor:pointer;color:#BDBDBD;"
    );

    minus.innerText = "-";
    plus.addEventListener("click", increassQuantirty);
    minus.addEventListener("click", decressQuantirty);

    // var individual_total_amount = document.createElement("p");

    function increassQuantirty() {
      if (c == 5) {
        quantity.innerText = 5;
        // plus.removeEventListener("click", increassQuantirty);
        // console.log(c);
        individual_total_amount.innerText = product.price * +quantity.innerText;

        plus.style.color = "#BDBDBD";

        individual_total_amount.innerText = "₹" + product.price * c;
      } else {
        quantity.innerText = ++c;
        individual_total_amount.innerText = product.price * +quantity.innerText;
        minus.style.color = "black";
      }

      individual_total_amount.innerText = product.price * c;
      // console.log(individual_total_amount.innerText , "im")
      //   subtotal += product.price * c;
      // console.log(subtotal);

      //   subtotal = Number(individual_total_amount.innerText) + subtotal;
      let TOTAL = document.getElementById("");
      // console.log(TOTAL)
    }

    // console.log(subtotal+ increassQuantirty());

    function decressQuantirty() {
      if (c <= 1) {
        quantity.innerText = 1;
        individual_total_amount.innerText = product.price * +quantity.innerText;
        minus.style.color = "#BDBDBD";
        plus.style.color = "black";
        // individual_total_amount.innerText = "₹" + product.price * c;
      } else {
        quantity.innerText = --c;

        individual_total_amount.innerText = product.price * +quantity.innerText;
        subtotal = Number(individual_total_amount.innerText) + subtotal;
        console.log(subtotal, "decrease item");
        plus.style.color = "black";
      }

      // individual_total_amount.innerText =  product.price * c;
      // subtotal = (Number(individual_total_amount.innerText) + subtotal)
      // // console.log(subtotal);
    }

    quantity.setAttribute("style", "font-size:30px;");

    // console.log(quantity)
    var individual_total_amount = document.createElement("p");
    individual_total_amount.innerText = product.price * c;

    //    console.log(Number(individual_total_amount.innerText));
    //    console.log(individual_total_amount.innerText , "im")
    individual_total_amount.setAttribute(
      "style",
      "font-size:20px; margin-top: 40px;"
    );

    //         ------>remove item<-------

    var remove_item = document.createElement("img");
    remove_item.src =
      "https://www.pngfind.com/pngs/m/9-98161_x-mark-x-alphabet-icon-hd-png-download.png";
    remove_item.setAttribute(
      "style",
      "width:30px; height:20px;margin:40px 70px;cursor:pointer;"
    );

    remove_item.onclick = function () {
      removetoCart(event, product);
    };

    //         ------>remove item<-------

    let line = document.createElement("hr");

    line.setAttribute(
      "style",
      "margin-top:15px;height: 1px;background-color: #E0E0E0; border:none"
    );

    quantity_div.append(minus, quantity, plus);

    div.append(
      img,
      product_name,
      product_price,
      quantity_div,
      individual_total_amount,
      remove_item
    );

    parent.append(div, line);

    // subtotal += product.price * c;
    // console.log(subtotal)
  });

  //         ------>remove item function<-------

  function removetoCart(e, prod) {
    e.preventDefault();

    var newprods = cartitems.filter(function (p) {
      if (p != prod) {
        return p;
      }
    });
    localStorage.removeItem("myglammCart");

    localStorage.setItem("myglammCart", JSON.stringify(newprods));
    location.reload();
  }

  //         ------>remove item function<-------

  var total_amount = document.getElementById("total_amount");
  var amount = document.createElement("p");
  amount.setAttribute(
    "style",
    "margin-left:-52%;font-weight:600;font-size:20px"
  );

  amount.innerText = subtotal;
  total_amount.append(amount);
}
var total_value = document.getElementById("total_value");
var bag_heading = document.getElementById("bag_heading");
var checkout_btn = document.getElementById("checkout_btn");

var bag_item = document.createElement("h1");
bag_item.innerText = "(" + cartitems.length + ")";
bag_heading.append(bag_item);
if (cartitems.length >= 1) {
  bag_heading.style.display = "flex";
  total_value.style.display = "flex";
  checkout_btn.style.display = "block";
}

var empty_cart = document.getElementById("sub_div");

// console.log(cartitems.length);
if (cartitems.length < 1) {
  empty_cart.style.display = "block";
} else {
  empty_cart.style.display = "none";
  empty_cart.style.display = "none";
}

showProducts();
let TOTAL = document.getElementById("");
// console.log(TOTAL)

let total = 0;
cart.forEach(function (product) {
  let cart = JSON.parse(localStorage.getItem(""));

  console.log(product.Price);
  total = total + parseInt(product.Price);
  console.log(typeof total);
  TOTAL.innerText = total;

  TOTAL.style.fontWeight = "bold";

  //console.log(total)
});
