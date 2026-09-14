export const navItems = [
  { label: "Vue d'ensemble", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Clients", href: "/dashboard/clients", icon: "Users" },
  { label: "Segments", href: "/dashboard/segments", icon: "CircleDot" },
  { label: "Campagnes", href: "/dashboard/campagnes", icon: "Megaphone" },
  { label: "Ventes", href: "/dashboard/ventes", icon: "ShoppingBag" },
  { label: "Prédictions IA", href: "/dashboard/predictions", icon: "BrainCircuit" },
  { label: "Recommandations", href: "/dashboard/recommandations", icon: "Sparkles" },
  { label: "Rapports", href: "/dashboard/rapports", icon: "FileBarChart" },
  { label: "Paramètres", href: "/dashboard/parametres", icon: "Settings2" },
]

export const monthlyRevenue = [
  { mois: "Oct", ca: 32400, commandes: 382 }, { mois: "Nov", ca: 35600, commandes: 418 },
  { mois: "Déc", ca: 42100, commandes: 476 }, { mois: "Jan", ca: 36900, commandes: 431 },
  { mois: "Fév", ca: 38400, commandes: 452 }, { mois: "Mar", ca: 39700, commandes: 469 },
  { mois: "Avr", ca: 41800, commandes: 486 }, { mois: "Mai", ca: 43200, commandes: 503 },
  { mois: "Juin", ca: 44700, commandes: 519 }, { mois: "Juil", ca: 46100, commandes: 538 },
  { mois: "Août", ca: 47300, commandes: 551 }, { mois: "Sept", ca: 48600, commandes: 568 },
]

export const segments = [
  { nom: "Clients VIP", clients: 1248, part: 5, depense: 486, frequence: 8.4, ca: 148200, clv: 2840, risque: 8, couleur: "#243b53" },
  { nom: "Clients fidèles", clients: 5836, part: 23, depense: 214, frequence: 5.8, ca: 186400, clv: 1260, risque: 14, couleur: "#3b82f6" },
  { nom: "Fort potentiel", clients: 3972, part: 16, depense: 168, frequence: 3.2, ca: 92400, clv: 980, risque: 22, couleur: "#7c3aed" },
  { nom: "Nouveaux clients", clients: 4280, part: 17, depense: 86, frequence: 1.4, ca: 36800, clv: 420, risque: 18, couleur: "#14b8a6" },
  { nom: "Clients à risque", clients: 3124, part: 13, depense: 128, frequence: 2.1, ca: 28400, clv: 510, risque: 68, couleur: "#f59e0b" },
  { nom: "Clients inactifs", clients: 6432, part: 26, depense: 42, frequence: .7, ca: 14200, clv: 180, risque: 91, couleur: "#94a3b8" },
]

const firstNames = ["Camille", "Thomas", "Léa", "Hugo", "Manon", "Lucas", "Chloé", "Nathan", "Sarah", "Arthur", "Emma", "Louis"]
const lastNames = ["Martin", "Bernard", "Dubois", "Moreau", "Laurent", "Leroy", "Roux", "Fontaine"]
export const customers = Array.from({ length: 48 }, (_, i) => {
  const segment = segments[i % segments.length]
  const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
  return { id: String(i + 1), nom: name, email: `${name.toLowerCase().replace(" ", ".")}@exemple.fr`, segment: segment.nom, commandes: 2 + (i % 18), depenses: 320 + i * 127, dernierAchat: `${(i % 25) + 1} sept. 2026`, clv: segment.clv + (i % 5) * 84, risque: segment.risque + (i % 8), statut: i % 7 === 0 ? "Inactif" : "Actif" }
})

export const campaigns = [
  { nom: "Campagne rentrée", canal: "Google Ads", segment: "Nouveaux clients", depenses: 12400, impressions: 284000, clics: 18400, ctr: 6.5, conversions: 824, cpa: 15, revenus: 48200, roi: 3.9, statut: "Active" },
  { nom: "Réactivation clients", canal: "Email", segment: "Clients à risque", depenses: 2800, impressions: 48200, clics: 9400, ctr: 19.5, conversions: 612, cpa: 4.6, revenus: 18600, roi: 6.6, statut: "Active" },
  { nom: "Offre VIP", canal: "Email personnalisé", segment: "Clients VIP", depenses: 4200, impressions: 12400, clics: 3800, ctr: 30.6, conversions: 318, cpa: 13.2, revenus: 28400, roi: 6.8, statut: "Terminée" },
  { nom: "Black Friday", canal: "Meta Ads", segment: "Tous les clients", depenses: 18600, impressions: 642000, clics: 28400, ctr: 4.4, conversions: 1240, cpa: 15, revenus: 62400, roi: 3.4, statut: "Planifiée" },
  { nom: "Nouveaux clients", canal: "Instagram", segment: "Nouveaux clients", depenses: 7600, impressions: 318000, clics: 12600, ctr: 4.0, conversions: 428, cpa: 17.8, revenus: 24600, roi: 3.2, statut: "Active" },
  { nom: "Promotion saisonnière", canal: "TikTok", segment: "Fort potentiel", depenses: 9200, impressions: 486000, clics: 14200, ctr: 2.9, conversions: 386, cpa: 23.8, revenus: 21800, roi: 2.4, statut: "Terminée" },
]

export const categories = [
  { nom: "Mode & accessoires", commandes: 1428, ventes: 3840, ca: 128400, panier: 89.9, evolution: 12.4 },
  { nom: "Maison & décoration", commandes: 986, ventes: 2480, ca: 92400, panier: 93.7, evolution: 8.6 },
  { nom: "Beauté & bien-être", commandes: 1240, ventes: 3620, ca: 84600, panier: 68.2, evolution: 15.8 },
  { nom: "Électronique", commandes: 682, ventes: 920, ca: 96800, panier: 142.0, evolution: 4.2 },
  { nom: "Sport & loisirs", commandes: 764, ventes: 1840, ca: 58200, panier: 76.2, evolution: -2.1 },
]

export const recommendations = [
  { titre: "Réactiver les clients à risque", explication: "Une séquence email personnalisée peut relancer les clients dont la fréquence d'achat baisse depuis 60 jours.", segment: "Clients à risque", canal: "Email", impact: "+8 % de réactivation", priorite: "Élevée", statut: "À lancer" },
  { titre: "Fidéliser les clients VIP", explication: "Proposer un accès anticipé aux nouveautés renforce la valeur perçue et la rétention du segment premium.", segment: "Clients VIP", canal: "Email personnalisé", impact: "+12 % de CLV", priorite: "Élevée", statut: "En préparation" },
  { titre: "Renforcer les campagnes email", explication: "L'email présente le meilleur ROI. Augmenter progressivement la pression commerciale sur les segments engagés.", segment: "Clients fidèles", canal: "Email", impact: "+18 % de ROI", priorite: "Moyenne", statut: "À valider" },
  { titre: "Créer une offre découverte", explication: "Un panier d'entrée réduit peut accélérer la conversion des nouveaux visiteurs à fort potentiel.", segment: "Fort potentiel", canal: "Meta Ads", impact: "+6 % de conversion", priorite: "Faible", statut: "À étudier" },
]

export const insights = [
  { titre: "Baisse de fréquence détectée", texte: "Les clients à risque présentent une baisse moyenne de 24 % de fréquence d'achat sur les 60 derniers jours.", impact: "Impact élevé", action: "Lancer une campagne de réactivation" },
  { titre: "Les fidèles portent la croissance", texte: "Les clients fidèles génèrent 38 % du chiffre d'affaires avec un risque de churn inférieur à 15 %.", impact: "Impact positif", action: "Renforcer le programme de fidélité" },
  { titre: "L'email surperforme", texte: "Les campagnes email affichent actuellement un ROI moyen de 6,7x, supérieur à tous les autres canaux.", impact: "Impact positif", action: "Réallouer 10 % du budget" },
]

export const scatter = Array.from({ length: 42 }, (_, i) => ({ depenses: 30 + (i * 47) % 470, frequence: 1 + (i * 13) % 10, segment: segments[i % segments.length].nom, couleur: segments[i % segments.length].couleur }))

export const clvDistribution = [{ tranche: "0–250 €", valeur: 18 }, { tranche: "250–500 €", valeur: 26 }, { tranche: "500–1k €", valeur: 31 }, { tranche: "1k–2k €", valeur: 17 }, { tranche: "> 2k €", valeur: 8 }]
export const churnDistribution = [{ nom: "Faible", valeur: 48, fill: "#14b8a6" }, { nom: "Moyen", valeur: 31, fill: "#f59e0b" }, { nom: "Élevé", valeur: 21, fill: "#ef4444" }]
export const reports = [
  { titre: "Rapport de segmentation", description: "Analyse des différents profils clients et de leur valeur.", date: "12 sept. 2026", statut: "Actualisé" },
  { titre: "Rapport campagnes", description: "Analyse détaillée des performances marketing par canal.", date: "10 sept. 2026", statut: "Actualisé" },
  { titre: "Rapport ventes", description: "Synthèse commerciale et évolution du chiffre d'affaires.", date: "01 sept. 2026", statut: "Actualisé" },
  { titre: "Rapport prédictif", description: "Analyse du churn et de la valeur client estimée.", date: "28 août 2026", statut: "En préparation" },
]

