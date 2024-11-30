// const user = {
//     name: "Aziz",
//     email: "aziz@gamil.com",
//     isActive: true
// }


// function createUser({name: user, isPaid: boolean}){}

// let newUser = {name: "aziz", isPaid: true, email: "aziz@gamil.com"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "aziz", price: 2999}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function crateuser(user: User): User{
//     return {name: 'foo', email: 'foo@gmail.com', isActive: true}
// }

// crateuser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActie: boolean
    creditCard?: number
}


let myUser: User = {
    _id: "234",
    name: "hero",
    email: "a@gmail.com",
    isActie: true
}


myUser.name = "taufique";
// myUser._id = "33232"      // can't manuplate


type cardNumber = {
    cardnumber: string;
}

type cardData = {
    cardDate: string
}

type cardInfo = cardNumber & cardData & {
    cvv: number
}

