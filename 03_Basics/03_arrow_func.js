const user = {
    userName: "Rabi",
    price: 999,

    welcomeMessage: function() {
         console.log(`${this.userName}, welcome ton the website`);
    }
}

user.welcomeMessage();

const chai = () => {
    let username = "Rabindra"
    console.log(this.userName);
}
chai()