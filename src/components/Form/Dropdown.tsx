import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import chevronDown from "./assets/chevronDown.svg";
import { inputStyle } from "./Input";
import Label from "./Label";

interface IProps {
  forwardRef?: (ref: object) => void;
  name: string;
  label?: string;
  onChange?: React.ChangeEventHandler;
  options?: string[];
  required?: boolean;
}

const DropdownWrapper = styled.div`
  padding: 0.5rem;
`;

const dropdownStyle = css`
  ${inputStyle}
  appearance: none;
  background-image: url(${chevronDown});
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  padding: 0.5rem 2rem 0.5rem 1rem;
`;

const Dropdown: React.FunctionComponent<IProps> = ({
  forwardRef,
  label,
  name,
  onChange,
  options,
  required
}) => {
  return (
    <DropdownWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <select
        css={dropdownStyle}
        name={name}
        id={name}
        onChange={onChange}
        required={required}
        ref={forwardRef}
      >
        {options.map(option => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </DropdownWrapper>
  );
};

export default Dropdown;
