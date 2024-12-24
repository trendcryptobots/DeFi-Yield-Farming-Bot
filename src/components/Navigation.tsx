import React from 'react';
import { Wallet, Cpu } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-[#0f2744] shadow-lg border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Wallet className="w-8 h-8 text-blue-400" />
            <span className="ml-2 text-xl font-semibold text-white">DeFi Automator</span>
            <div className="flex items-center ml-4 bg-blue-500/10 px-3 py-1 rounded-full">
              <Cpu className="w-4 h-4 text-blue-400 mr-1" />
              <span className="text-xs text-blue-400">AI-Powered</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}