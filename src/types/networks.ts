export interface Network {
  id: string;
  name: string;
  icon: string;
  chainId: number;
}

export type NetworkId = 
  | 'ethereum'
  | 'fuse'
  | 'telos'
  | 'meter'
  | 'moonriver'
  | 'polygon'
  | 'avalanche'
  | 'theta'
  | 'fantom'
  | 'harmony'
  | 'bsc'
  | 'solana';