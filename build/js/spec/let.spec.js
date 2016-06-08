"use strict";

describe("let", function () {
    it("block scoping for the win", function () {
        var test = function test() {
            var x = 2;
            if (true) {

                var _x = 3;
            }

            return x;
        };

        var result = test();
        expect(result).toBe(2);
    });
});