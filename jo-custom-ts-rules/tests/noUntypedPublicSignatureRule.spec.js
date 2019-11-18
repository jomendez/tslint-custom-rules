"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lintRunner_1 = require("../lintRunner");
var rule = 'no-untyped-public-signature';
describe('No untyped public signature', function () {
    it("No untyped return method", function () {
        var src = "\n       class test{\n           myMethod(parameter: string){\n\n           }\n       }\n        ";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
    });
    it("No untyped parameters method", function () {
        var src = "\n       class test{\n           myMethod(parameter): void{\n\n           }\n       }\n        ";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
    });
    it("No untyped parameter and return method", function () {
        var src = "\n       class test{\n           myMethod(parameter){\n\n           }\n       }\n        ";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(2);
    });
});
//# sourceMappingURL=noUntypedPublicSignatureRule.spec.js.map