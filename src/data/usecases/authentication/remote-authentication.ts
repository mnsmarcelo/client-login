import { Authentication, AuthenticationParams } from 'src/domain/usecases/authentication';
import { HttpClient, HttpStatusCode } from 'src/data/protocols/http';
import { InvalidCredentialsError, UnexpectedError } from 'src/domain/errors';
import { AccountModel } from 'src/domain/models';

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<AccountModel>
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body;
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError();
      default: throw new UnexpectedError();
    }
  }
}
