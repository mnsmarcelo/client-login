import React from 'react';
import faker from 'faker';
import { render, screen } from '@testing-library/react';
import Input from './input';

const makeSut = (fieldName: string): void => {
  render(
    <Input name={fieldName} placeholder={fieldName} />,
  );
};

describe('Input Component', () => {
  test('Should have a label', () => {
    const field = faker.database.column();
    makeSut(field);
    expect(screen.getByLabelText(field)).toBeTruthy();
  });
});
