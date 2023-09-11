class uber{
    constructor(price){
        this.value = price;
    }
    calculatePrice(price){
        let distance = price;
        if(distance > 0 && distance < 35){
            console.log(`the uber price is ${distance * 2}`)
        }
        else{
            console.log(`the uber price is ${distance * 3}`)
        }
    }
}

let uberPrice = new uber();
uberPrice.calculatePrice(43);

