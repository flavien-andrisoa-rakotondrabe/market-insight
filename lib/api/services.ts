import {
  customers,
  campaigns,
  categories,
  monthlyRevenue,
  segments,
  recommendations,
  insights,
  scatter,
  clvDistribution,
  churnDistribution,
  reports,
} from '@/lib/mock/data'
import {
  Customer,
  Campaign,
  Category,
  Segment,
  Recommendation,
  Insight,
  Report,
} from '@/lib/types'

export async function getDashboardOverview() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const totalRevenue = monthlyRevenue.reduce((sum, m) => sum + m.ca, 0)
  const lastMonth = monthlyRevenue[monthlyRevenue.length - 1].ca
  const prevMonth = monthlyRevenue[monthlyRevenue.length - 2].ca
  const revenueGrowth = (((lastMonth - prevMonth) / prevMonth) * 100).toFixed(1)

  return {
    kpis: [
      {
        label: "Chiffre d'affaires",
        valeur: '486 240 €',
        change: '+12,8 %',
        icon: 'TrendingUp',
      },
      {
        label: 'Clients actifs',
        valeur: '24 892',
        change: '+8,4 %',
        icon: 'Users',
      },
      {
        label: 'Commandes',
        valeur: '5 628',
        change: '+6,7 %',
        icon: 'ShoppingBag',
      },
      {
        label: 'Panier moyen',
        valeur: '86,40 €',
        change: '+4,2 %',
        icon: 'BarChart3',
      },
      {
        label: 'Taux de conversion',
        valeur: '4,82 %',
        change: '+0,6 %',
        icon: 'Target',
      },
      {
        label: 'ROI marketing',
        valeur: '3,42x',
        change: '+9,7 %',
        icon: 'Zap',
      },
    ],
    monthlyRevenue,
    segments,
    insights,
    campaigns: campaigns.slice(0, 3),
  }
}

export async function getCustomers() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return customers
}

export async function getSegments() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return segments
}

export async function getCampaigns() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return campaigns
}

export async function getSalesAnalytics() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return { monthlyRevenue, categories }
}

export async function getPredictions() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const churnRisk = customers.filter((c) => c.risque >= 60)
  return { customers: churnRisk, churnDistribution, clvDistribution }
}

export async function getRecommendations() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return recommendations
}

export async function getSegmentScatter() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return scatter
}

export async function getReports() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return reports
}
