import { helper } from '../lintRunner';

const rule = 'no-untyped-public-signature';

describe('No untyped public signature', () => {

    it(`No untyped return method`, () => {
        const src = `
       class test{
           myMethod(parameter: string){

           }
       }
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(1);

    });

    it(`No untyped parameters method`, () => {
        const src = `
       class test{
           myMethod(parameter): void{

           }
       }
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(1);

    });

    
    it(`No untyped parameter and return method`, () => {
        const src = `
       class test{
           myMethod(parameter){

           }
       }
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(2);

    });
 
});