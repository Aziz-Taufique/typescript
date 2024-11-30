function addNumber(num) {
    return num + 4;
    // return "hey"
}
var val = addNumber(4);
function getUpper(val) {
    val.toUpperCase();
    return;
}
getUpper("aziz");
function signUp(name, email, isPaid) { }
signUp("aziz", "aziz@gmail.com", true);
var isLoggedIn = function (username, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
isLoggedIn("foo", "foo@gmail.com");
// function getVal(val: number){
//     if(val > 20) return true
//     else return "200 OK"
// }
// getVal();
var getCall = function (s) {
    return "";
};
var heros = ["loki", "ironman", "batman"];
// const heros = [1, 3, 4]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
var getConsole = function (errmsg) {
    console.log(errmsg);
};
var handleError = function (errmsg) {
    throw new Error(errmsg);
};
