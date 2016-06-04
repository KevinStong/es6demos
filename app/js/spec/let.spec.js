describe("test", function(){
    it("will work?", function(){
        var doWork = function(){
                return 3;
        };

        var result = doWork();
        expect(result).toBe(3);
    });
});