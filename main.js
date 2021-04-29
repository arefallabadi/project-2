let logIn = [];
let user = [];
let massage = [];

let all = [
  { section: "clothes", img: "./clo/s1.jpg", price: 50, p: "for man" },
  { section: "clothes", img: "./clo/s4.jpg", price: 45, p: "for man" },
  { section: "clothes", img: "./clo/s2.jpg", price: 55, p: "for man" },
  { section: "clothes", img: "./clo/s3.jpg", price: 60, p: "for man" },
  { section: "clothes", img: "./clo/s6.jpg", price: 45, p: "For Women" },
  { section: "clothes", img: "./clo/s5.jpg", price: 85, p: "For Women" },
  { section: "clothes", img: ".//clo/s7.jpg", price: 50, p: "For Women" },
  { section: "clothes", img: "./clo/s8.jpg", price: 25, p: "For Children" },
  { section: "clothes", img: "./clo/s9.jpg", price: 30, p: "For Children" },
  { section: "clothes", img: "./clo/s10.jpg", price: 20, p: "For Children" },
  { section: "electronic", img: "./ele/1.webp", price: 20, p: "Headphones"  },
  { section: "electronic", img: "./ele/2.jpg", price: 70, p: "Screen" },
  { section: "electronic", img: "./ele/3.jpg", price: 10, p: "Mouse" },
  { section: "electronic", img: "./ele/4.jpg", price: 7, p: "Charger" },
  { section: "electronic", img: "./ele/5.jpg", price: 20, p: "Keyboard" },
  { section: "kitchen", img: "./kit/4.jpg", price: 20, p: "Platters" },
  { section: "kitchen", img: "./kit/1.jpg", price: 70, p: "Cooker" },
  { section: "kitchen", img: "./kit/3.jpg", price: 10, p: "Spoons" },
  { section: "kitchen", img: "./kit/2.jpg", price: 15, p: "Cups" },
  { section: "kitchen", img: "./kit/5.jpg", price: 20, p: "Baskets" },
  { section: "shoes", img: "./shoes/1.jpg", price: 35, p: "Style 1" },
  { section: "shoes", img: "./shoes/2.jpg", price: 25, p: "Style 2" },
  { section: "shoes", img: "./shoes/3.jpg", price: 30, p: "Style 3" },
  { section: "shoes", img: "shoes/4.jpg", price: 45, p: "Style 4" },
  { section: "shoes", img: "shoes/5.jpg", price: 20, p: "Style 5" },
  { section: "bag", img: "./bag/bag1.jpg", price: 20, p: "Style 1" },
  { section: "bag", img: "./bag/bag2.jpg", price: 30, p: "Style 2" },
  { section: "bag", img: "./bag/bag3.jpg", price: 20, p: "Style 3" },
  { section: "bag", img: "./bag/bag4.jpg", price: 17, p: "Style 4" },
  { section: "bag", img: "./bag/bag5.jpg", price: 50, p: "Style 5" },
];

const login = $("#login");
const register = $("#register");
const contact = $("#contact");
const about = $("#about");
const market = $("#market");
const clothes = $("#clothes");
const electronic = $("#electronic");
const kitchen = $("#kitchen");
const shoes = $("#shoes");
const bag = $("#bag");
const buy = $("#buy");
const c =$("#c")

const createCard =()=>{
    
    for(let i = 0 ; i<all.length ;i++ ){
       let div = $(
        `
        <div>
            <div class="card">
              <img class="img" src=${all[i].img} style="width:100%">
              <div class="container">
                <h4><b> ${all[i].price} JD</b></h4>
                <p>${all[i].p}</p>
              </div>
            </div>
            `
        )
        c.append(div)
    }
}



const load = () => {
  register.hide();
  contact.hide();
  about.hide();
  market.hide();
  clothes.hide();
  electronic.hide();
  kitchen.hide();
  shoes.hide();
  bag.hide();
  buy.hide();
};

let but_1 = false;
const registering = () => {
  if (but_1 === false) {
    register.show();
    but_1 = true;
  } else {
    register.hide();
    but_1 = false;
  }
};
let but_2 = false;
const contactUs = () => {
  if (but_2 === false) {
    contact.show();
    but_2 = true;
  } else {
    contact.hide();
    but_2 = false;
  }
};
let but_3 = false;
const abo = () => {
  if (but_3 === false) {
    about.show();
    but_3 = true;
  } else {
    about.hide();
    but_3 = false;
  }
};

const fname = $("#fname");
const email = $("#email");
const password = $("#password");
const phone = $("#phone");
const loc = $("#location");

let x;
let z;
const newUser = () => {
  let obj_1 = {
    name: fname.val(),
    email: email.val(),
    password: password.val(),
    phone: phone.val(),
    location: loc.val(),
  };
  let obj_2 = {
    name: fname.val(),
    email: email.val(),
    password: password.val(),
  };
  user.push(obj_1);
  logIn.push(obj_2);

  localStorage.setItem("users", JSON.stringify(user));
  x = JSON.parse(localStorage.getItem("users"));

  localStorage.setItem("log", JSON.stringify(logIn));
  z = JSON.parse(localStorage.getItem("log"));

  fname.val("");
  email.val("");
  password.val("");
  phone.val("");
  loc.val("");
};
