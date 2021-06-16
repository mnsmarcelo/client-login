import React from 'react';
import Styles from './input-styles.scss';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: React.FC<Props> = ({ ...props }: Props) => (
  <div data-testid={`${props.name}-wrap`} className={Styles.inputWrap}>
    <input
      type={props.type}
      id={props.name}
      placeholder=" "
      data-testid={props.name}
    />
    <label data-testid={`${props.name}-label`} htmlFor={props.name}>
      {props.placeholder}
    </label>
  </div>
);

export default Input;
