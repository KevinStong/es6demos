describe("defaults", function(){
    it("examining how this works", function(){

        let doWork = function(name="kevin"){
            return name;
        }

        let result = doWork(undefined);

        expect(result).toBe("kevin");
    });
});