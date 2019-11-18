"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Lint = require("tslint");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new Walk(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = 'Add subscription array to unsubscribe on ngDestroy';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var Walk = /** @class */ (function (_super) {
    __extends(Walk, _super);
    function Walk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walk.prototype.visitMethodDeclaration = function (node) {
        this.addSubscribeWithoutUnsubscribe(node);
        _super.prototype.visitMethodDeclaration.call(this, node);
    };
    Walk.prototype.addSubscribeWithoutUnsubscribe = function (node) {
        if (this.containSubscribe(node) && !this.containSubscriptionArray(node)) {
            this.addFailureAtNode(node, Rule.FAILURE_STRING);
        }
    };
    Walk.prototype.containSubscribe = function (node) {
        return node.body.statements.some(function (st) { return st.getFullText().includes('.subscribe('); });
    };
    Walk.prototype.containSubscriptionArray = function (node) {
        return node.body.statements.some(function (st) { return st.getFullText().includes('subscriptions.push('); });
    };
    return Walk;
}(Lint.RuleWalker));
//# sourceMappingURL=noSubscribeWithoutUnsubscribeRule.js.map