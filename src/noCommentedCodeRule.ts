import * as ts from 'typescript';
import * as Lint from 'tslint';

import { forEachTokenWithTrivia } from 'tsutils';
import { IRuleMetadata } from 'tslint';

const FAILURE_STRING: string = 'No comments allowed';

export class Rule extends Lint.Rules.AbstractRule {
    public static metadata: IRuleMetadata = {
        ruleName: 'no-commented-code',
        type: 'maintainability',
        description: 'No allow commented code',
        options: null, 
        optionsDescription: '',
        typescriptOnly: true
    };

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithFunction(sourceFile, walk);
    }
}

function walk(ctx: Lint.WalkContext<void>) {
    function cb(node: ts.Node): void {
        forEachTokenWithTrivia(node, (fullText, tokenSyntaxKind, range: ts.TextRange) => {
            const tokenText = fullText.substring(range.pos, range.end);
            if (
                ( tokenSyntaxKind === ts.SyntaxKind.MultiLineCommentTrivia || tokenSyntaxKind === ts.SyntaxKind.SingleLineCommentTrivia ) &&
                isCodeCommented(tokenText) &&
                isSingleLineComment(tokenText) &&
                !isTsLintSuppression(tokenText) &&
                !isFollowedByMoreCodeOnSameLine(fullText, range) &&
                !isTodoComment(tokenText)
            ) {
                ctx.addFailureAt(range.pos, range.end - range.pos, FAILURE_STRING);
            }
        });
    }

    return ts.forEachChild(ctx.sourceFile, cb);

    function isSingleLineComment(commentText: string): boolean {
        const lines: string[] = commentText.split(/\r?\n/);
        return lines.length === 1;
    }

    function isTsLintSuppression(commentText: string): boolean {
        return /\/*\s*tslint:(enable|disable):.*/.test(commentText) || /\/\/ tslint:(enable|disable)/.test(commentText);
    }
    
    function isTodoComment(commentText: string): boolean {
        return /\/\/ TODO:/.test(commentText);
    }

    function isCodeCommented(commentText: string): boolean {
        return /\/\/(\s*\w*\s*)*(\.\w+|\(\w*|\)\w*|=\w*|\{\w*|\}\w*)/.test(commentText);
    }

    function isFollowedByMoreCodeOnSameLine(fullText: string, range: ts.TextRange): boolean {
        const restOfText: string = fullText.substring(range.end);
        return /^\s*\r?\n/.test(restOfText) === false;
    }
}
