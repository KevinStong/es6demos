describe("destructuring", function(){
    it("old vs new", function(){

        let doWork = function(){
            return {
                first: "jeff",
                last: "Mihalik"
                };
        }


        let {first} = doWork();

        expect(first).toBe("jeff");

    });
});