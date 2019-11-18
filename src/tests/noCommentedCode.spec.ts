import { helper } from './../lintRunner';


describe('noCommentRule', (): void => {
    const rule: string = 'no-commented-code';

    it('should pass on multi-line block comment', (): void => {
        const script: string = `
            /**
            * This is a multiline comment.
            */
            const something = 'whatever';
        `;
        const result = helper({ src: script, rule });
        expect(result.errorCount).toBe(0);
    });

    it('should pass on comment within a JSX block', (): void => {
        const script: string = `
            import React = require('react');
            const Thing = () =>
                <div>
                {/* insert some meaningful comment or ignore statement here */}
                {/* insert some other comment with extra space */ }
                Foo
                </div>
        `;
        const result = helper({ src: script, rule });
        expect(result.errorCount).toBe(0);
    });

    it('should pass when comment is nested inside code', (): void => {
        const script: string = `
            const something = 1 + /* whatever */ 3;
        `;

        const result = helper({ src: script, rule });
        expect(result.errorCount).toBe(0);
    });

    it('should pass on tslint suppressions', (): void => {
        const script: string = `
            /* tslint:disable:function-name */
            const something = 'whatever';
            /* tslint:enable:function-name */
        `;

        const result = helper({ src: script, rule });
        expect(result.errorCount).toBe(0);
    });

    it('should pass on a single text comment', (): void => {
        const script: string = `
          // Single line
          const something = 'whatever';
      `;
        const result = helper({ src: script, rule });
        expect(result.errorCount).toBe(0);
    });

    it('should fail code commented', (): void => {
        const script: string = `
        // if (test == 'test') { }
    `;
        const result = helper({ src: script, rule });
        expect(result.errorCount).toBe(1);
    });
    
    it('should fail code commented 2', (): void => {
        const script: string = `
        // const firestore = firebase.firestore();
    `;
        const result = helper({ src: script, rule });
        expect(result.errorCount).toBe(1);
    });
});
