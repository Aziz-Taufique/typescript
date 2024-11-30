var score = 55;
score = 87;
score = "89";
var aziz = {
    name: "taufique",
    id: 234
};
aziz = { username: "bhai", id: 323 };
// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`)
// }
function getDbId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else {
        id + 2;
    }
}
getDbId(93);
getDbId("oh");
var data1 = [1, 3, 4];
var data2 = ['2', '4', 'd'];
var data3 = ['2', '4'];
var data4 = [3, 4];
var data5 = ['2', '4', 5, 5, true];
var pi = 3.14;
var seatAllotment;
seatAllotment = "aiesle";
// seatAllotment = "crew"
