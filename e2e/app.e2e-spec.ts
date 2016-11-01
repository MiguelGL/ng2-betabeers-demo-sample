import { BbDemoSamplePage } from './app.po';

describe('bb-demo-sample App', function() {
  let page: BbDemoSamplePage;

  beforeEach(() => {
    page = new BbDemoSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
