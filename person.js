class person{
    constructor(){

    }
    personData = {
        name : 'jason roy',
        gender : 'male',
        phoneNo : 7865432456,
        email : "jason@gmail.com",
        place : "canada",
        occupation : "cricketer"
    }
    getDetails(){
        console.log(this.personData)
    }
}

let getPerson = new person();
getPerson.getDetails();
