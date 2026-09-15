'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  Bell,
  CircleDot,
  FileBarChart,
  HelpCircle,
  LayoutDashboard,
  Menu,
  Megaphone,
  Settings2,
  ShoppingBag,
  Sparkles,
  Users,
  BrainCircuit,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  ArrowUpRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { navItems } from '@/lib/mock/data'
import { ModeToggle } from '../ModeToggle'

const iconMap = {
  LayoutDashboard,
  Users,
  CircleDot,
  Megaphone,
  ShoppingBag,
  BrainCircuit,
  Sparkles,
  FileBarChart,
  Settings2,
}
const pageNames: Record<string, string> = Object.fromEntries(
  navItems.map((item) => [item.href, item.label]),
)

function Navigation({
  collapsed = false,
  onNavigate,
}: {
  collapsed?: boolean
  onNavigate?: () => void
}) {
  const pathname = usePathname()
  return (
    <nav className="flex flex-col gap-1">
      <p
        className={`mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground ${collapsed ? 'sr-only' : ''}`}
      >
        Navigation
      </p>
      {navItems.map((item) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap]
        const active = pathname === item.href
        return (
          <Tooltip key={item.href}>
            <TooltipTrigger
              render={
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${active ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}
                >
                  <Icon className="size-[17px] shrink-0" />
                  <span className={collapsed ? 'sr-only' : ''}>
                    {item.label}
                  </span>
                  {item.label === 'Prédictions IA' && !collapsed && (
                    <Badge
                      variant={active ? 'secondary' : 'outline'}
                      className="ml-auto text-[9px]"
                    >
                      Bêta
                    </Badge>
                  )}
                </Link>
              }
            ></TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right">{item.label}</TooltipContent>
            )}
          </Tooltip>
        )
      })}
    </nav>
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const title = pageNames[pathname] ?? "Vue d'ensemble"

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-muted/30">
        <aside
          className={`fixed inset-y-0 left-0 z-40 hidden flex-col border-r bg-card transition-all lg:flex ${collapsed ? 'w-[76px]' : 'w-[248px]'}`}
        >
          <div
            className={`flex h-20 items-center gap-3 px-5 ${collapsed ? 'justify-center px-0' : ''}`}
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ArrowUpRight className="size-5" />
            </div>
            {!collapsed && (
              <div>
                <p className="text-[15px] font-semibold tracking-tight">
                  MarketInsight
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Analyse marketing & IA
                </p>
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 overflow-y-auto px-3 py-5">
            <Navigation collapsed={collapsed} />
          </div>
          <div className="px-3 pb-3">
            <div className="flex flex-col gap-1">
              <Link
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent ${collapsed ? 'justify-center' : ''}`}
              >
                <HelpCircle className="size-[17px]" />
                <span className={collapsed ? 'sr-only' : ''}>
                  Aide & support
                </span>
              </Link>
              <div
                className={`mt-2 flex items-center gap-3 rounded-xl border bg-muted/40 p-2.5 ${collapsed ? 'justify-center' : ''}`}
              >
                <Avatar className="size-8">
                  <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                    CL
                  </AvatarFallback>
                </Avatar>
                {!collapsed && (
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium">
                      Claire Laurent
                    </p>
                    <p className="truncate text-[10px] text-muted-foreground">
                      Administratrice
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>
        <div
          className={`transition-all ${collapsed ? 'lg:pl-[76px]' : 'lg:pl-[248px]'}`}
        >
          <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-background/90 px-5 backdrop-blur-md lg:px-8">
            <div className="flex items-center gap-3">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon"
                      className="lg:hidden"
                      aria-label="Ouvrir le menu"
                    >
                      <Menu />
                    </Button>
                  }
                ></SheetTrigger>
                <SheetContent side="left" className="w-[280px] p-0">
                  <SheetTitle className="sr-only">Menu principal</SheetTitle>
                  <div className="flex h-20 items-center gap-3 px-5">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <ArrowUpRight className="size-5" />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold">MarketInsight</p>
                      <p className="text-[10px] text-muted-foreground">
                        Analyse marketing & IA
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="p-3">
                    <Navigation onNavigate={() => setMobileOpen(false)} />
                  </div>
                </SheetContent>
              </Sheet>
              <div>
                <h1 className="text-xl font-semibold tracking-tight">
                  {title}
                </h1>
                <p className="hidden text-xs text-muted-foreground sm:block">
                  Mardi 14 septembre 2026 <span className="mx-1.5">·</span> Mode
                  démonstration
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 md:flex">
                <Select defaultValue="30">
                  <SelectTrigger className="h-9 w-[158px] bg-background text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Aujourd'hui</SelectItem>
                    <SelectItem value="7">7 derniers jours</SelectItem>
                    <SelectItem value="30">30 derniers jours</SelectItem>
                    <SelectItem value="90">3 derniers mois</SelectItem>
                    <SelectItem value="365">12 derniers mois</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Notifications"
              >
                <Bell className="size-[18px]" />
                <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-destructive" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden lg:flex"
                onClick={() => setCollapsed(!collapsed)}
                aria-label="Réduire la navigation"
              >
                {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
              </Button>
              <ModeToggle />
              <Avatar className="size-8">
                <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                  CL
                </AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="mx-auto max-w-[1600px] p-5 lg:p-8">{children}</main>
        </div>
      </div>
    </TooltipProvider>
  )
}

export function SectionHeader({
  description,
  action,
}: {
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {action}
    </div>
  )
}
export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        className="h-9 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        placeholder="Rechercher..."
      />
    </div>
  )
}
