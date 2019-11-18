import { helper } from '../lintRunner';

const rule = 'no-consolelog';

describe('No console.log()', () => {
 
    it(`testing not failure example`, () => {
        const src = `console.log(1);`;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(1);
        
    });

});
