import { ReportsAppPage } from './app.po';

describe('reports-app App', () => {
  let page: ReportsAppPage;

  beforeEach(() => {
    page = new ReportsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
