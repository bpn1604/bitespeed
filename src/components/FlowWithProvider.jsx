import { ReactFlowProvider } from "reactflow";
import MainFlow from "./MainFow";




export default function FlowWithProvider() {
    return (
      <ReactFlowProvider>
        <MainFlow />
      </ReactFlowProvider>
    );
  }