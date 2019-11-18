import { helper } from '../lintRunner';

const rule = 'no-subscribe-without-unsubscribe';

describe('No subscribe without add to unsubscription array', () => {

    it(`subscribe without add to unsubscription array`, () => {
        const src = `
       class test {
           myMethod(){
               this.test
               .pipe(filter(test))
               .subscribe((x)=>{
                   console.log('test');
               })
           }
       }
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(1);

    });

    it(`subscribe and add to unsubscription array`, () => {
        const src = `
       class test {
           myMethod(){
               this.subscriptions.push(
               this.test
               .pipe(filter(test))
               .subscribe((x)=>{
                   console.log('test');
               });
               );
           }
       }
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(0);

    });

    it(`subscribe no add to unsubscription array but take(1) should unsubscribe`, () => {
        const src = `
       class test {
           myMethod(){
               this.test
               .pipe(filter(test), take(1))
               .subscribe((x)=>{
                   console.log('test');
               });
           }
       }
        `;
        const result = helper({ src, rule });
        expect(result.errorCount).toBe(0);

    });
});