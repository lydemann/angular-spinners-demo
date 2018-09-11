import { browser } from 'protractor';

export class ExpectHelper {
    public static expectOrRetry<T>(boolFunc: () => boolean, timeout: number = 5000) {
        return browser.wait(() => {
            const exRes = boolFunc();
            return Promise.resolve(exRes);
        }, timeout).then(() => {
        }, (err) => {
            throw err;
        });
    }
}
