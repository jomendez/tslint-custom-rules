"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lintRunner_1 = require("../lintRunner");
var rule = 'no-empty-method';
describe('No empty method, function, arrow function', function () {
    it("no empty method", function () {
        var src = "\n        class test{\n            emptyMethod(){\n\n            }\n        }\n        ";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
    });
    it("no empty function", function () {
        var src = "\n            function emptyMethod(){\n                \n            }\n        ";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
    });
    it("no empty arrow function", function () {
        var src = "\n        const test = () => {\n                \n            }\n        ";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
    });
});
//# sourceMappingURL=noEmptyMethod.spec.js.map