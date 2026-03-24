import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  BarChart3Icon, 
  RocketIcon, 
  TargetIcon, 
  ShieldCheckIcon, 
  UsersIcon, 
  ArrowRightIcon,
  PlayCircleIcon
} from "lucide-react"

export function Landing() {
  return (
    <div className="flex flex-col text-foreground selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 px-6">
        <div className="absolute inset-0 z-0 bg-linear-to-tr from-primary/10 via-background to-background" />
        <div className="container relative z-10 mx-auto max-w-6xl text-center">
          <Badge variant="outline" className="mb-6 py-1 px-4 border-primary/20 bg-primary/5 text-primary animate-in fade-in slide-in-from-bottom-3 duration-1000">
            The #1 Platform for SMMA Growth
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            Automate Your Agency <br /> Scale Your ROI
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Adveron is the all-in-one OS for SMMA owners. Manage campaigns across Meta, Google, and TikTok with real-time analytics and automated client reporting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button size="lg" className="h-12 px-8 text-lg font-medium group" asChild>
              <Link to="/register">
                Get Started Free <ArrowRightIcon className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg font-medium" asChild>
              <Link to="/login">
                <PlayCircleIcon className="mr-2 size-5" /> Live Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Everything your agency needs</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Stop juggling 5 different tools. Adveron centralizes your entire operation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-xs border-border/50 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TargetIcon className="text-primary size-6" />
                </div>
                <CardTitle>Campaign Management</CardTitle>
                <CardDescription>
                  Unified dashboard for Meta, Google, and TikTok ads. Edit budgets and status in real-time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur-xs border-border/50 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                  <BarChart3Icon className="text-emerald-500 size-6" />
                </div>
                <CardTitle>AI-Driven Analytics</CardTitle>
                <CardDescription>
                  Deep insights into ROAS, CPA, and LTV. Predict campaign success before you scale.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 backdrop-blur-xs border-border/50 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                  <UsersIcon className="text-indigo-500 size-6" />
                </div>
                <CardTitle>Client Portals</CardTitle>
                <CardDescription>
                  Professional, transparent reports for your clients. Eliminate manual reporting time entirely.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits / Social Proof */}
      <section className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/10 border-y border-border/40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none mb-4">The Adveron Edge</Badge>
              <h2 className="text-4xl font-bold mb-6 italic">Built for Scale. <br /> Dedicated to Performance.</h2>
              <ul className="space-y-4">
                {[
                  "Automated daily reporting saves you 15+ hours/week",
                  "Consolidated multi-account management",
                  "Enterprise-grade security and data accuracy",
                  "White-label options for your high-ticket clients"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ShieldCheckIcon className="text-emerald-500 size-6 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
               <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full z-0 opacity-50" />
               <Card className="relative z-10 overflow-hidden border-border/50 shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                   alt="Dashboard Preview" 
                   className="w-full h-auto object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" 
                 />
                 <div className="p-6 bg-card/80 backdrop-blur-md">
                   <div className="flex items-center gap-2 mb-2">
                     <RocketIcon className="text-primary size-5" />
                     <span className="font-semibold italic">Join 500+ Top Agencies</span>
                   </div>
                   <p className="text-sm text-muted-foreground">Growing ROAS by average of 42% in the first 3 months.</p>
                 </div>
               </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 italic">Ready to transform your agency?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-xl font-medium" asChild>
              <Link to="/register">Create Your Account</Link>
            </Button>
            <div className="flex flex-col gap-2">
              <p className="text-muted-foreground italic">No credit card required. 14-day free trial.</p>
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40 text-center text-muted-foreground text-sm">
        <div className="container mx-auto">
          <p>© 2024 Adveron. The OS for SMMA Owners.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
