import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
const EC = protractor.ExpectedConditions;

export class ExpectHelper {
    public static expectOrRetry<T>(expectFunc: () => Promise<any>, tries: number = 5, timeout: number = 5000) {
        browser.wait(() => {

            try {
                return expectFunc().then((res) => {
                    return res;
                });
            } catch (error) {
                return false;
                // throw new Error('Error while evaluating expect: ' + JSON.stringify(error));
            }
        }, timeout).then(() => {
            return true;
        }, (err) => {
            return false;
        });
    }

    private static expectOrRetryFn<T>(expectFunc: () => any, tries: number = 5, timeout: number) {
        let attempts = 0;
        const timeoutRef = setTimeout(async () => {
            try {
                return await expectFunc();
                // clearTimeout(timeoutRef);
                // return true;
            } catch (error) {
                attempts++;

                // tslint:disable-next-line:no-console
                console.log('Expect failed, try nr: ' + attempts);

                if (attempts > tries) {
                    throw error;
                }
                return false;
            }
            return false;
        }, timeout);
    }
}
