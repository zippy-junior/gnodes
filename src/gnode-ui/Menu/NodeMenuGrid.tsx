import React from 'react';
import { styled } from 'styled-components';

const StyledGrid = styled.div`
  display: flex;
  gap: 0.2rem;
  padding: 0.4rem;
  max-width: 400px;
  flex-wrap: wrap;
`;

export const NodeMenuGrid = ({ children }: React.PropsWithChildren) => {
  return <StyledGrid>{children}</StyledGrid>;
};
