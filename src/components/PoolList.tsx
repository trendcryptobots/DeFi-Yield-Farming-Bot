import React from 'react';
import { Switch } from './Switch';
import type { Pool } from '../types';

interface PoolListProps {
  pools: Pool[];
  onToggleAutomation: (poolId: string) => void;
}

export function PoolList({ pools, onToggleAutomation }: PoolListProps) {
  return (
    <div className="bg-[#0f2744] rounded-xl shadow-lg border border-blue-900/30 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-blue-900/30">
          <thead className="bg-blue-500/5">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-200/70 uppercase tracking-wider">Pool</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-200/70 uppercase tracking-wider">APY</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-200/70 uppercase tracking-wider">TVL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-200/70 uppercase tracking-wider">Your Liquidity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-200/70 uppercase tracking-wider">AI Automation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-900/30">
            {pools.map((pool) => (
              <tr key={pool.id} className="hover:bg-blue-500/5 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-white">{pool.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-emerald-400">{pool.apy}%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">${pool.tvl.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">${pool.yourLiquidity.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Switch
                    checked={pool.automationStatus}
                    onChange={() => onToggleAutomation(pool.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}