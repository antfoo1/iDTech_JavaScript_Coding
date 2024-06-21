const Greet = require('./unit_test');

describe('Greet function', () =>{
    it('should greet a single name', () => {
        expect(Greet("Anthony")).toBe("Hello, Anthony");
    });
    it('should handle null values', () =>{
        expect(Greet(null)).toBe("Hello there!");
    });
    it('should shout uppercase names', () => {
        expect(Greet("BOB")).toBe("HELLO BOB!");
    });
    it('should greet two names', ()=>{
        expect(Greet(["Tyler", "Neil"])).toBe("Hello, Tyler, Neil");
    });
    it('should greet multiple names', ()=> {
        expect(Greet(["John", "Miles", "Thomas", "Anthony", "Tyler", "Neil"])).toBe("Hello, John, Miles, Thomas, Anthony, Tyler, Neil");
    });
});