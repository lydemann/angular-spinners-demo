import { browser, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { By } from 'selenium-webdriver';
const EC = protractor.ExpectedConditions;

const defaultTimeout = 30000;

export class ElementHelper {
    public static getElementOrWait(by: By) {
        return browser.wait(EC.visibilityOf(element(by)), defaultTimeout)
            .then(() => element(by));
    }

    public static getElementsOrWait(by: By) {
        return browser.wait(EC.visibilityOf(element(by)), defaultTimeout)
            .then(() => element.all(by));
    }
}
