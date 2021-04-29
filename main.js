let logIn = [];
let user = [];
let massage = [];

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
  //   obj_1[fname] = fname.val();
  //   obj_1[email] = email.val();
  //   obj_1[password] = password.val();
  //   obj_1[phone] = phone.val();
  //   obj_1[loc] = loc.val();

  user.push(obj_1);
  logIn.push(obj_2)
    fname.val("") ;
    email.val("") ;
    password.val("") ;
    phone.val("") ;
    loc.val("") ;
}
