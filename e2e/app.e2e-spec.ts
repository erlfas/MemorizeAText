import { MemorizeATextPage } from './app.po';

describe('memorize-atext App', () => {
  let page: MemorizeATextPage;

  beforeEach(() => {
    page = new MemorizeATextPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
