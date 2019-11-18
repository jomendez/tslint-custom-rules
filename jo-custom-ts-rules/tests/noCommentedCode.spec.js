"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lintRunner_1 = require("./../lintRunner");
describe('noCommentRule', function () {
    var rule = 'no-commented-code';
    it('should pass on multi-line block comment', function () {
        var script = "\n            /**\n            * This is a multiline comment.\n            */\n            const something = 'whatever';\n        ";
        var result = lintRunner_1.helper({ src: script, rule: rule });
        expect(result.errorCount).toBe(0);
    });
    it('should pass on comment within a JSX block', function () {
        var script = "\n            import React = require('react');\n            const Thing = () =>\n                <div>\n                {/* insert some meaningful comment or ignore statement here */}\n                {/* insert some other comment with extra space */ }\n                Foo\n                </div>\n        ";
        var result = lintRunner_1.helper({ src: script, rule: rule });
        expect(result.errorCount).toBe(0);
    });
    it('should pass when comment is nested inside code', function () {
        var script = "\n            const something = 1 + /* whatever */ 3;\n        ";
        var result = lintRunner_1.helper({ src: script, rule: rule });
        expect(result.errorCount).toBe(0);
    });
    it('should pass on tslint suppressions', function () {
        var script = "\n            /* tslint:disable:function-name */\n            const something = 'whatever';\n            /* tslint:enable:function-name */\n        ";
        var result = lintRunner_1.helper({ src: script, rule: rule });
        expect(result.errorCount).toBe(0);
    });
    it('should pass on a single text comment', function () {
        var script = "\n          // Single line\n          const something = 'whatever';\n      ";
        var result = lintRunner_1.helper({ src: script, rule: rule });
        expect(result.errorCount).toBe(0);
    });
    it('should fail code commented', function () {
        var script = "\n        // if (test == 'test') { }\n    ";
        var result = lintRunner_1.helper({ src: script, rule: rule });
        expect(result.errorCount).toBe(1);
    });
});
//# sourceMappingURL=noCommentedCode.spec.js.map