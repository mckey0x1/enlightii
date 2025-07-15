"use client";

import {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup
} from "@/components/ui/resizable";
import { MessagesContainer } from "../components/messages-container";
import { Suspense, useState } from "react";
import { Fragment } from "@/lib/generated/prisma";
import { ProjectHeader } from "../components/project-header";
import { FragmentWeb } from "../components/fragment-web";

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

  const [activeFragment, setActiveFragment] = useState<Fragment | null>(null);

  return (
    <div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={35}
          minSize={20}
          className="flex flex-col min-h-0">
          <Suspense fallback={<p>Loading project...</p>}>
            <ProjectHeader projectId={projectId} />
          </Suspense>
          <Suspense fallback={<div>Loading messages...</div>}>
            <MessagesContainer
              projectId={projectId}
              activeFragment={activeFragment}
              setActiveFragment={setActiveFragment}
            />
          </Suspense>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65} minSize={50}>
          {!!activeFragment && <FragmentWeb data={activeFragment}/>}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
