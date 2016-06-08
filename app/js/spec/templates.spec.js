describe("templates", function(){
    it("is better then string concat", function(){


        let first = "kevin";
        let last = "stong";
        let result = `Mr. ${first} ${last}`;
        expect(result).toBe("Mr. kevin stong");
    });

    it("example showing tag templates", function(){

        let fullName = function(strings, ...values) {

            let properFirst = values[0].charAt(0).toUpperCase() 
                            + values[0].slice(1);
            let properLast = values[1].charAt(0).toUpperCase() 
            + values[1].slice(1);


            return strings[0] + properFirst + strings[1] + properLast;;
        }

        let first = "kevin";
        let last = "stong";
        let result = fullName `Mr. ${first} ${last}`;
        console.log(result);
        expect(result).toBe("Mr. Kevin Stong");
    });
});