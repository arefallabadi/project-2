let logIn;
let user;
let massage = [];
let cart;

if (!!localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
} else {
  cart = [];
}

if (!!localStorage.getItem("user")) {
  user = JSON.parse(localStorage.getItem("user"));
} else {
  user = [];
}

if (!!localStorage.getItem("logIn")) {
  logIn = JSON.parse(localStorage.getItem("logIn"));
} else {
  logIn = [];
}

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
  { section: "electronic", img: "./ele/1.webp", price: 20, p: "Headphones" },
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
const c = $("#c");
const e = $("#e");
const k = $("#k");
const s = $("#s");
const b = $("#b");
const carts = $("#cart");
const errorMassage = $("#errorMassage");
const errorMassage_2 = $("#errorMassage_2");

const load = () => {
  register.hide();
  contact.hide();
  about.hide();
  // market.hide();
  clothes.hide();
  electronic.hide();
  kitchen.hide();
  shoes.hide();
  bag.hide();
  buy.hide();
  errorMassage.hide();
  errorMassage_2.hide();
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
let but_c = false;
const clothesSection = () => {
  if (but_c === false) {
    clothes.show();
    all.filter((elm, i) => {
      if (elm.section === "clothes") {
        let div = $(
          ` <div>
                        <div class="card">
                          <img class="img" src=${elm.img}>
                          <div class="container">
                            <h4><b> ${elm.price} JD</b></h4>
                            <p>${elm.p}</p>
                            <button class="buttons" onclick="addToCart(${i})" >Add To Cart</button>
                          </div>
                        </div>
                        `
        );
        c.append(div);
      }
    });
    but_c = true;
  } else {
    clothes.hide();
    but_c = false;
    c.html("");
  }
};

let but_e = false;
const electronicSection = () => {
  if (but_e === false) {
    electronic.show();
    all.filter((elm, i) => {
      if (elm.section === "electronic") {
        let div = $(
          ` <div>
                        <div class="card">
                          <img class="img" src=${elm.img}>
                          <div class="container">
                            <h4><b> ${elm.price} JD</b></h4>
                            <p>${elm.p}</p>
                            <button class="buttons" onclick="addToCart(${i})" >Add To Cart</button>
                          </div>
                        </div>
                        `
        );
        e.append(div);
      }
    });
    but_e = true;
  } else {
    electronic.hide();
    but_e = false;
    e.html("");
  }
};

let but_k = false;
const kitchenSection = () => {
  if (but_k === false) {
    kitchen.show();
    all.filter((elm, i) => {
      if (elm.section === "kitchen") {
        let div = $(
          ` <div>
                        <div class="card">
                          <img class="img" src=${elm.img}>
                          <div class="container">
                            <h4><b> ${elm.price} JD</b></h4>
                            <p>${elm.p}</p>
                            <button class="buttons" onclick="addToCart(${i})" >Add To Cart</button>
                          </div>
                        </div>
                        `
        );
        k.append(div);
      }
    });
    but_k = true;
  } else {
    kitchen.hide();
    but_k = false;
    k.html("");
  }
};

let but_s = false;
const shoesSection = () => {
  if (but_s === false) {
    shoes.show();
    all.filter((elm, i) => {
      if (elm.section === "shoes") {
        let div = $(
          ` <div>
                        <div class="card">
                          <img class="img" src=${elm.img}>
                          <div class="container">
                            <h4><b> ${elm.price} JD</b></h4>
                            <p>${elm.p}</p>
                            <button class="buttons" onclick="addToCart(${i})" >Add To Cart</button>
                          </div>
                        </div>
                        `
        );
        s.append(div);
      }
    });
    but_s = true;
  } else {
    shoes.hide();
    but_s = false;
    s.html("");
  }
};

let but_b = false;
const bagSection = () => {
  if (but_b === false) {
    bag.show();
    all.filter((elm, i) => {
      if (elm.section === "bag") {
        let div = $(
          ` <div>
                        <div class="card">
                          <img class="img" src=${elm.img}>
                          <div class="container">
                            <h4><b> ${elm.price} JD</b></h4>
                            <p>${elm.p}</p>
                            <button class="buttons" onclick="addToCart(${i})" >Add To Cart</button>
                          </div>
                        </div>
                        `
        );
        b.append(div);
      }
    });
    but_b = true;
  } else {
    bag.hide();
    but_b = false;
    b.html("");
  }
};

const fname = $("#fname");
const email = $("#email");
const password = $("#password");
const phone = $("#phone");
const loc = $("#location");
let y;
const addToCart = (i) => {
  cart.push(all[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  y = JSON.parse(localStorage.getItem("cart"));
};

let but_cart;
const showCart = () => {
  if (y.length === 0) {
  } else if (but_cart === false) {
    buy.show();
    y.forEach((elm, i) => {
      let div = $(
        ` <div>
                        <div class="card">
                          <img class="img" src=${elm.img}>
                          <div class="container">
                            <h4><b> ${elm.price} JD</b></h4>
                            <p>${elm.p}</p>
                            <button class="buttons" onclick="removeFromCart(${i})" >Remove</button>
                          </div>
                        </div>
                        `
      );
      carts.append(div);
    });
    but_cart = true;
  } else {
    buy.hide();
    but_cart = false;
    carts.html("");
  }
};

const removeFromCart = (i) => {
  carts.html("");
  let arr = y.splice(i, 1);
  remove(arr);
};



const remove = () => {
  y.forEach((elm, i) => {
    let div = $(
      ` <div>
                    <div class="card">
                      <img class="img" src=${elm.img}>
                      <div class="container">
                        <h4><b> ${elm.price} JD</b></h4>
                        <p>${elm.p}</p>
                        <button class="buttons" onclick="removeFromCart(${i})" >Remove</button>
                      </div>
                    </div>
                    `
    );
    carts.append(div);
  });

  y.reduce((acc, elm, i) => {
    return acc + elm.price;
  }, 0);
};

const name_2 = $("#name_2");
const email_2 = $("#email_2");
const password_2 = $("#password_2");

const loginMain = () => {
  let array_2 = logIn.filter((elm,i)=>{
    return elm.name !== name_2.val() && elm.email !== email_2.val() && elm.password !== password_2.val()
 })
  if (array_2.length>0 || name_2.val()=== "" ||email_2.val()==="" ||password_2.val() === "" ) {
    errorMassage.show()
    errorMassage.html("Name Or Email Or Password incorrect ");
    name_2.css({
      border: "solid red",
    });
    password_2.css({
      border: "solid red",
    });
    email_2.css({
      border: "solid red",
    });
  }else {
    login.hide();
    market.show();
  }
};

let x;
let z;
const registerMain = () => {
   
 let array = user.filter((elm,i)=>{
     return elm.name === fname.val() || elm.email === email.val()
  })
  if (fname.val().length < 5 ||array.length >0) {
    errorMassage_2.show()
    errorMassage_2.html("Use another name more 5 character");
    fname.css({
      border: "solid red",
    });
  } else if (password.val().length < 8 ||array.length>0) {
    errorMassage_2.show()
    errorMassage_2.html("Use another name more 8 character ");
    email.css({
      border: "solid red",
    });
  } else {
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

    localStorage.setItem("user", JSON.stringify(user));
    x = JSON.parse(localStorage.getItem("user"));

    localStorage.setItem("logIn", JSON.stringify(logIn));
    z = JSON.parse(localStorage.getItem("logIn"));

    fname.val("");
    email.val("");
    password.val("");
    phone.val("");
    loc.val("");

    register.hide();
    login.show();
  }
};
