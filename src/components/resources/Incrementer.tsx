import React from "react";
import styled, { css } from "styled-components";

interface IncrementerProps {
  value: number;
  setValue: (value: number) => void;
  disablePlus: boolean;
}

export const Incrementer: React.FC<IncrementerProps> = ({ value, setValue, disablePlus }) => {
  return (
    <Container>
      <MinusButton disabled={value === 0} onClick={() => setValue(value - 1)}>-</MinusButton>
      <Value>{value}</Value>
      <PlusButton disabled={disablePlus} onClick={() => setValue(value + 1)}>+</PlusButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const buttonStyles = css`
  height: 16px;
  width: 18px;
  border-radius: 4px;
  padding: 0;
  padding-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #999;
  background-color: #999;
  cursor: pointer;
  outline: none;
  line-height: 12px;

  :disabled {
    background-color: #ddd;
  }
`;

const MinusButton = styled.button`
  ${buttonStyles}

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const PlusButton = styled.button`
  ${buttonStyles}

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Value = styled.div`
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  height: 16px;
  width: 16px;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
`;
