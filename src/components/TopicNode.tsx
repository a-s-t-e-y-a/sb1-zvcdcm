import React from 'react';
import { Handle, Position } from 'reactflow';

interface TopicNodeProps {
  data: {
    label: string;
    level: number;
  };
}

const colors = {
  1: 'bg-purple-500 hover:bg-purple-600',
  2: 'bg-blue-500 hover:bg-blue-600',
  3: 'bg-green-500 hover:bg-green-600',
  4: 'bg-orange-500 hover:bg-orange-600'
};

const TopicNode: React.FC<TopicNodeProps> = ({ data }) => {
  return (
    <div 
      className={`
        px-4 py-2 
        shadow-lg 
        rounded-lg 
        border-2 
        border-white 
        ${colors[data.level as keyof typeof colors]} 
        text-white 
        min-w-[100px]
        transition-colors
        duration-200
        cursor-pointer
      `}
    >
      <Handle 
        type="target" 
        position={Position.Top} 
        className="!bg-gray-700 !w-2 !h-2" 
      />
      <div className="font-semibold text-center text-sm">{data.label}</div>
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="!bg-gray-700 !w-2 !h-2" 
      />
    </div>
  );
};

export default TopicNode;