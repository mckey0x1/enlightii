"use client";

import { useState, useEffect, useRef } from "react";
import {
  Lightbulb,
  Zap,
  Code,
  Upload,
  Paperclip,
  Send,
  Mic,
  Image,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectList } from "@/modules/home/ui/components/project-list";

export default function HeroSection() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fullText = "Create apps and websites by chatting with AI";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setInputValue(`Uploaded: ${file.name}`);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setInputValue(`Uploaded: ${file.name}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      console.log("Submitted:", inputValue);
      // Handle submission logic here
    }
  };

  const trpc = useTRPC();
  const createProject = useMutation(
    trpc.projects.create.mutationOptions({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: (data) => {
        router.push(`/projects/${data.id}`);
      }
    })
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Torch-like gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Radial gradient overlay for torch effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-black/50"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon cluster */}

        {/* Main heading with typewriter effect */}
        <div className="w-[80%] mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-10 mb-8 leading-tight">
            <span className="text-white">{text}</span>
            <span className="animate-pulse text-white">|</span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-xs md:text-base text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          {/* Transform your ideas into reality with the power of artificial intelligence.  */}
          Build beautiful, functional applications through natural conversation.
        </p>

        {/* Large Input Field */}
        <div className="max-w-3xl mx-auto mb-16">
          <ProjectForm />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// <div className="max-w-3xl mx-auto mb-16">
//   <form onSubmit={handleSubmit} className="relative">
//     <div
//       className={`relative bg-white/10 backdrop-blur-lg border-2 rounded-3xl transition-all duration-300 ${
//         dragActive
//           ? "border-white border-dashed bg-white/20"
//           : "border-white/30 hover:border-white/50"
//       }`}
//       onDragEnter={handleDrag}
//       onDragLeave={handleDrag}
//       onDragOver={handleDrag}
//       onDrop={handleDrop}>
//       <div className="flex p-4">
//         {/* File upload button */}
//         <input
//           type="file"
//           ref={fileInputRef}
//           onChange={handleFileSelect}
//           className="hidden"
//           accept="image/*"
//         />
//         <Button
//           type="button"
//           onClick={() => fileInputRef.current?.click()}
//           variant="ghost"
//           size="sm"
//           className="text-white/70 hover:text-white hover:bg-white/10 mr-2">
//           <Paperclip className="h-4 w-4" />
//         </Button>

//         {/* Main input */}
//         <textarea
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Describe your app idea, upload files, or ask anything..."
//           className="w-full bg-transparent txtaprompt text-white placeholder-white/60 text-base pt-1 focus:outline-none resize-none min-h-[80px]"
//           rows={2}
//         />

//         {/* Action buttons */}
//         <div className="flex items-center space-x-2 ml-3">
//           <Button
//             type="submit"
//             disabled={createProject.isPending}
//             onClick={() => {
//               createProject.mutate({ value: inputValue });
//             }}
//             className="bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2 rounded-full">
//             <Send className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       {/* Quick action buttons */}
//       <div className="border-t border-white/20 p-4">
//         <div className="flex flex-wrap justify-center gap-3">
//           <Button
//             type="button"
//             variant="ghost"
//             size="sm"
//             className="text-white/70 hover:text-white hover:bg-white/10 text-sm"
//             onClick={() =>
//               setInputValue("Create a modern e-commerce website")
//             }>
//             <Image className="h-4 w-4 mr-2" />
//             E-commerce Site
//           </Button>
//           <Button
//             type="button"
//             variant="ghost"
//             size="sm"
//             className="text-white/70 hover:text-white hover:bg-white/10 text-sm"
//             onClick={() =>
//               setInputValue("Build a task management app")
//             }>
//             <FileText className="h-4 w-4 mr-2" />
//             Task Manager
//           </Button>
//           <Button
//             type="button"
//             variant="ghost"
//             size="sm"
//             className="text-white/70 hover:text-white hover:bg-white/10 text-sm"
//             onClick={() =>
//               setInputValue("Design a social media dashboard")
//             }>
//             <Zap className="h-4 w-4 mr-2" />
//             Dashboard
//           </Button>
//         </div>
//       </div>
//     </div>

//     {/* Drag and drop indicator */}
//     {dragActive && (
//       <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
//         <div className="text-center">
//           <Upload className="h-12 w-12 text-white mx-auto mb-4" />
//           <p className="text-white text-lg font-medium">
//             Drop your files here
//           </p>
//         </div>
//       </div>
//     )}
//   </form>

//   <p className="text-white/60 text-sm mt-4">
//     Supports text and images. Start typing or drag & drop to begin.
//   </p>
// </div>;
