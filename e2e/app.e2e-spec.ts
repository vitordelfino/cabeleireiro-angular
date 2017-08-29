import { CabeleireiroPage } from './app.po';

describe('cabeleireiro App', () => {
  let page: CabeleireiroPage;

  beforeEach(() => {
    page = new CabeleireiroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
