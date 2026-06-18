export interface PlanFeatures {
  max_organizations: number;
  max_projects_lifetime: number;
  max_members_per_org: number;
  max_tasks_per_month: number;
  max_groups_per_org: number;
}

export interface SubscriptionPlan {
  _id: string;
  key: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: "one-time" | "weekly" | "monthly" | "yearly" | string;
  active: boolean;
  isDefault: boolean;
  features: PlanFeatures;
}

export interface SubscriptionPlansResponse {
  success: boolean;
  data: SubscriptionPlan[];
}
