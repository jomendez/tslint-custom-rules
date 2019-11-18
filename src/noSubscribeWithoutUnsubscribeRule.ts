import * as Lint from 'tslint';
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {
    static FAILURE_STRING = 'Add subscription array to unsubscribe on ngDestroy';

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new Walk(sourceFile, this.getOptions()));
    }
}

class Walk extends Lint.RuleWalker {

    protected visitMethodDeclaration(node: ts.MethodDeclaration) {
        this.addSubscribeWithoutUnsubscribe(node);
        super.visitMethodDeclaration(node);
    }


    private addSubscribeWithoutUnsubscribe(
        node: ts.MethodDeclaration,
    ) {
        if (this.containSubscribe(node) && !this.containSubscriptionArray(node)) { 
            this.addFailureAtNode(node, Rule.FAILURE_STRING);
        }
    }

    private containSubscribe(node: ts.MethodDeclaration): boolean {
        return node.body.statements.some(st => st.getFullText().includes('.subscribe('));

    }

    private containSubscriptionArray(node: ts.MethodDeclaration): boolean {
        return node.body.statements.some(st => st.getFullText().includes('subscriptions.push('));

    }
}