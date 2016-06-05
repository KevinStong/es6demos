describe("let", function(){
    it("scope", function(){
        var test = function(){
            
            if (true) {
                var x = 3;
            }

            return x;
        };

        var result = test();
        expect(result).toBe(3);
    });
});