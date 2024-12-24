export interface Pool {
  id: string;
  name: string;
  apy: number;
  tvl: number;
  token0: string;
  token1: string;
  yourLiquidity: number;
  automationStatus: boolean;
}

export interface Stats {
  totalValue: number;
  totalEarnings: number;
  activeAutomations: number;
  averageApy: number;
}