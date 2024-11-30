interface User {
    readonly dbId: number; // Read-only property
    email: string;         // Required property
    userId: number;        // Required property
    googleId?: string;     // Optional property
    startTrial: () => string
    startTrialAgain(): string  // same as above
    getCoupon(couponname: string, value: number): number
}

// Reopening of interface
interface User {
    githubid: string;
}

interface Admin extends User {
    role: "admin" | "ta"  | "learner"
}

// Valid object creation
const foo: Admin = {
    dbId: 123,             // Initialization of read-only property
    email: "a@a.com",
    userId: 23232,
    role: "admin",
    startTrial: () => {
        return "trial started"
    },
    startTrialAgain: () => {
        return "foo"
    },
    getCoupon: (name: "aziz", off: 300) => {
        return 2
    },
    githubid: "github"
};

// Attempting to modify dbId will result in a TypeScript error
// foo.dbId = 456; // Error: Cannot assign to 'dbId' because it is a read-only property.

console.log(foo);
