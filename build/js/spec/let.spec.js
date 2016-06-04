"use strict";

describe("let", function () {
    it("scope", function () {
        var test = function test() {

            if (true) {
                var _x = 3;
            }

            return x;
        };

        var result = test();
        expect(result).toBe(3);
    });
});