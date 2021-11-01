let navbar = `
<div class="top">
            <h4>MyGlamm Youthfull Launch</h4>
            <h3>SHOP NOW</h3>
            <h4>MyGlamm Store</h4>
         </div>
         <div class="mid">
             <img src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="">
             <input id="search" placeholder="Find Lipstick, Eyeliner, Makeup Tutorial etc." type="text">
             <button id="navbar-btn">Refer & Earn </button>
             <img id="cart" src="./public/cart.png" alt="">
             <img id="login" src="./public/account.png" alt="">
         </div>
         <div class="bottom">
             <h3 class="nav-link">HOME</h3>
             <h3 class="nav-link">MAKEUP</h3>
             <h3 class="nav-link">HAIR CARE</h3>
             <h3 class="nav-link">SKIN CARE</h3>
             <h3 class="nav-link">SANITIZING CARE</h3>
             <h3 class="nav-link">COLLECTION</h3>
             <h3 class="nav-link">REWARDS</h3>
             <h3 class="nav-link">MYGLAMM STUDIO</h3>
             <h3 class="nav-link">OFFERS</h3>
         </div>
         <div id="login-popup">
             <h2 id="popup-X">X</h2>
             <h4>Get 15% MyGlammXO Points back on every order</h4>
             <img src="https://www.myglamm.com/images/myglamm-logo.png" alt="">
             <h3>*Mobile Number</h3>
             <input type="number" name="" id="mobile">
             <button id="mobile-btn">CONTINUE</button>
             <p>Or Continue with</p>
             <div>
                 <img src="./public/google.png" alt="">
                 <img src="./public/facebook.png" alt="">
             </div>
         </div>
`;
function ShowSignup() {
  let login = document.getElementById("login");
  let login_popup = document.getElementById("login-popup");
  let popup_X = document.getElementById("popup-X");
  login.addEventListener("click", () => {
    login_popup.style.display = "block";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  });
  popup_X.addEventListener("click", () => {
    login_popup.style.display = "none";
    // document.body.style.backgroundColor = "white";
  });
}
export { navbar, ShowSignup };
