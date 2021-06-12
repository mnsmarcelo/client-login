import axios from 'axios';
import { mockAxios } from 'src/infra/test';
import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient,
  mockedAxios: jest.Mocked<typeof axios>,
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios,
  }
}
