export interface Customer {
  id: string
  nom: string
  email: string
  segment: string
  commandes: number
  depenses: number
  dernierAchat: string
  clv: number
  risque: number
  statut: string
}

export interface Segment {
  nom: string
  clients: number
  part: number
  depense: number
  frequence: number
  ca: number
  clv: number
  risque: number
  couleur: string
}

export interface Campaign {
  nom: string
  canal: string
  segment: string
  depenses: number
  impressions: number
  clics: number
  ctr: number
  conversions: number
  cpa: number
  revenus: number
  roi: number
  statut: string
}

export interface Category {
  nom: string
  commandes: number
  ventes: number
  ca: number
  panier: number
  evolution: number
}

export interface Recommendation {
  titre: string
  explication: string
  segment: string
  canal: string
  impact: string
  priorite: string
  statut: string
}

export interface Insight {
  titre: string
  texte: string
  impact: string
  action: string
}

export interface Report {
  titre: string
  description: string
  date: string
  statut: string
}
