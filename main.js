let user = []
let massage =[]

const login = $("#login")
const register = $("#register")
const contact = $("#contact")
const about = $("#about")
const market = $("#market")
const clothes =$("#clothes")
const electronic =$("#electronic")
const kitchen =$("#kitchen")
const shoes = $("#shoes")
const bag = $("#bag")
const buy =$("#buy")

const load = ()=>{
    register.hide()
    contact.hide()
    about.hide()
     market.hide()
    clothes.hide()
    electronic.hide()
    kitchen.hide()
    shoes.hide()
    bag.hide()
    buy.hide()
}

const registering =()=>{
    register.show()
}

const contactUs =()=>{
    contact.show()
}


