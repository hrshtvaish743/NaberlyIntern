import { NaberlyInternPropertySearchPage } from './app.po';

describe('naberly-intern-property-search App', () => {
  let page: NaberlyInternPropertySearchPage;

  beforeEach(() => {
    page = new NaberlyInternPropertySearchPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
