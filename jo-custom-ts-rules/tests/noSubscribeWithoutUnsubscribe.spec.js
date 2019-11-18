"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lintRunner_1 = require("../lintRunner");
var rule = 'no-subscribe-without-unsubscribe';
describe('No subscribe without add to unsubscription array', function () {
    it("subscribe without add to unsubscription array", function () {
        var src = "\n       class test {\n           myMethod(){\n               this.test\n               .pipe(filter(test))\n               .subscribe((x)=>{\n                   console.log('test');\n               })\n           }\n       }\n        ";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(1);
    });
    it("subscribe and add to unsubscription array", function () {
        var src = "\n       class test {\n           myMethod(){\n               this.subscriptions.push(\n               this.test\n               .pipe(filter(test))\n               .subscribe((x)=>{\n                   console.log('test');\n               });\n               );\n           }\n       }\n        ";
        var result = lintRunner_1.helper({ src: src, rule: rule });
        expect(result.errorCount).toBe(0);
    });
});
//# sourceMappingURL=noSubscribeWithoutUnsubscribe.spec.js.map