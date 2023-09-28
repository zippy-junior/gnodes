import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import { AddPoint } from './gnodes/AddPoint/AddPoint';
import { NumberSlider } from './gnodes/NumberSlider/NumberSlider';
import NodeMenu from './gnode-ui/Menu/NodeMenu';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 150 }, data: { label: '2' } },
  {
    id: '3',
    position: { x: 0, y: 300 },
    data: { label: '3' },
    type: 'numberSlider',
  },
  {
    id: '4',
    position: { x: 0, y: 500 },
    data: { label: '4' },
    type: 'addPoint',
  },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const nodeTypes = { numberSlider: NumberSlider, addPoint: AddPoint };

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: '50vw', height: '100vh', backgroundColor: '#f0ebdf' }}>
      <NodeMenu></NodeMenu>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </div>
  );
}
