describe("spread", function(){
    it("works as the opposite of rest", function(){

        let sum = function(x, y, z) {

            let result = x + y + z;

            return result;
        }

        var variableArray = [2, 3, 5,4,5];
        let result = sum(...variableArray);
        expect(result).toBe(10);
    });
});