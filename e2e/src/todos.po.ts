import { browser, by, element } from 'protractor';

export class TodosPage {
    navigateTo() {
        return browser.get('/');
    }

    getTodos() {
        return element.all(by.css('#todo-item'));
    }
}
