import faker from 'faker';
import { RemoteAuthentication } from 'src/data/usecases/authentication/remote-authentication';
import { HttpClientSpy } from 'src/data/test';
import { mockAuthenticationParams } from 'src/domain/test';
import { AccountModel } from 'src/domain/models';

type SutTypes = {
  sut: RemoteAuthentication,
  httpClientSpy: HttpClientSpy<AccountModel>,
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<AccountModel>();
  const sut = new RemoteAuthentication(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    const authenticationParams = mockAuthenticationParams();

    await sut.auth(authenticationParams);

    expect(httpClientSpy.url).toBe(url);
  });
});
