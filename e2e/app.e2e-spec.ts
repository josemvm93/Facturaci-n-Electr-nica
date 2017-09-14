import { FacturacionElectronicaPage } from './app.po';

describe('facturacion-electronica App', () => {
  let page: FacturacionElectronicaPage;

  beforeEach(() => {
    page = new FacturacionElectronicaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
