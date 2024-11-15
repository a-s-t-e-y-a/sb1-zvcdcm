import React, { useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import TopicNode from './TopicNode';
import { Youtube } from 'lucide-react';

const nodeTypes = {
  topicNode: TopicNode,
};

interface Topic {
  subject: string;
  depth: number;
  topics: {
    level_1: string[];
    level_2: Record<string, string[]>;
    level_3: Record<string, string[]>;
    level_4: Record<string, string[]>;
  };
}

interface YouTubeGraphProps {
  data: Topic;
}

const VERTICAL_SPACING = 120;
const HORIZONTAL_SPACING = 180;

const YouTubeGraph: React.FC<YouTubeGraphProps> = ({ data }) => {
  const createNodes = () => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    let nodeId = 0;

    // Root node (YouTube)
    nodes.push({
      id: 'root',
      type: 'topicNode',
      position: { x: 0, y: 0 },
      data: { label: 'YouTube', level: 1 }
    });

    // Level 1
    data.topics.level_1.forEach((topic, index) => {
      const id = `level1-${nodeId++}`;
      const y = VERTICAL_SPACING;
      const x = (index - data.topics.level_1.length / 2) * HORIZONTAL_SPACING;
      nodes.push({
        id,
        type: 'topicNode',
        position: { x, y },
        data: { label: topic, level: 1 }
      });
      edges.push({ 
        id: `e-root-${id}`, 
        source: 'root', 
        target: id,
        type: 'smoothstep'
      });

      // Level 2
      if (data.topics.level_2[topic]) {
        const level2Items = data.topics.level_2[topic];
        level2Items.forEach((subtopic, subIndex) => {
          const subId = `level2-${nodeId++}`;
          const subY = y + VERTICAL_SPACING;
          const subX = x + ((subIndex - (level2Items.length - 1) / 2) * (HORIZONTAL_SPACING * 0.8));
          nodes.push({
            id: subId,
            type: 'topicNode',
            position: { x: subX, y: subY },
            data: { label: subtopic, level: 2 }
          });
          edges.push({ 
            id: `e-${id}-${subId}`, 
            source: id, 
            target: subId,
            type: 'smoothstep'
          });

          // Level 3
          if (data.topics.level_3[subtopic]) {
            const level3Items = data.topics.level_3[subtopic];
            level3Items.forEach((subsubtopic, subsubIndex) => {
              const subsubId = `level3-${nodeId++}`;
              const subsubY = subY + VERTICAL_SPACING;
              const subsubX = subX + ((subsubIndex - (level3Items.length - 1) / 2) * (HORIZONTAL_SPACING * 0.6));
              nodes.push({
                id: subsubId,
                type: 'topicNode',
                position: { x: subsubX, y: subsubY },
                data: { label: subsubtopic, level: 3 }
              });
              edges.push({ 
                id: `e-${subId}-${subsubId}`, 
                source: subId, 
                target: subsubId,
                type: 'smoothstep'
              });

              // Level 4
              if (data.topics.level_4[subsubtopic]) {
                const level4Items = data.topics.level_4[subsubtopic];
                level4Items.forEach((l4topic, l4Index) => {
                  const l4Id = `level4-${nodeId++}`;
                  const l4Y = subsubY + VERTICAL_SPACING;
                  const l4X = subsubX + ((l4Index - (level4Items.length - 1) / 2) * (HORIZONTAL_SPACING * 0.4));
                  nodes.push({
                    id: l4Id,
                    type: 'topicNode',
                    position: { x: l4X, y: l4Y },
                    data: { label: l4topic, level: 4 }
                  });
                  edges.push({ 
                    id: `e-${subsubId}-${l4Id}`, 
                    source: subsubId, 
                    target: l4Id,
                    type: 'smoothstep'
                  });
                });
              }
            });
          }
        });
      }
    });

    return { nodes, edges };
  };

  const { nodes: initialNodes, edges: initialEdges } = createNodes();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onInit = useCallback((reactFlowInstance: any) => {
    reactFlowInstance.fitView({ padding: 0.2 });
  }, []);

  return (
    <div className="w-full h-screen bg-gray-50">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white p-3 rounded-lg shadow-md">
        <Youtube className="w-6 h-6 text-red-600" />
        <h1 className="text-xl font-bold text-gray-800">YouTube Topic Graph</h1>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onInit={onInit}
        fitView
        defaultEdgeOptions={{
          type: 'smoothstep',
          animated: true
        }}
        attributionPosition="bottom-right"
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default YouTubeGraph;