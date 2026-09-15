'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  ArrowUpRight,
  BarChart3,
  CircleDot,
  Download,
  Filter,
  Lightbulb,
  Plus,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

import { AppShell, SectionHeader } from '@/components/dashboard/app-shell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  campaigns,
  categories,
  churnDistribution,
  clvDistribution,
  customers,
  insights,
  monthlyRevenue,
  recommendations,
  reports,
  scatter,
  segments,
} from '@/lib/mock/data'

const money = (n: number) =>
  new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n)

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'

const tone = (value: string): BadgeVariant => {
  if (value === 'Élevée' || value === 'Élevé') {
    return 'destructive'
  }

  if (value === 'Moyenne' || value === 'Moyen') {
    return 'secondary'
  }

  return 'outline'
}

function KpiCard({
  label,
  value,
  change,
  icon: Icon,
  color = '#834dfb',
}: {
  label: string
  value: string
  change: string
  icon: React.ElementType
  color?: string
}) {
  return (
    <Card
      className="shadow-none"
      style={{
        backgroundColor: color,
      }}
    >
      <CardContent className="flex items-start justify-between p-5">
        <div>
          <p className="text-xs font-medium">{label}</p>

          <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>

          <div className="mt-2 flex items-center gap-1 text-xs font-medium">
            <ArrowUpRight className="size-3.5" style={{ color }} />

            <span style={{ color }}>{change}</span>

            <span className="font-normal">vs période précédente</span>
          </div>
        </div>

        <div
          className="flex size-9 items-center justify-center rounded-lg"
          style={{
            backgroundColor: `${color}20`,
            color,
          }}
        >
          <Icon className="size-[18px]" />
        </div>
      </CardContent>
    </Card>
  )
}

