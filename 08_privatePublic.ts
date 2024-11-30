
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "punjab"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }

// Another way to write above code.
class User {
    readonly city: string = "punjab"
    constructor(public email: string, public name: string, private userId: number){
       
    }
}

const aziz = new User( "az@a.com", "aziz", 233)