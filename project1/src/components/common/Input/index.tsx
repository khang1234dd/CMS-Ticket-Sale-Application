import * as React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

const StyledInputElement = styled('input')`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4375rem;
  background: #F1F4F8;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  color: #20262d;
  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;

  }
`;

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

export default function UnstyledInput({...props}:any) {
  return <CustomInput {...props} aria-label="Demo input" />;
}