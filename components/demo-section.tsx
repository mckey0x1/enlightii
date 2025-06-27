"use client";

import { useState } from 'react';
import { Play, Code, Eye, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-white"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Watch how easy it is to create professional applications with just a conversation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'chat', label: 'AI Chat', icon: Play },
              { id: 'code', label: 'Generated Code', icon: Code },
              { id: 'preview', label: 'Live Preview', icon: Eye },
              { id: 'mobile', label: 'Mobile View', icon: Smartphone },
            ].map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                onClick={() => setActiveTab(id)}
                variant={activeTab === id ? 'default' : 'outline'}
                className={`${
                  activeTab === id
                    ? 'bg-white text-black'
                    : 'border-white/30 text-white hover:bg-white/10'
                } transition-all duration-200`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>

          {/* Demo Content */}
          <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
            {activeTab === 'chat' && (
              <div className="p-8">
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl px-4 py-3 max-w-xs">
                      <p className="text-white/90">Create a todo app with dark mode</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-white rounded-2xl px-4 py-3 max-w-md">
                      <p className="text-black">I'll create a beautiful todo app with dark mode toggle. Let me build the components, add task management functionality, and implement a sleek dark theme.</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl px-4 py-3 max-w-xs">
                      <p className="text-white/90">Add user authentication too</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-white rounded-2xl px-4 py-3 max-w-md">
                      <p className="text-black">Perfect! I'm adding secure user authentication with login/signup forms, session management, and personalized todo lists for each user.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="p-8">
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                  <div className="mb-4 text-white/60">// Generated React Component</div>
                  <pre>{`export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  
  const addTodo = (text) => {
    setTodos([...todos, { 
      id: Date.now(), 
      text, 
      completed: false 
    }]);
  };
  
  return (
    <div className={\`min-h-screen \${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }\`}>
      <TodoHeader 
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <TodoList todos={todos} />
    </div>
  );
}`}</pre>
                </div>
              </div>
            )}

            {activeTab === 'preview' && (
              <div className="p-8">
                <div className="bg-gray-900 rounded-lg p-6 min-h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-white/80">Interactive preview would appear here</p>
                    <p className="text-white/60 text-sm mt-2">Click to see your app in action</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mobile' && (
              <div className="p-8 flex justify-center">
                <div className="w-64 h-96 bg-gray-900 rounded-3xl border-4 border-gray-700 p-4 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="h-12 w-12 text-white/60 mb-4 mx-auto" />
                    <p className="text-white/80 text-sm">Mobile responsive design</p>
                    <p className="text-white/60 text-xs mt-2">Optimized for all devices</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}