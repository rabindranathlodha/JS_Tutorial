// Immediatelt Invoked Function Expression

//named IIFE
(function chai() {
    console.log("DB connected");
    
})();

//simple iife
((name) => {
    console.log(`DB connected to ${name}`);
    
})("Rabi");