function calculateCartPrice(...num){
    return num
}

//console.log(calculateCartPrice(200,400,600,700));

const user = {
    userName: "Rabi",
    price: 200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user);