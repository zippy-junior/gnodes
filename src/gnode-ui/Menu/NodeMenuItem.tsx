import React from 'react';
import { styled } from 'styled-components';

interface NodeMenuItemProps {
  children: JSX.Element;
}

const StyledNodeMenuItem = styled.div`
  height: 15px;
  width: 15px;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0.3rem;
  background-color: #f5f5f5;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  transition: 0.1s;

  &:hover {
    transform: scale(110%);
    background-color: #c9d4eb;
    border: 1px solid #c2cde5;
  }
`;

export const NodeMenuItem = ({ children }: NodeMenuItemProps) => {
  return <StyledNodeMenuItem>{children}</StyledNodeMenuItem>;
};
