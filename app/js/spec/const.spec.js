describe("const", function(){
    it("working with const keyword", function(){

        const PERSON = {first: "jeff"};

        Object.freeze(PERSON);
        Object.seal(PERSON);
        
        PERSON.last = "Mihalik"

        expect(PERSON.first).toBe("jeff");

    });
});