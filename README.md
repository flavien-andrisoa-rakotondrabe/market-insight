# MarketInsight

> **Comprendre vos clients. Anticiper leurs comportements. Optimiser vos campagnes.**

MarketInsight est une plateforme d’analyse marketing basée sur les données, conçue pour aider à mieux comprendre les clients, identifier différents profils, analyser les performances commerciales et marketing, anticiper certains comportements et proposer des recommandations personnalisées.

Le projet s’inscrit dans une démarche d’**Analyse & Optimisation Marketing basée sur la Segmentation**. Il exploite les données clients, produits, ventes et campagnes marketing afin de transformer les données brutes en informations utiles à la prise de décision.

---

## 🎯 Objectifs

MarketInsight poursuit plusieurs objectifs :

- Explorer et comprendre les données clients, produits et ventes.
- Segmenter les clients selon leurs comportements et caractéristiques.
- Identifier les profils et préférences propres à chaque segment.
- Mesurer les performances des campagnes marketing.
- Analyser les ventes et leur évolution.
- Prédire le risque de désengagement des clients.
- Estimer la valeur potentielle des clients.
- Générer des recommandations marketing personnalisées.
- Centraliser les principaux indicateurs dans un dashboard interactif.

## Ces objectifs correspondent aux différents modules du projet pédagogique, notamment l’exploration des données, la segmentation, le profilage, l’analyse des campagnes, la prédiction et le dashboard marketing.

# 📊 Fonctionnalités

## 1. Vue d'ensemble

La page d'accueil du dashboard permet d'obtenir rapidement une vision globale de l'activité.

### Indicateurs principaux

- Chiffre d'affaires
- Nombre de clients actifs
- Nombre de commandes
- Panier moyen
- Taux de conversion
- ROI marketing

### Visualisations

- Évolution du chiffre d'affaires
- Répartition des clients par segment
- Performance des campagnes
- Principaux indicateurs commerciaux
- Insights générés à partir des données

---

## 2. Analyse des clients

La section **Clients** permet d'explorer individuellement les clients.

Pour chaque client, on peut notamment consulter :

- Nom
- Segment
- Nombre de commandes
- Montant dépensé
- Dernier achat
- Valeur client estimée (CLV)
- Risque de churn
- Statut

### Fonctionnalités

- Recherche
- Filtres
- Tri
- Export
- Consultation du détail d'un client

La fiche client présente également :

- Les informations générales
- Le comportement d'achat
- L'historique des achats
- Les préférences
- Les indicateurs prédictifs

---

## 3. Segmentation des clients

La segmentation constitue un élément central du projet.

Les clients sont regroupés selon différents critères tels que :

- Âge
- Dépenses
- Fréquence d'achat
- Produits achetés

Le projet prévoit notamment l'utilisation de méthodes de clustering comme **K-means**, ainsi que des techniques de réduction de dimension comme **PCA** et **t-SNE**.

### Segments utilisés

| Segment   | Description                                              |
| --------- | -------------------------------------------------------- |
| VIP       | Clients à forte valeur et forte activité                 |
| Fidèles   | Clients réguliers avec une bonne relation avec la marque |
| Potentiel | Clients présentant un potentiel de développement         |
| Nouveaux  | Clients récemment acquis                                 |
| À risque  | Clients dont l'activité diminue                          |
| Inactifs  | Clients n'ayant plus d'activité récente                  |

### Analyses

- Taille de chaque segment
- Dépenses moyennes
- Fréquence d'achat
- Nombre moyen de commandes
- Valeur client
- Risque de churn
- Produits préférés
- Comparaison entre segments

---

## 4. Profilage des segments

Après la segmentation, chaque groupe est analysé afin d'identifier ses principales caractéristiques.

L'objectif est de répondre à des questions telles que :

- Qui sont les clients de ce segment ?
- Combien dépensent-ils ?
- Quels produits achètent-ils ?
- À quelle fréquence achètent-ils ?
- Quels sont leurs besoins ou préférences ?
- Quel type d'action marketing leur correspond ?

Ces analyses permettent également de construire des **profils clients/personas**.

---

## 5. Analyse des campagnes marketing

La section **Campagnes** permet d'évaluer les performances des différentes campagnes.

### Indicateurs

- Impressions
- Clics
- CTR
- Conversions
- Dépenses
- CPC
- CPA
- Chiffre d'affaires généré
- ROI

Le projet prévoit notamment l'analyse du taux de conversion, du coût par clic, du coût par acquisition et du retour sur investissement.

### Analyses disponibles

- Évolution du ROI
- Performance par canal
- Conversions par canal
- Revenus générés par campagne
- Funnel marketing
- Comparaison des campagnes

---

## 6. Analyse des ventes

