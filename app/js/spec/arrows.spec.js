describe("arrows", function(){
    it("compact the function", function(){

        let sum = (x, y, z) => {
            let [a, b, c] = [x, z, y];
            
            return a * b;
        }

        let result = sum(...[2, 3, 5]);
        expect(result).toBe(10);
    });
});