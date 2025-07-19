"use client";

import { PricingTable } from "@clerk/nextjs";
import { Lightbulb } from "lucide-react";
import Image from "next/image";
import { dark } from "@clerk/themes";
import useCurrentTheme from "@/hooks/use-current-theme";

type Props = {};

export default function Page({}: Props) {
  const currentTheme = useCurrentTheme();
  return (
    <div className="flex flex-col max-w-3xl mx-auto w-full">
      <section className="space-y-6 pt-[10vh] 2xl:pt-48">
        <div className="flex flex-col items-center">
          <Lightbulb width={50} height={50} className="hidden md:block" />
        </div>
        <h1 className="text-xl md:text-3xl font-bold text-center">Pricing</h1>
        <p className="text-muted-foreground">
          Choose the plan that filts your needs
        </p>
        <PricingTable
          appearance={{
            elements: {
              pricingTableCard: "border shadow-none rounded-lg!"
            },
            baseTheme: currentTheme === "dark" ? dark : undefined
          }}
        />
      </section>
    </div>
  );
}