La section **Ventes** permet de suivre l'évolution de l'activité commerciale.

### KPI

- Chiffre d'affaires
- Nombre de commandes
- Panier moyen
- Croissance

### Analyses

- Chiffre d'affaires par mois
- Commandes par mois
- Ventes par segment
- Ventes par catégorie de produit
- Évolution de la croissance

---

## 7. Prédictions IA

La section **Prédictions IA** présente les modèles prédictifs du projet.

Deux axes principaux sont proposés :

### Prédiction du churn

L'objectif est d'identifier les clients présentant un risque de désengagement.

Le brief prévoit notamment l'utilisation de modèles tels que :

- Random Forest
- Logistic Regression
- XGBoost

sur les données clients et ventes.

### Estimation de la valeur client

La plateforme estime également la valeur potentielle des clients à travers un indicateur de **Customer Lifetime Value (CLV)**.

### Important

Les résultats actuellement affichés dans l'interface peuvent être des **données de démonstration**. Ils devront être remplacés par les résultats réels des modèles lors de l'intégration du backend et des données réelles.

---

## 8. Recommandations marketing

La section **Recommandations** transforme les analyses précédentes en actions concrètes.

Les recommandations peuvent être associées à :

- Un segment
- Un canal
- Un type de contenu
- Un objectif
- Un niveau d'impact
- Une priorité
- Un statut

Exemples d'actions :

- Fidéliser les clients réguliers.
- Relancer les clients à risque.
- Proposer des offres adaptées aux clients à fort potentiel.
- Adapter les campagnes aux segments les plus réceptifs.
- Réallouer le budget vers les canaux les plus performants.

L'objectif est de construire une stratégie digitale personnalisée en fonction des segments et des performances observées.

---

## 9. Rapports

La section **Rapports** centralise les analyses importantes :

- Rapport de segmentation
- Rapport des campagnes
- Rapport des ventes
- Rapport prédictif
- Synthèse des recommandations

Ces rapports peuvent servir de base au document final et à la présentation du projet.

---

# 🧠 Architecture

L'application est conçue pour être facilement connectée à un backend et à de véritables modèles de données.

```text
Interface utilisateur
        │
        ▼
Services applicatifs
        │
        ├── Données de démonstration
        │
        ▼
API Backend
        │
        ▼
Base de données
        │
        ▼
Modèles d'analyse / IA
```

L'interface ne doit pas accéder directement aux données mockées.

Exemple :

```text
Page Clients
     ↓
getCustomers()
     ↓
Service API
     ↓
Mock / API Backend
```

Cela permet de remplacer progressivement les données fictives par les données réelles sans modifier toute l'interface.

---

# 🛠️ Technologies

## Frontend

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide React**
- **Recharts**

## Analyse de données

Le brief prévoit notamment :

- Python
- Pandas
- Matplotlib
- R
- dplyr
- ggplot2

pour l'exploration et l'analyse des données.

## Machine Learning

Les modèles envisagés comprennent notamment :

- K-means
- PCA
- t-SNE
- Clustering hiérarchique
- Random Forest
- XGBoost
- Logistic Regression

---

# 📁 Structure du projet

```text
marketinsight/
│
├── app/
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── clients/
│   │   ├── segments/
│   │   ├── campagnes/
│   │   ├── ventes/
│   │   ├── predictions/
│   │   ├── recommandations/
│   │   ├── rapports/
│   │   └── parametres/
│   │
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── dashboard/
│   ├── clients/
│   ├── segments/
│   ├── campagnes/
│   ├── ventes/
│   ├── predictions/
│   ├── recommandations/
│   ├── reports/
│   └── ui/
│
├── lib/
│   ├── api/
│   │   ├── dashboard.ts
│   │   ├── customers.ts
│   │   ├── segments.ts
│   │   ├── campaigns.ts
│   │   ├── sales.ts
│   │   ├── predictions.ts
│   │   └── recommendations.ts
│   │
│   └── mock/
│       ├── dashboard.ts
│       ├── customers.ts
│       ├── segments.ts
│       ├── campaigns.ts
│       ├── sales.ts
│       ├── predictions.ts
│       └── recommendations.ts
│
├── types/
│   ├── customer.ts
│   ├── segment.ts
│   ├── campaign.ts
│   ├── sale.ts
│   ├── prediction.ts
│   ├── recommendation.ts
│   └── dashboard.ts
│
├── public/
│
├── .env.local
├── package.json
└── README.md
```

---

# 🔌 API

L'application est préparée pour communiquer avec un backend.

Variable d'environnement :

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Services prévus :

```text
getDashboardOverview()
getCustomers()
getCustomer(id)
getSegments()
getSegment(id)
getCampaigns()
getCampaign(id)
getSalesAnalytics()
getPredictions()
getRecommendations()
```

