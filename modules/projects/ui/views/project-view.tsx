"use client";

import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup
} from "@/components/ui/resizable";
import { MessagesContainer } from "../components/messages-container";
import { Suspense } from "react";

interface Props {
  projectId: string;
}

export const ProjectView = ({ projectId }: Props) => {
//   const trpc = useTRPC();
//   const { data: project } = useSuspenseQuery(
//     trpc.projects.getOne.queryOptions({
//       id: projectId
//     })
//   );

//   const { data: messages } = useSuspenseQuery(
//     trpc.messages.getMany.queryOptions({
//       projectId: projectId
//     })
//   );
  return (
    <div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={35}
          minSize={20}
          className="flex flex-col min-h-0">
          <Suspense fallback={<div>Loading messages...</div>}>
            <MessagesContainer projectId={projectId} />
          </Suspense>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65} minSize={50}>
          PREVIEW
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
