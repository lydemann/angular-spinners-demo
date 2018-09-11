import { TodosPage } from './todos.po';

describe('workspace-project App', () => {
  let page: TodosPage;

  beforeEach(() => {
    page = new TodosPage();
  });

  it('should display 2 todo items', async () => {
    page.navigateTo();
    // const count = await page.getTodos().count();
    await expect(page.getTodos().count()).toBe(2);
  });
});
