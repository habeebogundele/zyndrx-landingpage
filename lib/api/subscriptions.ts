import { fallbackSubscriptionPlans } from "@/lib/data/fallback-plans";
import type {
  SubscriptionPlan,
  SubscriptionPlansResponse,
} from "@/lib/types/subscription";

const PLANS_API_URL =
  process.env.SUBSCRIPTIONS_API_URL ??
  "https://api.zyndrx.soothetechnologies.com/api/subscriptions/plans";

function getRequestHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/json",
  };

  const token = process.env.SUBSCRIPTIONS_API_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export async function getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
  try {
    const response = await fetch(PLANS_API_URL, {
      headers: getRequestHeaders(),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(
        `Subscription plans API returned ${response.status}, using fallback data.`,
      );
      return fallbackSubscriptionPlans;
    }

    const json: SubscriptionPlansResponse = await response.json();

    if (!json.success || !Array.isArray(json.data) || json.data.length === 0) {
      console.warn("Invalid subscription plans response, using fallback data.");
      return fallbackSubscriptionPlans;
    }

    return json.data.filter((plan) => plan.active);
  } catch (error) {
    console.warn("Failed to fetch subscription plans, using fallback data.", error);
    return fallbackSubscriptionPlans;
  }
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
