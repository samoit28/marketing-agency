import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Target,
  Zap,
  Users,
  Play,
  BarChart3,
  Lightbulb,
  Star,
  TrendingUp,
  FlaskConical,
  Beaker,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Libra Growth Labs" width={200} height={40} className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#video" className="text-sm font-medium hover:text-primary transition-colors">
              Philosophy
            </Link>
            <Link href="#truth" className="text-sm font-medium hover:text-primary transition-colors">
              The Truth
            </Link>
            <Link href="#difference" className="text-sm font-medium hover:text-primary transition-colors">
              Our Difference
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
          </nav>
          <Button asChild>
            <Link href="#apply">Apply Now</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-6 max-w-4xl">
                <h1 className="font-magistral text-4xl font-medium tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Nobody starts a startup thinking they want to play it safe
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                  Most agencies are built for efficiency, not the highest performance. The highest impact solution
                  isn&apos;t something you can hire for if you don&apos;t know what it&apos;s going to look like.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button size="lg" asChild>
                    <Link href="#apply">
                      Work With Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#video">See Our Philosophy</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Truth About Traditional Agencies - Twist the Knife */}
        <section id="truth" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-12">
              <div className="space-y-4 max-w-4xl text-center">
                <h2 className="font-magistral text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
                  The Truth About Traditional Agencies
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  Most agencies are built for efficiency, not the highest performance. That&apos;s fundamentally
                  misaligned with how startups need to operate.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 max-w-6xl w-full">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-magistral text-xl font-medium mb-2">Bloated with Overhead</h3>
                      <p className="text-muted-foreground">
                        Traditional agencies are stacked with endless overhead: media buyers, data analysts, graphic
                        designers, web developers. All eating away at margins and slowing down execution.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-magistral text-xl font-medium mb-2">Paralyzed by Data</h3>
                      <p className="text-muted-foreground">
                        Agencies love to bury themselves in data. I call that what it is: fear of the unknown. By the
                        time patterns become obvious, everyone&apos;s already chasing them.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-magistral text-xl font-medium mb-2">Cookie-Cutter Solutions</h3>
                      <p className="text-muted-foreground">
                        You can&apos;t go into uncharted territory and use a map from somewhere that already exists.
                        It&apos;s going to lead you to the wrong places.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Card className="p-8 border-2 border-orange-500/20 bg-orange-950/10">
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                        <Lightbulb className="h-8 w-8 text-orange-400" />
                      </div>
                      <h3 className="font-magistral text-2xl font-medium">The Startup Reality</h3>
                      <p className="text-muted-foreground">
                        Your path is never obvious. There&apos;s no way anyone can sit down with you for an hour and
                        tell you what the next year of your marketing growth will look like.
                      </p>
                      <blockquote className="text-lg font-medium text-orange-400 italic">
                        "You&apos;re going into uncharted territory. You do not have a solution that&apos;s ready
                        to go."
                      </blockquote>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - Philosophy */}
        <section id="video" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="space-y-4 max-w-3xl text-center">
                <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                  Our Philosophy
                </div>
                <h2 className="font-magistral text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
                  Why We Think Differently
                </h2>
                <p className="text-muted-foreground text-lg">
                  Skip the intro—here&apos;s the core philosophy that drives everything we do.
                </p>
              </div>

              <div className="w-full max-w-4xl">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border">
                  <iframe
                    src="https://www.loom.com/embed/YOUR_LOOM_VIDEO_ID"
                    frameBorder="0"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    title="Libra Growth Labs Philosophy"
                  ></iframe>
                  {/* Placeholder for when no video ID is provided */}
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="text-center space-y-4">
                      <Play className="h-16 w-16 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Philosophy Video - Replace with your Loom video embed URL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Libra Difference */}
        <section id="difference" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-12">
              <div className="space-y-4 max-w-4xl text-center">
                <h2 className="font-magistral text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
                  The Libra Difference
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  I&apos;ve structured Libra just like an entrepreneur builds a startup: lean, smart, agile. This
                  alignment is exactly why we resonate so deeply with startup founders.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3 max-w-6xl w-full">
                <Card className="p-8 bg-blue-950/20 border-blue-500/20">
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="font-magistral text-2xl font-medium">Entrepreneurial Agility</h3>
                    <p className="text-muted-foreground">
                      Built like a startup with one streamlined team, automation, and extensive expertise. No bloated
                      payroll, maximum agility.
                    </p>
                  </div>
                </Card>

                <Card className="p-8 bg-orange-950/20 border-orange-500/20">
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-orange-400" />
                    </div>
                    <h3 className="font-magistral text-2xl font-medium">Strategic Experimentation</h3>
                    <p className="text-muted-foreground">
                      Blending entrepreneurial instinct with disciplined, targeted testing. Guardrails on intuition
                      without suffocating creativity.
                    </p>
                  </div>
                </Card>

                <Card className="p-8 bg-green-950/20 border-green-500/20">
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="font-magistral text-2xl font-medium">High-Impact Focus</h3>
                    <p className="text-muted-foreground">
                      Success isn&apos;t about volume—it&apos;s about pinpointing precisely which creative strategies
                      deliver the most significant impact.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Your Growth Lab */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 p-8">
                      <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                      <div className="w-6 h-6 rounded-full bg-green-500"></div>
                      <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                      <div className="w-12 h-12 rounded-full bg-green-600"></div>
                      <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                      <div className="w-6 h-6 rounded-full bg-orange-600"></div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <FlaskConical className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="absolute -top-2 -right-6 w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Beaker className="h-4 w-4 text-orange-400" />
                  </div>
                  <div className="absolute -bottom-6 -right-4 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Target className="h-4 w-4 text-green-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <FlaskConical className="h-4 w-4 text-orange-400" />
                    </div>
                    <h2 className="font-magistral text-3xl font-medium">Your Growth Lab</h2>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Think of your startup as a unique organism with untapped potential. Traditional agencies treat every
                    business the same—like assembly line production. But breakthrough growth happens in controlled
                    experimentation.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FlaskConical className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-magistral text-lg font-medium mb-2">Controlled Environment</h3>
                      <p className="text-muted-foreground text-sm">
                        We create the perfect conditions for your startup to thrive—strategic constraints that
                        accelerate rather than limit growth.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Beaker className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-magistral text-lg font-medium mb-2">Rapid Experimentation</h3>
                      <p className="text-muted-foreground text-sm">
                        Like cultures in a petri dish, we test multiple growth hypotheses simultaneously, identifying
                        what multiplies fastest.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-4 w-4 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-magistral text-lg font-medium mb-2">Exponential Scaling</h3>
                      <p className="text-muted-foreground text-sm">
                        Once we identify your growth catalyst, we replicate and amplify it across all channels—turning
                        discovery into systematic success.
                      </p>
                    </div>
                  </div>
                </div>

                <Card className="p-6 bg-orange-950/10 border-orange-500/20">
                  <blockquote className="text-lg font-medium text-orange-400 italic">
                    "Every breakthrough started as an experiment. We&apos;re not just running your ads—we&apos;re
                    cultivating your next growth breakthrough."
                  </blockquote>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-12">
              <div className="space-y-4 max-w-4xl text-center">
                <h2 className="font-magistral text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
                  Breakthrough Results
                </h2>
                <p className="text-muted-foreground text-lg">
                  Real startups, real growth, real impact. Here&apos;s what happens when you align with entrepreneurial
                  thinking.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3 max-w-6xl w-full">
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-green-400">312%</div>
                    <h3 className="font-magistral text-xl font-medium">ROAS Increase</h3>
                    <p className="text-muted-foreground text-sm">
                      SaaS startup went from break-even to 3.12x ROAS in 90 days through strategic creative testing and
                      audience refinement.
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-blue-400">$2.1M</div>
                    <h3 className="font-magistral text-xl font-medium">Revenue Generated</h3>
                    <p className="text-muted-foreground text-sm">
                      E-commerce brand scaled from $50K to $2.1M in annual revenue using our controlled experimentation
                      approach.
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-orange-400">67%</div>
                    <h3 className="font-magistral text-xl font-medium">Cost Reduction</h3>
                    <p className="text-muted-foreground text-sm">
                      Fintech startup reduced customer acquisition cost by 67% while maintaining quality through
                      precision targeting.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-12">
              <div className="space-y-4 max-w-4xl text-center">
                <h2 className="font-magistral text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
                  Full-Service Growth for Startups
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Everything you need to scale your startup through Meta and Google advertising, delivered with
                  entrepreneurial precision.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3 max-w-6xl w-full">
                <Card className="p-6 border-blue-500/20 bg-blue-950/10">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="font-magistral text-xl font-medium">Media Buying</h3>
                    <p className="text-muted-foreground">
                      Strategic ad spend optimization across Meta and Google platforms with entrepreneurial efficiency.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 border-green-500/20 bg-green-950/10">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="font-magistral text-xl font-medium">Data Analysis</h3>
                    <p className="text-muted-foreground">
                      Actionable insights without data paralysis. Focus on what drives real growth, not vanity metrics.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 border-orange-500/20 bg-orange-950/10">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-orange-400" />
                    </div>
                    <h3 className="font-magistral text-xl font-medium">Creative Strategy</h3>
                    <p className="text-muted-foreground">
                      High-impact creative concepts that cut through the noise and resonate with your unique audience.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 border-purple-500/20 bg-purple-950/10">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Star className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="font-magistral text-xl font-medium">Creative Production</h3>
                    <p className="text-muted-foreground">
                      Lean, effective creative production focused on performance over aesthetics.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 border-red-500/20 bg-red-950/10">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-red-400" />
                    </div>
                    <h3 className="font-magistral text-xl font-medium">Copywriting</h3>
                    <p className="text-muted-foreground">
                      Conversion-focused copy that speaks directly to your startup&apos;s unique value proposition.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 border-teal-500/20 bg-teal-950/10">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-teal-400" />
                    </div>
                    <h3 className="font-magistral text-xl font-medium">Conversion Optimization</h3>
                    <p className="text-muted-foreground">
                      Systematic testing and optimization to maximize your conversion rates and ROI.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="space-y-4 max-w-3xl text-center">
                <h2 className="font-magistral text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Build Your Growth Lab?
                </h2>
                <p className="text-muted-foreground text-lg">
                  This isn&apos;t for everyone. We work with startups ready to take the entrepreneurial approach to
                  growth. Apply below to see if we&apos;re aligned.
                </p>
              </div>

              <Card className="w-full max-w-2xl p-8">
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input id="company" placeholder="Your startup name" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="stage" className="text-sm font-medium">
                      What stage is your startup?
                    </label>
                    <Input id="stage" placeholder="e.g., Pre-seed, Seed, Series A" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="revenue" className="text-sm font-medium">
                      Current monthly revenue
                    </label>
                    <Input id="revenue" placeholder="e.g., $10K, $50K, $100K+" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="challenge" className="text-sm font-medium">
                      What&apos;s your biggest growth challenge right now?
                    </label>
                    <Textarea
                      id="challenge"
                      placeholder="Tell us about your current situation and what you're trying to solve..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Monthly advertising budget
                    </label>
                    <Input id="budget" placeholder="e.g., $5K, $10K, $25K+" />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We&apos;ll review your application and get back to you within 48 hours if there&apos;s a potential
                    fit.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Libra Growth Labs" width={150} height={30} className="h-6 w-auto" />
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Libra Growth Labs. Built for entrepreneurs, by an entrepreneur.
          </p>
        </div>
      </footer>
    </div>
  )
}