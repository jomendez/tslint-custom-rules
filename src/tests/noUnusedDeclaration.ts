import { helper } from '../lintRunner';

const rule = 'no-unused-declaration';

describe('No unused declaration', () => {

    it(`No untyped return method`, () => {
        const src = `
    import { helper } from '../lintRunner';

       class test{
           myMethod(parameter: string){

           }
       }
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(1);

    });

 
});