### Architecture actuelle

```text
UI → Service → Mock Data
```

### Architecture cible

```text
UI → Service → API → Backend → Base de données
                         ↓
                    Modèles IA
```

---

# 📊 Données de démonstration

Pour permettre le développement de l'interface avant la disponibilité du backend, le projet utilise actuellement des données fictives cohérentes.

Les données comprennent notamment :

- 30 à 50 clients
- 6 segments
- Plusieurs campagnes marketing
- Plusieurs catégories de produits
- Données de ventes mensuelles
- Scores de churn
- Estimations CLV
- Recommandations marketing

Les relations entre les données doivent rester cohérentes.

Par exemple :

```text
Client
  ↓
Segment
  ↓
Commandes
  ↓
Dépenses
  ↓
CLV
  ↓
Risque de churn
```

Les campagnes doivent également être associées à leurs segments, canaux, dépenses, impressions, clics, conversions et revenus.

---

# 🚀 Installation

## Prérequis

- Node.js
- npm / pnpm / yarn
- Git

## Cloner le projet

```bash
git clone <repository-url>
cd marketinsight
```

## Installer les dépendances

```bash
npm install
```

## Configurer l'environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## Lancer le projet

```bash
npm run dev
```

L'application sera accessible sur :

```text
http://localhost:3000
```

---

# 🧪 Vérification

Avant de considérer le projet comme terminé, vérifier :

- [ ] Toutes les pages sont accessibles.
- [ ] La navigation fonctionne.
- [ ] Les liens internes fonctionnent.
- [ ] Les graphiques affichent les données.
- [ ] Les filtres fonctionnent.
- [ ] La recherche client fonctionne.
- [ ] Les fiches clients sont accessibles.
- [ ] Les données affichées sont cohérentes.
- [ ] Les états de chargement sont présents.
- [ ] Les états vides sont gérés.
- [ ] Les erreurs sont gérées.
- [ ] L'interface est responsive.
- [ ] L'interface est entièrement en français.
- [ ] Les données de démonstration sont clairement identifiées.
- [ ] Aucun texte anglais inutile n'est présent dans l'interface.

---

# 📱 Responsive Design

L'application doit fonctionner sur :

- Desktop
- Tablette
- Mobile

La navigation latérale doit notamment pouvoir être transformée en menu adapté aux petits écrans.

Les tableaux et graphiques doivent rester utilisables sur les différentes tailles d'écran.

---

# 🎨 Direction artistique

MarketInsight adopte une identité visuelle inspirée des plateformes modernes de **Data Analytics / SaaS**.

Principes :

- Interface claire
- Hiérarchie visuelle forte
- Design professionnel
- Cartes sobres
- Graphiques lisibles
- Espacements généreux
- Typographie moderne
- Navigation simple
- Couleurs utilisées principalement pour représenter les données et les états

L'objectif est d'éviter l'apparence d'un dashboard générique ou surchargé.

---

# 🧩 Modules du projet pédagogique

Le projet reprend les principaux axes du brief :

| Module | Fonctionnalité                    |
| ------ | --------------------------------- |
| M1     | Analyse stratégique               |
| M2     | Exploration des données           |
| M3     | Segmentation client               |
| M4     | Profilage des segments            |
| M5     | Analyse des campagnes             |
| M6     | Prédictions churn / valeur client |
| M7     | Stratégie digitale personnalisée  |
| M8     | Dashboard marketing               |
| M9     | Présentation finale               |

Le dashboard constitue notamment la synthèse interactive des données et analyses du projet.

---

# 📦 Livrables

Le projet doit permettre de produire les principaux livrables demandés :

- Segmentation des clients
- Profils détaillés des segments
- Analyse des campagnes marketing
- Recommandations marketing
- Modèles prédictifs
- Analyse du churn
- Estimation de la valeur client
- Dashboard interactif
- Rapport final Word/PDF
- Présentation PowerPoint

Ces éléments correspondent aux livrables indiqués dans le brief.

---

# 🔮 Évolutions prévues

Les prochaines étapes peuvent inclure :

1. Connexion aux véritables datasets.
2. Mise en place du backend.
3. Connexion à une base de données.
4. Implémentation réelle du clustering.
5. Entraînement des modèles de churn.
6. Calcul réel de la CLV.
7. Génération automatique des recommandations.
8. Ajout d'une authentification.
9. Export PDF/Excel des analyses.
10. Génération automatisée des rapports.
11. Intégration d'une couche IA pour expliquer les résultats.

---

# 👨‍💻 Projet

**MarketInsight**
Projet pédagogique — Analyse & Optimisation Marketing basée sur la Segmentation.

> Transformer les données en décisions marketing plus pertinentes.
