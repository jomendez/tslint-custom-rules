"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lintRunner_1 = require("../lintRunner");
var rule = 'no-consolelog';
describe('No console.log()', function () {
    it("testing not failure example", function () {
        var src = "console.log(1);";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
    });
});
//# sourceMappingURL=noConsolelog.spec.js.map