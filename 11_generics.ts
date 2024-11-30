// Example of using generic arrays
const score: Array<number> = []; // Array of numbers
const names: Array<string> = []; // Array of strings

// Function without generics, accepts either number or string
function identityOne(val: number | string): number | string {
    return val; // Returns the value as is, no type flexibility or inference
}

// Function without generics, accepts any type
function identityTwo(val: any): any {
    return val; 
    // Using `any` doesn't provide type safety or type inference
}

// Generic function: Uses a placeholder `Type` to maintain type consistency
function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(4);          // Inferred as number
identityThree("aziz");     // Inferred as string
identityThree(true);       // Inferred as boolean

// Simplified generic function: Uses a single letter like `T`
function identityFour<T>(val: T): T {
    return val;
}

// Interface defining a Bottle object
interface Bottle {
    brand: string;
    size: number;
}

// Passing a custom type to the generic function
identityFour<Bottle>({ brand: "f", size: 4 }); // Returns the Bottle object

// Generic function for working with arrays
function getSearchProduct<T>(product: T[]): T {
    // Simulates database work and returns the element at a fixed index
    const index = 3;
    return product[index];
}

// Generic arrow function
const getMoreSearch = <T,>(product: T[]): T => {
    return product[4]; // Returns the 5th element
};

// Using generics with constraints in a function
interface Database {
    connection: string;
    username: string;
    password: string;
}

// `U` is constrained to extend the `Database` interface
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,  // First value of any type
        valTwo,  // Second value with properties of `Database`
    };
}

// Example usage
anotherFunction(3, { connection: "dbconnection", username: "aziz", password: "232" });

// Interfaces for Quiz and Course types
interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

// Generic class
class Syllabus<T> {
    public cart: T[] = []; // An array to hold items of type T

    addCart(product: T) {
        this.cart.push(product); // Adds a product of type T to the cart
    }
}

// Example usage
const quizSyllabus = new Syllabus<Quiz>();
quizSyllabus.addCart({ name: "Math Quiz", type: "MCQ" });

const courseSyllabus = new Syllabus<Course>();
courseSyllabus.addCart({ name: "JavaScript", author: "Aziz", subject: "Programming" });
