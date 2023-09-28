import React from 'react';
import { Handle, Position, HandleProps } from 'reactflow';

interface NodeBaseHandleProps {
  top: number;
}

type HandlePropsOmit = Omit<HandleProps, 'position'>;

export const InputNodeBaseHandle = ({
  type,
  top,
}: HandlePropsOmit & React.HTMLProps<HTMLDivElement> & NodeBaseHandleProps) => {
  return (
    <Handle type={type} position={Position.Left} style={{ top: top }}></Handle>
  );
};

export const OutputNodeBaseHandle = ({
  type,
  top,
}: HandlePropsOmit & React.HTMLProps<HTMLDivElement> & NodeBaseHandleProps) => {
  return (
    <Handle type={type} position={Position.Right} style={{ top: top }}></Handle>
  );
};
