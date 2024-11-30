let score: number | string = 55;

score = 87;
score = "89"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let aziz: User | Admin = {
    name: "taufique",
    id: 234
}

aziz = {username: "bhai", id: 323}

// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`)
// }

function getDbId(id: number | string){
   if(typeof id === "string"){
        id.toUpperCase()
   }else{
    id + 2
   }
}

getDbId(93);
getDbId("oh")


const data1: number[] = [1, 3, 4];
const data2: string[] = ['2', '4', 'd']
const data3: string[] | number[] = ['2', '4']
const data4: string[] | number[] = [3, 4]
const data5: (string | number | boolean)[] = ['2', '4', 5, 5, true]

let pi:3.14 = 3.14


let seatAllotment: "aiesle" | "middle" | "window"

seatAllotment = "aiesle"
// seatAllotment = "crew"