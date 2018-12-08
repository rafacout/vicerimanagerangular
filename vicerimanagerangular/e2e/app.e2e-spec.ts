import { VicerimanagerangularPage } from './app.po';

describe('vicerimanagerangular App', () => {
  let page: VicerimanagerangularPage;

  beforeEach(() => {
    page = new VicerimanagerangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
