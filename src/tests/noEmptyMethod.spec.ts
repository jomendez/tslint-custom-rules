import { helper } from '../lintRunner';

const rule = 'no-empty-method';

describe('No empty method, function, arrow function', () => {

    it(`no empty method`, () => {
        const src = `
        class test{
            emptyMethod(){

            }
        }
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(1);

    });

    it(`no empty function`, () => {
        const src = `
            function emptyMethod(){
                
            }
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(1);

    });

    it(`no empty arrow function`, () => {
        const src = `
        const test = () => {
                
            }
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(1);
        
    });

});