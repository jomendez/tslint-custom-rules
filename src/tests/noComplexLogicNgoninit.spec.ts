import { helper } from '../lintRunner';

const rule = 'no-complex-logic-ngoninit';

describe('No complex logic ngOnInit', () => {
 
    it(`Should fail on class method complex long logic on ngOnInit`, () => {
        const src = `
        class test {
            ngOnInit(): void{
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
                this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic.this.is.a.long.logic();
            }
        }
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(1);
        
        
    });

});
