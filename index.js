let product = [
  {
    id: 0,
    image: "assets/redmi.webp",
    title: "Redmi ",
    price: 100,
    quantity: 1,
  },
  {
    id: 1,
    image: "assets/samsung.webp",
    title: "Samsung",
    price: 200,
    quantity: 1,
  },
  {
    id: 2,
    image: "assets/oneplus.webp",
    title: "Oneplus",
    price: 300,
    quantity: 1,
  },
  {
    id: 3,
    image: "assets/apple.webp",
    title: "Apple",
    price: 400,
    quantity: 1,
  },
];
let cetegry = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
// if(variable){
//   function hellow(){
//     console.log("ksjdhkjsdh");
//   }
//   // hellow
// }
// else{
function onclickhandler2(i) {
  window.open("photo.html")

  pikSrc = cetegry.find((lem) => { return lem.id === i })
  localStorage.setItem("src", (pikSrc.image))
  localStorage.setItem("Name", (pikSrc.title))
  localStorage.setItem("price", (pikSrc.price))
  // let pik=document.getElementById("pik").innerHTML=

  // setTimeout(hellow(),2000)

}



const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
  { username: "user4", password: "password4" },
];

const switchcases = () => {
  let page = document.body.id;
  switch (page) {
    case "login":
      document
        .getElementById("login-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
        });

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const user = users.find((u) => {
        return u.username === username && u.password === password;
      });

      if (user) {
        window.location.href = "index2.html";
        localStorage.setItem("name", `${username}`);
      } else {
        document.getElementById("error-msg").style.display = "block";
        document.getElementById("signup").style.display = "block";
      }
      // add custom event listeners for posts page
      break;
    case "success":


      document.getElementById("root").innerHTML = cetegry
        .map((item, i) => {
          var { image, title, price } = item;

          return (
            ` <div class="box">
    <div class="contnt" id="box2" style="align-items: center; justify-content:center;display:flex;flex-direction:column"
    onclick="onclickhandler2(${i})" >
        <div class="img_box">
          <img class="images" src=${image} alt="">
          </div>
          <p>${title}</p>
          </div>
          <div class="bottom">
            <h2>${price}</h2>` +
            `<button id='button' onclick='addtocart(${i})'>add to cart</button>` +
            `</div>
      </div>`
          );
        })
        .join("");

   
      

     
 

      //add custom event listeners for users page
      break;
    case "pictures":
      let PPrice=localStorage.getItem("price")
  document.getElementById("totalVal").innerHTML=PPrice;

      let NNmae=localStorage.getItem("Name")
      let H2=document.getElementById("H2")
      H2.innerHTML=NNmae
      let real = localStorage.getItem("src")
      let pik = document.getElementById("pik")
      pik.innerHTML = `<img class="images" src="${real}" >`
      console.log(pik);
    default:
      console.log("hello");
  }
};

var cart = [];
function displaycart() {
  let j = 0;
  let total = 0;
  if (cart.length == 0) {
    document.getElementById("cartlist").innerHTML = `your Cart is Empty ${cart.length = 0}`;
        document.getElementById("spn").innerHTML = cart.length <1 ? "0" : cart.length
        document.getElementById("total").innerHTML = "$" + 0 + ".00";
  } else {
    document.getElementById("cartlist").innerHTML = cart
      .map((items, index) => {
        var { image, title, price, quantity } = items;
        total = total + price * items.quantity;
        // cart LOgo insert
        document.getElementById("spn").innerHTML = cart.length <1 ? "0" : cart.length
        // total price
        document.getElementById("total").innerHTML = "$" + total + ".00";

        return (
          `<div class="cart-item">
<div class="row-img">
  <img src=${image} class="rowimg" >
</div>
<p style="font-size: 12px;">${title}</p>
<h2 style="font-size: 13px;">${price}</h2>
<button class="range"onclick="Dicrement(${index})">-</button>
<p style="font-size: 12px;">${quantity}</p>` +
          " <button class='range' onclick = 'increment(" +
          index +
          ")'>+</button>" +
          "<i class='bi bi-trash3' onclick='delelment(" +
          index +
          ")'></i></div>"
        );
      })
      .join("");
  }
}

function switchcasesmaker(){
  localStorage.clear("name")
  window.location.href="index.html"
  
}
function addtocart(a) {
  cart.filter((item) => item.id == a).length > 0
    ? cart.filter((item) => item.id == a)[0].quantity++
    : cart.push({ ...cetegry[a] });
  displaycart();
}
// deleting Item
function delelment(a) {
  cart.splice(a, 1);
  displaycart();
}
// increment dicrement quantity
function increment(a) {
  cart[a].quantity++;
  displaycart();
}
function Dicrement(a) {
  cart[a].quantity--;
  if (cart[a].quantity == 0) {
  delelment(a)
  }
  displaycart();
}



// }



/////////////////////////////////////////////////////////////////////////////////
// <!-- create a list of items -->
// <ul id="item-list">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
//   <li>Item 4</li>
// </ul>

// <script>
// // get the list element
// const itemList = document.getElementById("item-list");

// // add an event listener to the list element
// itemList.addEventListener("click", function(event) {
//   // get the clicked item
//   const clickedItem = event.target.textContent;
//   console.log(clickedItem);
// });
// </script>

