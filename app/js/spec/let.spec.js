describe("let", function(){
    it("block scoping for the win", function(){
        var test = function(){
let x = 2;
            if (true) {
                
                let x = 3;
            }

            return x;
        };

        var result = test();
        expect(result).toBe(2);
    });
});