describe("generators", function(){
    it("works like an iterator", function(){

        function zeroOneTwo(){
            return [0,1,2];
        }

        var values = zeroOneTwo();

        for (var i of values) {
            console.log(i);
        }
    });
});