function RevenueChart() {
  const [showOrders, setShowOrders] = useState(true)

  return (
    <Card className="shadow-none">
      <CardHeader className="flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="text-base">
            Évolution du chiffre d'affaires
          </CardTitle>

          <CardDescription>
            Performance sur les 12 derniers mois
          </CardDescription>
        </div>

        <div className="flex gap-1">
          <Button
            variant={showOrders ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setShowOrders(!showOrders)}
            className="text-xs"
          >
            {showOrders ? 'Masquer commandes' : 'Afficher commandes'}
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={monthlyRevenue}
              margin={{
                left: 0,
                right: 0,
                top: 10,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="ca" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#243b53" stopOpacity={0.18} />
                  <stop offset="100%" stopColor="#243b53" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                stroke="var(--border)"
              />

              <XAxis
                dataKey="mois"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11 }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11 }}
                tickFormatter={(v) => `${v / 1000}k`}
                width={35}
              />

              <RechartsTooltip
                formatter={(value: number, name) => [
                  name === 'ca' ? money(value) : value,
                  name === 'ca' ? 'CA' : 'Commandes',
                ]}
              />

              <Area
                type="monotone"
                dataKey="ca"
                stroke="#243b53"
                strokeWidth={2}
                fill="url(#ca)"
              />

              {showOrders && (
                <Line
                  type="monotone"
                  dataKey="commandes"
                  stroke="#7c3aed"
                  strokeWidth={2}
                  dot={false}
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function DashboardHome() {
  const kpis = [
    {
      l: "Chiffre d'affaires",
      v: '486 240 €',
      c: '+12,8 %',
      i: TrendingUp,
      color: '#834dfb',
    },
    {
      l: 'Clients actifs',
      v: '24 892',
      c: '+8,4 %',
      i: Users,
      color: '#f0e100',
    },
    {
      l: 'Commandes',
      v: '5 628',
      c: '+6,7 %',
      i: BarChart3,
      color: '#bef533',
    },
    {
      l: 'Panier moyen',
      v: '86,40 €',
      c: '+4,2 %',
      i: BarChart3,
      color: '#e6d5b7',
    },
    {
      l: 'Taux de conversion',
      v: '4,82 %',
      c: '+0,6 %',
      i: Target,
      color: '#bef533',
    },
    {
      l: 'ROI marketing',
      v: '3,42x',
      c: '+9,7 %',
      i: Zap,
      color: '#834dfb',
    },
  ]

  return (
    <>
      <SectionHeader
        title="Vue d'ensemble"
        description="Une vision globale de vos performances commerciales, marketing et clients."
        action={
          <Badge variant="outline" className="w-fit">
            <span className="mr-2 size-1.5 rounded-full bg-emerald-500" />
            Données actualisées
          </Badge>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.l}
            label={kpi.l}
            value={kpi.v}
            change={kpi.c}
            icon={kpi.i}
            color={kpi.color}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <RevenueChart />

        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">
              Répartition de la clientèle
            </CardTitle>

            <CardDescription>
              24 892 clients répartis par profil
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {segments.map((s) => (
              <div key={s.nom} className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-medium">{s.nom}</span>

                  <span className="text-muted-foreground">
                    {s.clients.toLocaleString('fr-FR')} · {s.part}%
                  </span>
                </div>

                <Progress value={s.part * 3.2} className="h-1.5" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_1fr]">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">
              Performance des campagnes
            </CardTitle>

            <CardDescription>Comparaison des canaux marketing</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={campaigns}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />

                  <XAxis
                    dataKey="canal"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10 }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10 }}
                  />

                  <RechartsTooltip />

                  <Bar
                    dataKey="roi"
                    fill="#3b82f6"
                    radius={[4, 4, 0, 0]}
                    name="ROI"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">
              Insights générés par l'IA
            </CardTitle>

            <CardDescription>
              Signaux à surveiller cette semaine
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {insights.map((i) => (
              <div key={i.titre} className="flex gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  <Lightbulb className="size-4" />
                </div>

                <div>
                  <p className="text-sm font-medium">{i.titre}</p>

                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {i.texte}
                  </p>

                  <Badge variant="outline" className="mt-2 text-[10px]">
                    {i.impact}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  )
}

function ClientsPage() {
  const [selected, setSelected] = useState<(typeof customers)[number] | null>(
    null,
  )

  const [q, setQ] = useState('')

  const filtered = customers.filter(
    (c) =>
      c.nom.toLowerCase().includes(q.toLowerCase()) ||
      c.email.toLowerCase().includes(q.toLowerCase()),
  )

  return (
    <>
      <SectionHeader
        title="Clients"
        description="Analysez votre clientèle et identifiez les comportements à forte valeur."
        action={
          <Button size="sm">
            <Download data-icon="inline-start" />
            Exporter
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ['Total clients', '24 892', '+8,4 %'],
          ['Clients actifs', '18 460', '+12,1 %'],
          ['Nouveaux clients', '4 280', '+6,8 %'],
          ['Clients à risque', '3 124', '-4,2 %'],
        ].map(([l, v, c]) => (
          <KpiCard key={l} label={l} value={v} change={c} icon={Users} />
        ))}
      </div>

      <Card className="mt-6 shadow-none">
        <CardHeader className="flex-row flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle className="text-base">Base clients</CardTitle>

            <CardDescription>
              48 clients affichés dans cette vue de démonstration
            </CardDescription>
          </div>

          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Rechercher un client"
                className="h-9 w-[220px] pl-9 text-xs"
              />
            </div>

            <Button variant="outline" size="icon" aria-label="Filtrer">
              <Filter />
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Segment</TableHead>
                  <TableHead>Commandes</TableHead>
                  <TableHead>Dépenses</TableHead>
                  <TableHead>Dernier achat</TableHead>
                  <TableHead>CLV estimée</TableHead>
                  <TableHead>Risque churn</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filtered.slice(0, 12).map((c) => (
                  <TableRow
                    key={c.id}
                    className="cursor-pointer"
                    onClick={() => setSelected(c)}
                  >
                    <TableCell>
                      <div>
                        <p className="font-medium">{c.nom}</p>

                        <p className="text-xs text-muted-foreground">
                          {c.email}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {c.segment}
                      </Badge>
                    </TableCell>

                    <TableCell>{c.commandes}</TableCell>

                    <TableCell>{money(c.depenses)}</TableCell>

                    <TableCell className="text-muted-foreground">
                      {c.dernierAchat}
                    </TableCell>

                    <TableCell className="font-medium">
                      {money(c.clv)}
                    </TableCell>

                    <TableCell>
                      <span
                        className={
                          c.risque > 60
                            ? 'text-destructive'
                            : c.risque > 30
                              ? 'text-amber-600'
                              : 'text-emerald-600'
                        }
                      >
                        {c.risque}%
                      </span>
                    </TableCell>

                    <TableCell>
                      <Badge
                        variant={c.statut === 'Actif' ? 'secondary' : 'outline'}
                      >
                        {c.statut}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Sheet open={!!selected} onOpenChange={() => setSelected(null)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Détail client</SheetTitle>
          </SheetHeader>

          {selected && (
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xl font-semibold">{selected.nom}</p>

                <p className="text-sm text-muted-foreground">
                  {selected.email}
                </p>

                <Badge className="mt-3" variant="outline">
                  {selected.segment}
                </Badge>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-4">
                {[
                  ['Commandes', selected.commandes],
                  ['Dépenses', money(selected.depenses)],
                  ['CLV estimée', money(selected.clv)],
                  ['Risque churn', `${selected.risque}%`],
                ].map(([l, v]) => (
                  <div key={l as string}>
                    <p className="text-xs text-muted-foreground">{l}</p>

                    <p className="mt-1 text-lg font-semibold">{v}</p>
                  </div>
                ))}
              </div>

              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="text-sm">
                    Historique des dépenses
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="h-[180px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyRevenue.slice(5)}>
                        <XAxis dataKey="mois" hide />
                        <YAxis hide />

                        <Line
                          dataKey="ca"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <div>
                <p className="mb-2 text-sm font-medium">Préférences d'achat</p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Mode</Badge>
                  <Badge variant="secondary">Beauté</Badge>
                  <Badge variant="secondary">Maison</Badge>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  )
}

function SegmentsPage() {
  const [selected, setSelected] = useState(segments[1])

  return (
    <>
      <SectionHeader
        title="Segmentation client"
        description="Identifiez les groupes de clients ayant des comportements similaires."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          label="Nombre de clients"
          value="24 892"
          change="+8,4 %"
          icon={Users}
        />

        <KpiCard
          label="Nombre de segments"
          value="6"
          change="Stable"
          icon={CircleDot}
        />

        <KpiCard
          label="Segment principal"
          value="Inactifs"
          change="26 %"
          icon={Target}
        />

        <KpiCard
          label="Plus gros CA"
          value="Fidèles"
          change="186 400 €"
          icon={TrendingUp}
        />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Profils clients</CardTitle>

            <CardDescription>
              Sélectionnez un segment pour voir son profil
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-3 sm:grid-cols-2">
            {segments.map((s) => (
              <button
                key={s.nom}
                onClick={() => setSelected(s)}
                className={`rounded-xl border p-4 text-left transition-colors hover:bg-accent ${
                  selected.nom === s.nom ? 'border-primary bg-accent' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: s.couleur }}
                  />

                  <span className="text-xs text-muted-foreground">
                    {s.part}%
                  </span>
                </div>

                <p className="mt-3 text-sm font-semibold">{s.nom}</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {s.clients.toLocaleString('fr-FR')} clients
                </p>

                <p className="mt-3 text-sm font-medium">
                  {money(s.ca)}{' '}
                  <span className="text-xs font-normal text-muted-foreground">
                    de CA
                  </span>
                </p>
              </button>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">
              Cartographie des segments
            </CardTitle>

            <CardDescription>
              Dépenses et fréquence d'achat par client
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="h-[330px]">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>
                  <CartesianGrid />

                  <XAxis
                    type="number"
                    dataKey="depenses"
                    name="Dépenses"
                    unit=" €"
                    tick={{ fontSize: 10 }}
                  />

                  <YAxis
                    type="number"
                    dataKey="frequence"
                    name="Fréquence"
                    tick={{ fontSize: 10 }}
                  />

                  <RechartsTooltip cursor={{ strokeDasharray: '3 3' }} />

                  <Scatter data={scatter} fill="#3b82f6">
                    {scatter.map((e, i) => (
                      <Cell key={i} fill={e.couleur} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">
            Profil du segment · {selected.nom}
          </CardTitle>

          <CardDescription>
            Ce segment regroupe principalement des clients réguliers présentant
            une fréquence d'achat élevée et une valeur client supérieure à la
            moyenne.
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ['Taille', selected.clients.toLocaleString('fr-FR')],
            ['Dépense moyenne', money(selected.depense)],
            ['Fréquence', `${selected.frequence} / an`],
            ['CA généré', money(selected.ca)],
            ['CLV moyenne', money(selected.clv)],
            ['Churn moyen', `${selected.risque}%`],
          ].map(([l, v]) => (
            <div key={l}>
              <p className="text-xs text-muted-foreground">{l}</p>
              <p className="mt-1 font-semibold">{v}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  )
}

function CampaignsPage() {
  return (
    <>
      <SectionHeader
        title="Campagnes marketing"
        description="Mesurez l'efficacité de vos campagnes et identifiez les canaux les plus performants."
        action={
          <Button size="sm">
            <Plus data-icon="inline-start" />
            Nouvelle campagne
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          ['Dépenses', '64 800 €', '+8,2 %'],
          ['Impressions', '1,78 M', '+14,6 %'],
          ['Clics', '92 400', '+9,8 %'],
          ['Conversions', '3 808', '+12,1 %'],
          ['CPA', '17,01 €', '-3,4 %'],
          ['ROI moyen', '4,18x', '+11,7 %'],
        ].map(([l, v, c]) => (
          <KpiCard key={l} label={l} value={v} change={c} icon={BarChart3} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Évolution du ROI</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="h-[230px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={campaigns}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />

                  <XAxis dataKey="nom" hide />

                  <YAxis axisLine={false} tickLine={false} />

                  <RechartsTooltip />

                  <Line
                    dataKey="roi"
                    stroke="#7c3aed"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Conversions par canal</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="h-[230px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={campaigns}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />

                  <XAxis
                    dataKey="canal"
                    tick={{ fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis axisLine={false} tickLine={false} />

                  <RechartsTooltip />

                  <Bar
                    dataKey="conversions"
                    fill="#14b8a6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">Toutes les campagnes</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campagne</TableHead>
                  <TableHead>Canal</TableHead>
                  <TableHead>Segment ciblé</TableHead>
                  <TableHead>Dépenses</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>Conversions</TableHead>
                  <TableHead>Revenus</TableHead>
                  <TableHead>ROI</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {campaigns.map((c) => (
                  <TableRow key={c.nom}>
                    <TableCell className="font-medium">{c.nom}</TableCell>

                    <TableCell>{c.canal}</TableCell>
                    <TableCell>{c.segment}</TableCell>
                    <TableCell>{money(c.depenses)}</TableCell>
                    <TableCell>{c.ctr}%</TableCell>

                    <TableCell>
                      {c.conversions.toLocaleString('fr-FR')}
                    </TableCell>

                    <TableCell>{money(c.revenus)}</TableCell>

                    <TableCell className="font-semibold">{c.roi}x</TableCell>

                    <TableCell>
                      <Badge
                        variant={
                          c.statut === 'Active' ? 'secondary' : 'outline'
                        }
                      >
                        {c.statut}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

function SalesPage() {
  return (
    <>
      <SectionHeader
        title="Analyse des ventes"
        description="Analysez l'évolution des ventes et les comportements d'achat."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Chiffre d'affaires", '486 240 €', '+12,8 %'],
          ['Commandes', '5 628', '+6,7 %'],
          ['Panier moyen', '86,40 €', '+4,2 %'],
          ['Croissance', '12,8 %', '+2,4 pts'],
        ].map(([l, v, c]) => (
          <KpiCard key={l} label={l} value={v} change={c} icon={TrendingUp} />
        ))}
      </div>

      <Card className="mt-6 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">
            Évolution du chiffre d'affaires et des commandes
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyRevenue}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />

                <XAxis dataKey="mois" axisLine={false} tickLine={false} />

                <YAxis
                  yAxisId="left"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v / 1000}k`}
                />

                <YAxis
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                />

                <RechartsTooltip />

                <Line
                  yAxisId="left"
                  dataKey="ca"
                  stroke="#243b53"
                  strokeWidth={2}
                  name="CA"
                />

                <Line
                  yAxisId="right"
                  dataKey="commandes"
                  stroke="#14b8a6"
                  strokeWidth={2}
                  name="Commandes"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">Performance par catégorie</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Commandes</TableHead>
                  <TableHead>Ventes</TableHead>
                  <TableHead>Chiffre d'affaires</TableHead>
                  <TableHead>Panier moyen</TableHead>
                  <TableHead>Évolution</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {categories.map((c) => (
                  <TableRow key={c.nom}>
                    <TableCell className="font-medium">{c.nom}</TableCell>

                    <TableCell>{c.commandes}</TableCell>
                    <TableCell>{c.ventes}</TableCell>
                    <TableCell>{money(c.ca)}</TableCell>
                    <TableCell>{money(c.panier)}</TableCell>

                    <TableCell
                      className={
                        c.evolution > 0
                          ? 'text-emerald-600'
                          : 'text-destructive'
                      }
                    >
                      {c.evolution > 0 ? '+' : ''}
                      {c.evolution}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

function PredictionsPage() {
  return (
    <>
      <SectionHeader
        title="Prédictions IA"
        description="Anticipez les risques et identifiez les clients à forte valeur."
        action={
          <Badge variant="outline">
            Données fictives · Modèles non connectés
          </Badge>
        }
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Prédiction du churn</CardTitle>

            <CardDescription>Modèle simulé · Random Forest</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              {[
                ['Risque élevé', '21 %', 'text-destructive'],
                ['Risque moyen', '31 %', 'text-amber-600'],
                ['Risque faible', '48 %', 'text-emerald-600'],
              ].map(([l, v, c]) => (
                <div key={l} className="rounded-lg bg-muted/50 p-3">
                  <p className="text-xs text-muted-foreground">{l}</p>

                  <p className={`mt-2 text-xl font-semibold ${c}`}>{v}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={churnDistribution}
                    dataKey="valeur"
                    nameKey="nom"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={3}
                  >
                    {churnDistribution.map((e, i) => (
                      <Cell key={i} fill={e.fill} />
                    ))}
                  </Pie>

                  <RechartsTooltip />

                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-foreground text-lg font-semibold"
                  >
                    3 124
                  </text>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t pt-4 text-center text-xs">
              <div>
                <p className="font-semibold">89,4 %</p>
                <p className="text-muted-foreground">Précision</p>
              </div>

              <div>
                <p className="font-semibold">84,8 %</p>
                <p className="text-muted-foreground">Rappel</p>
              </div>

              <div>
                <p className="font-semibold">86,0 %</p>
                <p className="text-muted-foreground">F1-score</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">
              Prédiction de la valeur client
            </CardTitle>

            <CardDescription>Modèle simulé · XGBoost</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-muted/50 p-3">
                <p className="text-xs text-muted-foreground">CLV moyenne</p>

                <p className="mt-2 text-xl font-semibold">1 148 €</p>
              </div>

              <div className="rounded-lg bg-muted/50 p-3">
                <p className="text-xs text-muted-foreground">
                  Clients à forte valeur
                </p>

                <p className="mt-2 text-xl font-semibold">2 486</p>
              </div>
            </div>

            <div className="mt-6 h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={clvDistribution}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />

                  <XAxis
                    dataKey="tranche"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10 }}
                  />

                  <YAxis axisLine={false} tickLine={false} />

                  <RechartsTooltip />

                  <Bar
                    dataKey="valeur"
                    fill="#7c3aed"
                    radius={[4, 4, 0, 0]}
                    name="Part des clients (%)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t pt-4 text-center text-xs">
              <div>
                <p className="font-semibold">0,87</p>
                <p className="text-muted-foreground">R²</p>
              </div>

              <div>
                <p className="font-semibold">124 €</p>
                <p className="text-muted-foreground">MAE</p>
              </div>

              <div>
                <p className="font-semibold">186 €</p>
                <p className="text-muted-foreground">RMSE</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">Clients à risque élevé</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Segment</TableHead>
                  <TableHead>Probabilité</TableHead>
                  <TableHead>Risque</TableHead>
                  <TableHead>Dernier achat</TableHead>
                  <TableHead>Action recommandée</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {customers
                  .filter((c) => c.risque >= 60)
                  .slice(0, 8)
                  .map((c) => (
                    <TableRow key={c.id}>
                      <TableCell className="font-medium">{c.nom}</TableCell>

                      <TableCell>{c.segment}</TableCell>

                      <TableCell className="font-semibold text-destructive">
                        {c.risque}%
                      </TableCell>

                      <TableCell>
                        <Badge variant="destructive">Élevé</Badge>
                      </TableCell>

                      <TableCell>{c.dernierAchat}</TableCell>

                      <TableCell className="text-muted-foreground">
                        Email de réactivation
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

function RecommendationsPage() {
  const [filter, setFilter] = useState('Toutes')

  const filtered = recommendations.filter(
    (r) => filter === 'Toutes' || r.priorite === filter,
  )

  return (
    <>
      <SectionHeader
        title="Recommandations marketing"
        description="Transformez les analyses en actions marketing personnalisées."
      />

      <div className="flex gap-2 overflow-x-auto pb-1">
        {['Toutes', 'Élevée', 'Moyenne', 'Faible'].map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {filtered.map((r) => (
          <Card key={r.titre} className="shadow-none">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle className="text-base">{r.titre}</CardTitle>

                  <CardDescription className="mt-2 leading-relaxed">
                    {r.explication}
                  </CardDescription>
                </div>

                <Badge variant={tone(r.priorite)}>{r.priorite}</Badge>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 gap-4 border-t pt-4 text-sm sm:grid-cols-4">
                <div>
                  <p className="text-xs text-muted-foreground">Segment</p>

                  <p className="mt-1 font-medium">{r.segment}</p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">Canal</p>

                  <p className="mt-1 font-medium">{r.canal}</p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">Impact estimé</p>

                  <p className="mt-1 font-medium text-emerald-600">
                    {r.impact}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">Statut</p>

                  <p className="mt-1 font-medium">{r.statut}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

function ReportsPage() {
  return (
    <>
      <SectionHeader
        title="Rapports"
        description="Consultez et partagez vos analyses marketing."
        action={
          <Button size="sm">
            <Plus data-icon="inline-start" />
            Nouveau rapport
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((r) => (
          <Card key={r.titre} className="shadow-none">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">{r.titre}</CardTitle>

                  <CardDescription className="mt-2">
                    {r.description}
                  </CardDescription>
                </div>

                <Badge
                  variant={r.statut === 'Actualisé' ? 'secondary' : 'outline'}
                >
                  {r.statut}
                </Badge>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-center justify-between border-t pt-4">
                <p className="text-xs text-muted-foreground">
                  Mis à jour le {r.date}
                </p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Consulter
                  </Button>

                  <Button size="sm" variant="ghost" aria-label="Télécharger">
                    <Download />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

function SettingsPage() {
  return (
    <>
      <SectionHeader
        title="Paramètres"
        description="Gérez votre profil, vos préférences et la connexion de votre environnement."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Profil</CardTitle>

            <CardDescription>
              Informations de votre compte administrateur
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <label className="block text-sm font-medium">
              Nom complet
              <Input className="mt-2" defaultValue="Claire Laurent" />
            </label>

            <label className="block text-sm font-medium">
              Adresse email
              <Input
                className="mt-2"
                defaultValue="claire.laurent@marketinsight.fr"
              />
            </label>

            <label className="block text-sm font-medium">
              Rôle
              <Input className="mt-2" defaultValue="Administratrice" disabled />
            </label>

            <Button>Enregistrer les modifications</Button>
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Préférences</CardTitle>

            <CardDescription>Personnalisez votre expérience</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <label className="block text-sm font-medium">
              Thème
              <Select defaultValue="clair">
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="clair">Clair</SelectItem>
                  <SelectItem value="sombre">Sombre</SelectItem>
                  <SelectItem value="systeme">Système</SelectItem>
                </SelectContent>
              </Select>
            </label>

            <label className="block text-sm font-medium">
              Langue
              <Select defaultValue="fr">
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="en">Anglais</SelectItem>
                </SelectContent>
              </Select>
            </label>

            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="text-sm font-medium">Notifications</p>

                <p className="text-xs text-muted-foreground">
                  Recevoir les alertes importantes
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="size-4 accent-primary"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Connexion API</CardTitle>

            <CardDescription>
              Configuration de la source de données
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-xs text-muted-foreground">URL de l'API</p>

                <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm">
                  http://localhost:8000/api
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Statut de connexion
                </p>

                <p className="mt-2 flex items-center gap-2 text-sm font-medium text-amber-600">
                  <span className="size-2 rounded-full bg-amber-500" />
                  Mode démonstration actif
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
              Les données affichées sont fictives et cohérentes entre les
              différentes vues. La couche de services est prête à être reliée à
              votre API.
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default function DashboardPage() {
  const pathname = usePathname()

  let content: React.ReactNode = <DashboardHome />

  if (pathname.endsWith('/clients')) {
    content = <ClientsPage />
  } else if (pathname.endsWith('/segments')) {
    content = <SegmentsPage />
  } else if (pathname.endsWith('/campagnes')) {
    content = <CampaignsPage />
  } else if (pathname.endsWith('/ventes')) {
    content = <SalesPage />
  } else if (pathname.endsWith('/predictions')) {
    content = <PredictionsPage />
  } else if (pathname.endsWith('/recommandations')) {
    content = <RecommendationsPage />
  } else if (pathname.endsWith('/rapports')) {
    content = <ReportsPage />
  } else if (pathname.endsWith('/parametres')) {
    content = <SettingsPage />
  }

  return <AppShell>{content}</AppShell>
}
