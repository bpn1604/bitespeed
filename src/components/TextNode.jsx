import React from "react";
import { Handle, Position } from "reactflow";

function TextNode({ data, selected }) {
  return (
    <div
      className={`w-40 shadow-md rounded-md bg-white ${
        selected ? "border-solid border-2 border-indigo-500/100" : ""
      } `}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between max-h-max px-2 py-1 text-left text-black text-xs font-bold rounded-t-md bg-teal-300">
          <div className="flex items-center">
            <img 
              style={{height: "10px", width: "10px"}} 
              src="https://th.bing.com/th/id/OIP.E4bDg12taurF2ng0SaVq7AHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
              alt="Message Icon" 
              className="mr-1"
            />
            Send Message 
          </div>
          <img 
            style={{height: "10px", width: "10px"}} 
            src="https://th.bing.com/th?id=OIP.lTqMPiPP11QPJ0FFSx9h6gHaHc&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
            alt="WhatsApp Icon" 
            className="ml-1"
          />
        </div>
        <div className="px-3 py-2">
          <div className="text-xs font-normal text-black">
            {data.label ?? "Text Node"}
          </div>
        </div>
      </div>

      <Handle
        id="a"
        type="target"
        position={Position.Left}
        className="w-1 rounded-full bg-slate-500"
      />
      <Handle
        id="b"
        type="source"
        position={Position.Right}
        className="w-1 rounded-full bg-gray-500"
      />
    </div>
  );
}

export default TextNode;
