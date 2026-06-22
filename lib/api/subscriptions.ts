import type {
  SubscriptionPlan,
  SubscriptionPlansResponse,
} from "@/lib/types/subscription";

const API_BASE = process.env.SUBSCRIPTIONS_API_TOKEN ?? "";

const PLANS_API_URL = `${API_BASE.replace(/\/$/, "")}/subscriptions/plans`;

export async function getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
  const response = await fetch(PLANS_API_URL, {
    headers: { Accept: "application/json" },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch plans: ${response.status}`);
  }

  const json: SubscriptionPlansResponse = await response.json();

  if (!json.success || !Array.isArray(json.data)) {
    throw new Error("Invalid plans response");
  }

  return json.data.filter((plan) => plan.active);
}

export function formatPlanPrice(price: number, currency: string): string {
  if (price === 0) return "Free";

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPlanInterval(interval: string): string {
  switch (interval) {
    case "one-time":
      return "forever";
    case "weekly":
      return "per week";
    case "monthly":
      return "per month";
    case "yearly":
      return "per year";
    default:
      return interval;
  }
}

export function formatPlanFeatures(
  features: SubscriptionPlan["features"],
): string[] {
  return [
    `${features.max_organizations} organization${features.max_organizations === 1 ? "" : "s"}`,
    `${features.max_projects_lifetime} project${features.max_projects_lifetime === 1 ? "" : "s"} lifetime`,
    `${features.max_members_per_org} members per org`,
    `${features.max_tasks_per_month} tasks per month`,
    `${features.max_groups_per_org} groups per org`,
  ];
}

export function getPlanCta(plan: SubscriptionPlan): string {
  if (plan.price === 0) return "Start Free";
  if (plan.key.includes("enterprise")) return "Contact Sales";
  return "Get Started";
}

export function isHighlightedPlan(plan: SubscriptionPlan): boolean {
  return plan.key === "pro_monthly";
}
