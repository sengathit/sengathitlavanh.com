import { Sengathitlavanh.ComPage } from './app.po';

describe('sengathitlavanh.com App', () => {
  let page: Sengathitlavanh.ComPage;

  beforeEach(() => {
    page = new Sengathitlavanh.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
