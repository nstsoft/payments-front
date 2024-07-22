export interface IUserAccount {
  id: string;
  country: string;
  created: number;
  default_currency: string;
  details_submitted: boolean;
  email: string;
  external_accounts: {
    object: string;
    data: any[];
    has_more: boolean;
    total_count: number;
    url: string;
  };
  metadata: any;
  payouts_enabled: boolean;
  type: string;
}
