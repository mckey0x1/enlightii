"use client";

import { Button } from "@/components/ui/button";
import UserControl from "@/components/user-control";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignIn, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Lightbulb } from "lucide-react";
import Link from "next/link";

import React from "react";

type Props = {};

export default function Navbar({}: Props) {
    const isScrolled = useScroll();
  return (
    <nav className={cn("p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent", isScrolled && "bg-background border-border")}>
      <div className=" mx-auto w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Lightbulb width={24} height={24} />
          <span className="font-semibold text-lg">enlightii</span>
        </Link>
        <SignedOut>
          <div className="flex gap-2">
            <SignUpButton>
              <Button variant="secondary" size="sm">
                Sign up
              </Button>
            </SignUpButton>
            <SignInButton>
              <Button size="sm">
                Sign in
              </Button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
            <UserControl showName/>
        </SignedIn>
      </div>
    </nav>
  );
}
