'use client';

// Libs
import { Select as ChakraSelect, SelectProps as ChakraSelectProps } from '@chakra-ui/react';
import { memo, ChangeEvent } from 'react';

export type SelectOptions = {
  name: string;
  value: string;
  disabled?: boolean;
};

type SelectProps = {
  defaultValue?: string;
  placeholder?: string;
  options: SelectOptions[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
} & ChakraSelectProps;

const SelectBase = ({
  defaultValue,
  placeholder,
  options = [],
  onChange,
  ...props
}: SelectProps): JSX.Element => (
  <ChakraSelect
    defaultValue={defaultValue}
    placeholder={placeholder}
    options={options}
    onChange={onChange}
    {...props}
  >
    {options.map((option: SelectOptions) => {
      const { value, disabled } = option;

      return (
        <option key={value} value={value} disabled={disabled}>
          {option.name}
        </option>
      );
    })}
  </ChakraSelect>
);

export const Select = memo(SelectBase, (prevProps, nextProps) => {
  return (
    prevProps.defaultValue === nextProps.defaultValue &&
    prevProps.options.length === nextProps.options.length
  );
});
