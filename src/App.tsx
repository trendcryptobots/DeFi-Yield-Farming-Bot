import React, { useState } from 'react';
import { Stats } from './components/Stats';
import { PoolList } from './components/PoolList';
import { Navigation } from './components/Navigation';
import { DashboardHeader } from './components/DashboardHeader';
import { NetworkSelector } from './components/NetworkSelector';
import type { Pool } from './types';
import type { NetworkId } from './types/networks';
import { mockPools, mockStats } from './data/mockData';

function App() {
  const [pools, setPools] = useState<Pool[]>(mockPools);
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkId>('ethereum');

  const handleToggleAutomation = (poolId: string) => {
    setPools(pools.map(pool => 
      pool.id === poolId 
        ? { ...pool, automationStatus: !pool.automationStatus }
        : pool
    ));
  };

  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <DashboardHeader 
            title="Dashboard"
            description="AI-optimized liquidity positions and automated earnings"
          />
          <NetworkSelector
            selectedNetwork={selectedNetwork}
            onNetworkChange={setSelectedNetwork}
          />
        </div>

        <Stats stats={mockStats} />

        <DashboardHeader 
          title="Active Pools"
          description="Smart automated liquidity management across multiple pools"
        />

        <PoolList 
          pools={pools}
          onToggleAutomation={handleToggleAutomation}
        />
      </main>
    </div>
  );
}

export default App;