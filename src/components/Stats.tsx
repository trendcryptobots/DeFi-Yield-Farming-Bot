import React from 'react';
import { DollarSign, Percent, Activity, Wallet } from 'lucide-react';
import type { Stats } from '../types';

interface StatsProps {
  stats: Stats;
}

export function Stats({ stats }: StatsProps) {
  const statItems = [
    {
      title: 'Total Value Locked',
      value: `$${stats.totalValue.toLocaleString()}`,
      icon: DollarSign,
      change: '+12.3%',
    },
    {
      title: 'Total Earnings',
      value: `$${stats.totalEarnings.toLocaleString()}`,
      icon: Wallet,
      change: '+5.2%',
    },
    {
      title: 'Active Automations',
      value: stats.activeAutomations,
      icon: Activity,
      change: '+2',
    },
    {
      title: 'Average APY',
      value: `${stats.averageApy.toFixed(2)}%`,
      icon: Percent,
      change: '+0.5%',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems.map((item) => (
        <div key={item.title} className="bg-[#0f2744] rounded-xl p-6 shadow-lg border border-blue-900/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-200/70">{item.title}</p>
              <p className="text-2xl font-semibold text-white mt-1">{item.value}</p>
            </div>
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <item.icon className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
              {item.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}