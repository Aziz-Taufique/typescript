


function addNumber(num: number): number {
    return num + 4;
    // return "hey"
}
const val = addNumber(4);


function getUpper(val:string){
    val.toUpperCase()
    return 
}
getUpper("aziz");


function signUp(name: string, email: string, isPaid: boolean){}
signUp("aziz", "aziz@gmail.com", true);



const isLoggedIn = (username: string, email: string, isPaid: boolean = false) => {}
isLoggedIn("foo", "foo@gmail.com")


// function getVal(val: number){
//     if(val > 20) return true
//     else return "200 OK"
// }

// getVal();

const getCall = (s: string): string => {
    return ""
}



const heros = ["loki", "ironman", "batman"];
// const heros = [1, 3, 4]

heros.map((hero): string => {
    return `hero is ${hero}`
})



const getConsole = (errmsg: string): void => {
    console.log(errmsg)
}



const handleError = (errmsg: string): never => {
    throw new Error(errmsg)
}