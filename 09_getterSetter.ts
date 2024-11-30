class Users {

    protected _courseCount = 1;

    readonly city: string = "punjab"
    constructor(public email: string, public name: string){
       
    }

    public deleteToken(){
        console.log("Token deleted")
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){   // in setere there is no return type 
        if(courseNum <= 1){
            throw new Error("Course count should not be more then 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends Users {
    isFamily: boolean = true   
    changeCourseCount(){
        this._courseCount = 6
    }
}

const foo = new Users("hey", 'there')
foo.deleteToken()

// protected members are not accessible outside these classes, even if you create an instance of the class.
// private: Accessible only within the class where it is defined.
// protected: Accessible within the class and its subclass.
