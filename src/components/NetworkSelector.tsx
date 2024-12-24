import React from 'react';
import { ChevronDown } from 'lucide-react';
import { networks } from '../data/networks';
import type { NetworkId } from '../types/networks';

interface NetworkSelectorProps {
  selectedNetwork: NetworkId;
  onNetworkChange: (networkId: NetworkId) => void;
}

export function NetworkSelector({ selectedNetwork, onNetworkChange }: NetworkSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedNetworkData = networks.find(n => n.id === selectedNetwork);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-lg hover:bg-blue-500/20 transition-colors"
      >
        <img
          src={selectedNetworkData?.icon}
          alt={selectedNetworkData?.name}
          className="w-5 h-5 rounded-full"
        />
        <span className="text-white">{selectedNetworkData?.name}</span>
        <ChevronDown className="w-4 h-4 text-blue-400" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 rounded-lg bg-[#0f2744] shadow-lg border border-blue-900/30">
          <div className="py-2 max-h-96 overflow-auto">
            {networks.map((network) => (
              <button
                key={network.id}
                onClick={() => {
                  onNetworkChange(network.id as NetworkId);
                  setIsOpen(false);
                }}
                className="w-full flex items-center px-4 py-2 text-sm text-white hover:bg-blue-500/10 transition-colors"
              >
                <img
                  src={network.icon}
                  alt={network.name}
                  className="w-5 h-5 rounded-full mr-2"
                />
                {network.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}