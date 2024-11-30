// Function to detect the type of input value and perform actions accordingly
function detectType(val: number | string) {
    if (typeof val === "string") { // Checks if val is a string
        return val.toLocaleString(); // Converts string to localized format
    } else {
        return val + 2; // Adds 2 to the number
    }
}

// Notes:
// - `typeof` is a TypeScript operator that helps in narrowing down types.
// - `toLocaleString()` formats numbers or strings based on the locale settings of the environment.

// Function to handle IDs that can be null or a string
function provideId(id: string | null) {
    if (!id) { // Checks if id is null or an empty value
        console.log("please provide id");
        return;
    }
    id.toLocaleLowerCase(); // Converts string ID to lowercase
}

// Notes:
// - `!id` checks for null, undefined, or other falsy values like an empty string.
// - Always validate inputs if they can have `null` or `undefined` values.

// Function to print all strings or an array of strings
function printAll(strs: string | string[] | null) {
    if (strs) { // Checks if strs is not null
        if (typeof strs === "object") { // Checks if strs is an array (arrays are "objects" in JavaScript)
            for (const s of strs) { // Iterates through the array
                console.log(s);
            }
        } else if (typeof strs === "string") { // Checks if strs is a single string
            console.log(strs);
        }
    } else {
        console.log("Please provide strs");
    }
}

// Notes:
// - `typeof` for an array returns "object", so additional logic is required to distinguish arrays.
// - Always validate the type when working with union types.
// - Corrected the condition in `else if` to use `typeof strs === "string"`.

// ----------------------- Instanceof ----------------------------

// Function to log value based on whether it's a Date or a string
function logValue(x: Date | string) {
    if (x instanceof Date) { // Checks if x is an instance of Date
        console.log(x.toUTCString()); // Logs the date in UTC string format
    } else {
        console.log(x.toLocaleUpperCase()); // Converts string to uppercase in locale-sensitive way
    }
}

// Notes:
// - `instanceof` is used to check if an object is an instance of a particular class.
// - Use `instanceof` for runtime type checks on objects.

// -------------------- Type Predicates --------------------------

// Define Fish and Bird types
type Fish = { swim: () => void };
type Bird = { fly: () => void };

// Function to check if a pet is a Fish
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined; // Narrows down the type to Fish if swim is defined
}

// Function to get food based on the type of pet
function getFood(pet: Fish | Bird) {
    if (isFish(pet)) { // Uses the type predicate function
        // pet is now narrowed to Fish type
        return "Fish Food";
    } else {
        // pet is now narrowed to Bird type
        return "Bird Food";
    }
}

// Notes:
// - Type predicates are functions that help narrow down types in TypeScript.
// - Syntax: `parameterName is Type` in the return type of the predicate.
// - Use type predicates when working with complex union types to ensure proper type narrowing.


interface Circle {
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangel",
    lenght: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if(shape.kind === "circle") return Math.PI * shape.radius ** 2;
    // return shape.side * shape.side
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

        case "rectangel":
            return shape.lenght * shape.width
        
        default: 
        const _defaultforShape: never = shape
        return _defaultforShape
    
    }
}