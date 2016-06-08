"use strict";

describe("arrows", function () {
    it("compact the function", function () {

        var sum = function sum(x, y, z) {
            var a = x;
            var b = z;
            var c = y;


            return a * b;
        };

        var result = sum.apply(undefined, [2, 3, 5]);
        expect(result).toBe(10);
    });
});