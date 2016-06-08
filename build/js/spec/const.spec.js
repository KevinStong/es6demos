"use strict";

describe("const", function () {
    it("working with const keyword", function () {

        var PERSON = { first: "jeff" };

        Object.freeze(PERSON);
        Object.seal(PERSON);

        PERSON.last = "Mihalik";

        expect(PERSON.first).toBe("jeff");
    });
});