describe("rest", function(){
    it("examining how this works", function(){

        let sum = function(...numbers) {
            let result = 0;
            for (let i=0; i< numbers.length; i++){
                result += numbers[i];
            };

            return result;
        }

        let result = sum(2, 3, 5);
        expect(result).toBe(10);
    });
});