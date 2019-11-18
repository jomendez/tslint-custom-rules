import { helper } from '../lintRunner';

const rule = 'no-focused-test';

describe('No focus test fdescribe, fit', () => {

    it(`No focus fdescrive`, () => {
        const src = `
       fdescribe('test', ()=>{

       })
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(1);

    });

    it(`No focus fit`, () => {
        const src = `
       fit('test', ()=>{

       })
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(1);

    });

});