describe("let", function(){
    it("scope", function(){
        var test = function(){
            
            if (true) {
                let x = 3;
            }

            return x;
        };

        var result = test();
        expect(result).toBe(3);
    });
});