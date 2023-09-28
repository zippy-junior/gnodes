import React from 'react';
import styled from 'styled-components';
import useStoreState from 'reactflow';
import { InputNodeBaseHandle, OutputNodeBaseHandle } from './NodeBaseHandle';

type GnodeBaseProps = {
  lConnCount: number;
  rConnCount: number;
};

const StyledGnodeBase = styled.div<{ height: number }>`
  height: ${(props) => props.height}px;
  background-color: grey;
  border-radius: 0.5rem;
  padding: 8px 2rem;
  display: flex;
  align-items: center;
`;

const GnodeBase = ({
  lConnCount,
  rConnCount,
  children,
}: React.PropsWithChildren<GnodeBaseProps>) => {
  // const node = useStoreState((store) => store.nodes[id]);
  // const { connect } = useStoreActions((actions) => actions);

  // const handleConnect = (targetNodeId: string) => {
  // connect({ source: id, target: targetNodeId });
  // };

  const height: number = Math.max(lConnCount - 1, rConnCount - 1) * 25 + 16;
  console.log(height);

  return (
    <StyledGnodeBase height={height}>
      {Array.from({ length: lConnCount as number }).map(function (_, i) {
        return (
          <InputNodeBaseHandle
            type="target"
            top={((height + 16) / (lConnCount + 1)) * (i + 1)}
            id={i.toString()}
          />
        );
      })}
      {Array.from({ length: rConnCount as number }).map(function (_, i) {
        return (
          <OutputNodeBaseHandle
            type="source"
            top={((height + 16) / (rConnCount + 1)) * (i + 1)}
            id={i.toString()}
          />
        );
      })}
      <div>{children}</div>
    </StyledGnodeBase>
  );
};

export default GnodeBase;
