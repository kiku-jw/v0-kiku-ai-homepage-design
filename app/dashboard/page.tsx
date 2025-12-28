"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copy, Check, Eye, EyeOff, Plus, CreditCard, BarChart3, Key, Settings } from "lucide-react"

export default function DashboardPage() {
  const [showKey, setShowKey] = useState(false)
  const [copied, setCopied] = useState(false)
  const apiKey = "kiku_sk_1234567890abcdef"

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="noise-bg grid-bg min-h-screen">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="rounded-xl">
              <Settings className="h-4 w-4" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium text-primary">
              K
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-8 text-2xl font-semibold">Dashboard</h1>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {/* Balance */}
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Balance</span>
            </div>
            <p className="text-3xl font-semibold">$24.50</p>
            <p className="mt-1 text-sm text-muted-foreground">~1,225 credits remaining</p>
            <Button variant="outline" size="sm" className="mt-4 rounded-xl bg-transparent">
              <Plus className="mr-2 h-4 w-4" />
              Add Credits
            </Button>
          </div>

          {/* Usage */}
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">This Month</span>
            </div>
            <p className="text-3xl font-semibold">847</p>
            <p className="mt-1 text-sm text-muted-foreground">API calls</p>
            <div className="mt-4 h-2 rounded-full bg-muted/30">
              <div className="h-full w-1/3 rounded-full bg-primary" />
            </div>
          </div>

          {/* API Key */}
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Key className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">API Key</span>
            </div>
            <div className="flex items-center gap-2">
              <code className="flex-1 rounded-lg bg-muted/30 px-3 py-2 font-mono text-sm">
                {showKey ? apiKey : "kiku_sk_••••••••••••"}
              </code>
              <Button variant="ghost" size="sm" onClick={() => setShowKey(!showKey)} className="h-9 w-9 p-0">
                {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleCopy} className="h-9 w-9 p-0">
                {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Products */}
        <h2 className="mb-4 text-lg font-medium">Your Products</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Chart2CSV", calls: 342, href: "/products/chart2csv" },
            { name: "PATAS", calls: 156, href: "/products/patas" },
            { name: "Masker", calls: 289, href: "/products/masker" },
            { name: "ReliAPI", calls: 60, href: "/products/reliapi" },
          ].map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="rounded-xl border border-border/40 bg-card/20 p-4 transition-colors hover:border-primary/30 hover:bg-card/40"
            >
              <p className="font-medium">{product.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{product.calls} calls this month</p>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <h2 className="mb-4 mt-8 text-lg font-medium">Recent Activity</h2>
        <div className="rounded-2xl border border-border/60 bg-card/30 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-border/40 bg-muted/10">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Product</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Endpoint</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                { product: "Chart2CSV", endpoint: "/extract", status: 200, time: "2 min ago" },
                { product: "Masker", endpoint: "/mask", status: 200, time: "5 min ago" },
                { product: "PATAS", endpoint: "/analyze", status: 200, time: "12 min ago" },
                { product: "ReliAPI", endpoint: "/proxy", status: 429, time: "15 min ago" },
                { product: "Chart2CSV", endpoint: "/extract", status: 200, time: "23 min ago" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/20 last:border-0">
                  <td className="px-4 py-3">{row.product}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{row.endpoint}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs ${
                        row.status === 200 ? "bg-primary/10 text-primary" : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
