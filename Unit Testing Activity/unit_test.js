function Greet(name) {
    if (name === null) {
        return "Hello there!";
    } else if (typeof name === 'string' && name === name.toUpperCase()){
        return `HELLO ${name}!`;
    } else if (Array.isArray(name) && name.length === 2){
        return "Hello, " + name.join(", ")
    } else if (Array.isArray(name)){
        return "Hello, " + name.join(", ")
    }
    else {
        return "Hello, " + name;
    } 
}

console.log(Greet("Anthony")); 
console.log(Greet(null)); 
console.log(Greet("BOB"));
console.log(Greet(["Tyler", "Neil"]));
console.log(Greet(["John", "Miles", "Thomas", "Anthony", "Tyler", "Neil"]));