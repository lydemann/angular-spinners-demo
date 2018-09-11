import { ExpectHelper } from './helpers/expect-helpers';
import { TodosPage } from './todos.po';

describe('workspace-project App', () => {
  let page: TodosPage;

  beforeEach(() => {
    page = new TodosPage();
  });

  it('should display 2 todo items', (done) => {
    page.navigateTo();
    // const count = await page.getTodos().count();
    page.getTodos().count().then((res) => {
      ExpectHelper.expectOrRetry(() => res === 2).then(() => {
        done();
      });
    });
  });
});
