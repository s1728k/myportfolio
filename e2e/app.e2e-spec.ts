import { MyporfolioPage } from './app.po';

describe('myporfolio App', () => {
  let page: MyporfolioPage;

  beforeEach(() => {
    page = new MyporfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
