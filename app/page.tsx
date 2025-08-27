"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Heart,
  Users,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Fan as Fax,
  MessageCircle,
  Video,
  BookOpen,
  Shield,
  Headphones,
  Search,
  Settings,
  Lock,
  Star,
  DollarSign,
  Server,
  Scale,
  Briefcase,
  Calendar,
  Play,
} from "lucide-react"

export default function HomePage() {
  const [showComingSoon, setShowComingSoon] = useState(false)

  const handleComingSoon = () => {
    setShowComingSoon(true)
    setTimeout(() => setShowComingSoon(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      {showComingSoon && (
        <div className="fixed top-4 right-4 z-50 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg animate-in slide-in-from-right">
          Coming Soon! We're working hard to bring you Christ Everywhere.
        </div>
      )}

      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christ%20Everywhere%20Transparent%20Logo-cvTUnzIqlJvSG4nKMXiWyoCYCPAW4L.png"
                alt="Christ Everywhere Logo"
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-foreground">Christ Everywhere</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
                Support Us
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <Button onClick={handleComingSoon} size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christ%20Everywhere%20Transparent%20Logo-cvTUnzIqlJvSG4nKMXiWyoCYCPAW4L.png"
                alt="Christ Everywhere Logo"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Where Faith Meets
              <span className="text-primary block">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              "For where two or three gather in my name, there am I with them."
            </p>
            <p className="text-sm text-muted-foreground mb-8 italic">— Matthew 18:20 (ESV)</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Christ Everywhere is a secure, faith-centered platform that brings believers together across workplaces,
              churches, schools, families, and friend groups. Build meaningful connections, share prayers, study
              together, and grow in faith—all in one unified, safe space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleComingSoon} size="lg" className="bg-primary hover:bg-primary/90">
                Join the Community
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button onClick={handleComingSoon} size="lg" variant="outline">
                Watch Demo
                <Play className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Christ Everywhere</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Christ Everywhere is dedicated to building the world's leading digital ecosystem for Christian
                community. We believe that Christ's love knows no boundaries, and technology should serve to strengthen,
                not fragment, our faith communities.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our platform addresses the critical gap in the digital faith-tech space by providing a single, unified
                solution that is context-flexible, faith-centered, and safe for Christians across all walks of life.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">250K+</div>
                  <div className="text-sm text-muted-foreground">Target Active Users</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-secondary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Partner Organizations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <img
                  src="/diverse-group-of-people-praying-together-in-a-circ.png"
                  alt="Diverse group of people praying together in community"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Platform Section */}
      {/* <section id="platform" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Christ Everywhere Platform</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive Christian community platform that seamlessly serves diverse private communities:
              workplaces, churches, schools, families, and friend groups with intelligent safety and engagement
              features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Faith-Centered & Safe</CardTitle>
                <CardDescription>
                  Built on a clear Statement of Faith with intelligent content moderation to create trusted, encouraging
                  environments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Context-Flexible</CardTitle>
                <CardDescription>
                  Seamlessly serves workplaces, churches, schools, families, and friend groups in one unified platform
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Community-Driven</CardTitle>
                <CardDescription>
                  Intelligent features for content moderation, personalized feeds, and community insights while
                  maintaining human oversight and biblical values
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Platform Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Multi-Tenant</div>
                <div className="text-sm text-muted-foreground">Secure group isolation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-2">Real-Time</div>
                <div className="text-sm text-muted-foreground">Live chat & video calls</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">Mobile-First</div>
                <div className="text-sm text-muted-foreground">iOS, Android & Web</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">WCAG AA</div>
                <div className="text-sm text-muted-foreground">Fully accessible</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything your faith community needs in one integrated platform
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Platform Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Core Community Features */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-primary" />
                    <CardTitle>Prayer Wall</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Dedicated space for prayer requests with privacy controls and community support
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Anonymous posting option</li>
                    <li>• Prayer tracking</li>
                    <li>• Update notifications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-secondary" />
                    <CardTitle>Group Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Flexible group creation and management with role-based permissions
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Role-based access</li>
                    <li>• Group discovery</li>
                    <li>• Invitation management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-accent" />
                    <CardTitle>Social Feed</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Share updates, encouragement, and life moments with your faith community
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Text and image posts</li>
                    <li>• Comments and reactions</li>
                    <li>• Content moderation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <CardTitle>Bible Integration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Multiple Bible translations with verse sharing and contextual study tools
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Multiple translations</li>
                    <li>• Verse sharing</li>
                    <li>• Study resources</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Settings className="w-6 h-6 text-secondary" />
                    <CardTitle>Admin Dashboard</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive admin tools for moderation, analytics, and community management
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Content moderation</li>
                    <li>• User management</li>
                    <li>• Analytics & insights</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lock className="w-6 h-6 text-accent" />
                    <CardTitle>Security & Privacy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Enterprise-grade security with data isolation and compliance features
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Multi-tenant isolation</li>
                    <li>• End-to-end encryption</li>
                    <li>• GDPR compliance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Enhanced Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <CardTitle>Real-Time Chat</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Instant messaging with delivery receipts, reactions, and intelligent safety moderation
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 1:1 and group messaging</li>
                    <li>• File sharing & media</li>
                    <li>• Message reactions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-secondary" />
                    <CardTitle>Event Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Create and manage group events, Bible studies, and gatherings with RSVP tracking
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Event scheduling</li>
                    <li>• RSVP management</li>
                    <li>• Calendar integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Play className="w-6 h-6 text-accent" />
                    <CardTitle>Bible Learning Videos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Curated video content for Bible study, devotionals, and spiritual growth
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Study series</li>
                    <li>• Devotional content</li>
                    <li>• Discussion guides</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Search className="w-6 h-6 text-primary" />
                    <CardTitle>Intelligent Search</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Smart search across messages, prayers, and content with semantic understanding
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Semantic search</li>
                    <li>• Content filtering</li>
                    <li>• Quick suggestions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Future Scope</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="opacity-75">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Video className="w-6 h-6 text-secondary" />
                    <CardTitle>Video Meetings</CardTitle>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Coming Soon</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    HD video calls with live captions, recording, and automated summaries
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Screen sharing</li>
                    <li>• Meeting transcripts</li>
                    <li>• Automated action items</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="opacity-75">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Headphones className="w-6 h-6 text-accent" />
                    <CardTitle>Voice & Video Notes</CardTitle>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Coming Soon</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Quick audio and video messages with automatic transcription and accessibility features
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Auto-transcription</li>
                    <li>• Playback speed control</li>
                    <li>• Searchable content</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith Section */}
      <section id="faith" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Statement of Faith</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Christ Everywhere is built on a foundation of orthodox Christian beliefs that guide our mission and
              community standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  The Scriptures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  We believe the Holy Bible is the inspired, infallible, and authoritative Word of God.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  "All Scripture is breathed out by God..." - 2 Timothy 3:16
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-secondary" />
                  The Trinity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  "...baptizing them in the name of the Father and of the Son and of the Holy Spirit." - Matthew 28:19
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent" />
                  Jesus Christ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  We believe Jesus Christ is fully God and fully man, our Savior and Lord.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  "For there is one God, and there is one mediator..." - 1 Timothy 2:5
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  The Holy Spirit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  We believe the Holy Spirit convicts, regenerates, and empowers believers for godly living.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  "But the Helper, the Holy Spirit..." - John 14:26
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-secondary" />
                  Salvation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  We believe salvation is by grace through faith in Jesus Christ alone.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  "For by grace you have been saved through faith..." - Ephesians 2:8
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  The Church
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  We believe the Church is the body of Christ, composed of all true believers.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  "Now you are the body of Christ..." - 1 Corinthians 12:27
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                  Read Full Statement of Faith
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Statement of Faith</DialogTitle>
                  <DialogDescription>
                    Our foundational beliefs that guide Christ Everywhere's mission and community standards.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 text-sm">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. The Scriptures</h3>
                    <p className="text-muted-foreground mb-2">
                      We believe that the Holy Bible, consisting of the 66 books of the Old and New Testaments, is the
                      inspired, infallible, and authoritative Word of God. It is the supreme source of truth for
                      Christian beliefs and living.
                    </p>
                    <p className="text-xs italic text-muted-foreground">
                      "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction,
                      and for training in righteousness." — 2 Timothy 3:16 (ESV)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. The Trinity</h3>
                    <p className="text-muted-foreground mb-2">
                      We believe in one God, eternally existing in three persons: the Father, the Son, and the Holy
                      Spirit. These three are co-equal and co-eternal, each possessing all the attributes of deity.
                    </p>
                    <p className="text-xs italic text-muted-foreground">
                      "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of
                      the Son and of the Holy Spirit." — Matthew 28:19 (ESV)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. God the Father</h3>
                    <p className="text-muted-foreground mb-2">
                      We believe that God the Father is the Creator and Sustainer of all things. He is sovereign, holy,
                      loving, and just. He is the Father of our Lord Jesus Christ and of all who believe in Him.
                    </p>
                    <p className="text-xs italic text-muted-foreground">
                      "Yet for us there is one God, the Father, from whom are all things and for whom we exist." — 1
                      Corinthians 8:6a (ESV)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4. Jesus Christ</h3>
                    <p className="text-muted-foreground mb-2">
                      We believe that Jesus Christ is the eternal Son of God, fully God and fully man. He was conceived
                      by the Holy Spirit, born of the Virgin Mary, lived a sinless life, died on the cross as a
                      substitutionary sacrifice for our sins, rose bodily from the dead, ascended into heaven, and will
                      return in glory to judge the living and the dead.
                    </p>
                    <p className="text-xs italic text-muted-foreground">
                      "For there is one God, and there is one mediator between God and men, the man Christ Jesus." — 1
                      Timothy 2:5 (ESV)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5. The Holy Spirit</h3>
                    <p className="text-muted-foreground mb-2">
                      We believe that the Holy Spirit is the third person of the Trinity, who convicts the world of sin,
                      regenerates believers, and indwells, guides, equips, and empowers them for godly living and
                      service.
                    </p>
                    <p className="text-xs italic text-muted-foreground">
                      "But the Helper, the Holy Spirit, whom the Father will send in my name, he will teach you all
                      things and bring to your remembrance all that I have said to you." — John 14:26 (ESV)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">6. The Nature of Humanity and Sin</h3>
                    <p className="text-muted-foreground mb-2">
                      We believe that humanity was created in the image of God, but through Adam's disobedience, sin
                      entered the world, resulting in both physical and spiritual death. This original sin has corrupted
                      human nature, rendering all people inherently sinful and separated from God.
                    </p>
                    <p className="text-xs italic text-muted-foreground">
                      "Therefore, just as sin came into the world through one man, and death through sin, and so death
                      spread to all men because all sinned." — Romans 5:12 (ESV)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7. Salvation</h3>
                    <p className="text-muted-foreground mb-2">
                      We believe that salvation is a gift of God's grace, received through faith in Jesus Christ alone.
                      It is not earned by human effort but is granted by God's mercy to those who repent and believe.
                      Through Christ's atoning death and resurrection, believers are justified, adopted into God's
                      family, and granted eternal life.
                    </p>
                    <p className="text-xs italic text-muted-foreground">
                      "For by grace you have been saved through faith. And this is not your own doing; it is the gift of
                      God." — Ephesians 2:8 (ESV)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">8. The Church</h3>
                    <p className="text-muted-foreground mb-2">
                      We believe that the Church is the body of Christ, composed of all true believers. It exists to
                      glorify God, edify believers, and evangelize the world. The local church is a community of
                      believers who gather for worship, teaching, fellowship, and service.
                    </p>
                    <p className="text-xs italic text-muted-foreground">
                      "Now you are the body of Christ and individually members of it." — 1 Corinthians 12:27 (ESV)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9. Ordinances</h3>
                    <p className="text-muted-foreground mb-2">
                      We believe that the Lord Jesus Christ instituted two ordinances for the Church: baptism and the
                      Lord's Supper. Baptism is an outward testimony of an inward transformation, symbolizing the
                      believer's identification with Christ's death, burial, and resurrection. The Lord's Supper is a
                      commemoration of Christ's death and a celebration of the believer's communion with Him and with
                      other believers.
                    </p>
                    <p className="text-xs italic text-muted-foreground">
                      "Do this in remembrance of me." — Luke 22:19b (ESV)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10. The Return of Christ</h3>
                    <p className="text-muted-foreground mb-2">
                      We believe in the personal, visible, and imminent return of Jesus Christ. His return will bring
                      about the final judgment, the eternal state of believers in heaven, and unbelievers in hell.
                    </p>
                    <p className="text-xs italic text-muted-foreground">
                      "Behold, I am coming soon, bringing my recompense with me, to repay each one for what he has
                      done." — Revelation 22:12 (ESV)
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">11. Christian Living</h3>
                    <p className="text-muted-foreground mb-2">
                      We believe that every believer is called to live a life of holiness, empowered by the Holy Spirit.
                      This includes regular prayer, study of the Scriptures, fellowship with other believers, and active
                      participation in the mission of the Church.
                    </p>
                    <p className="text-xs italic text-muted-foreground">
                      "I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living
                      sacrifice, holy and acceptable to God, which is your spiritual worship." — Romans 12:1 (ESV)
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section id="support" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Support Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Help us build and maintain a safe, thriving digital ecosystem for Christian communities worldwide. Your
              support enables us to continue serving believers across all walks of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Why We Need Your Support</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Infrastructure & Hosting</h4>
                    <p className="text-muted-foreground text-sm">
                      Maintaining secure, scalable cloud infrastructure to serve hundreds of thousands of users with
                      enterprise-grade reliability and performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Development & Maintenance</h4>
                    <p className="text-muted-foreground text-sm">
                      Supporting our dedicated team of developers, designers, and community managers who work tirelessly
                      to improve and maintain the platform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Legal & Compliance</h4>
                    <p className="text-muted-foreground text-sm">
                      Ensuring we meet all privacy regulations, accessibility standards, and legal requirements to
                      protect our users and maintain trust.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Safety & Moderation</h4>
                    <p className="text-muted-foreground text-sm">
                      Investing in advanced content moderation tools and human oversight to maintain a safe, encouraging
                      environment aligned with Christian values.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Make a Difference Today</h3>
                <p className="text-muted-foreground text-sm">
                  Every donation, no matter the size, helps us continue building a platform where believers can connect,
                  grow, and support one another in faith.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Monthly server costs</span>
                  <span className="font-semibold text-foreground">$2,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Development team</span>
                  <span className="font-semibold text-foreground">$8,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Legal & compliance</span>
                  <span className="font-semibold text-foreground">$1,200</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Monthly goal</span>
                    <span className="font-bold text-primary text-lg">$11,700</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() =>
                  window.open("https://www.zeffy.com/en-US/donation-form/donate-to-support-us-2", "_blank")
                }
              >
                <DollarSign className="mr-2 w-5 h-5" />
                Support Christ Everywhere
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Secure donation processing through Zeffy. Your generosity helps us serve believers worldwide.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Other Ways to Support</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Spread the Word</h4>
                <p className="text-sm text-muted-foreground">
                  Share Christ Everywhere with your church, workplace, or family to help grow our community.
                </p>
              </div>
              <div>
                <Heart className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Pray for Us</h4>
                <p className="text-sm text-muted-foreground">
                  Lift up our team and mission in prayer as we work to serve the global Christian community.
                </p>
              </div>
              <div>
                <Star className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Provide Feedback</h4>
                <p className="text-sm text-muted-foreground">
                  Help us improve by sharing your ideas, reporting issues, and participating in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to join our mission or learn more about Christ Everywhere? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>contact@christeverywhere.org</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Phone</CardTitle>
                <CardDescription>469-238-2555</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Fax className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Fax</CardTitle>
                <CardDescription>469-906-8253</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Mailing Address</CardTitle>
                <CardDescription>
                  1910 Pacific Ave
                  <br />
                  Suite 2000 - 1817
                  <br />
                  Dallas, TX 75201
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-12">
            <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of believers already building stronger faith communities with Christ Everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleComingSoon} size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Community
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button onClick={handleComingSoon} size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christ%20Everywhere%20Transparent%20Logo-cvTUnzIqlJvSG4nKMXiWyoCYCPAW4L.png"
                  alt="Christ Everywhere Logo"
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">Christ Everywhere</span>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Building the world's leading digital ecosystem for Christian community.
              </p>
              <p className="text-primary-foreground/60 text-xs">© 2025 Christ Everywhere. All rights reserved.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#platform" className="hover:text-primary-foreground transition-colors">
                    Christ Everywhere App
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-primary-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#about" className="hover:text-primary-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#faith" className="hover:text-primary-foreground transition-colors">
                    Statement of Faith
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:text-primary-foreground transition-colors">
                    Support Us
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-primary-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-primary-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>contact@christeverywhere.org</li>
                <li>469-238-2555</li>
                <li className="font-medium">Mailing Address:</li>
                <li>1910 Pacific Ave, Suite 2000-1817</li>
                <li>Dallas, TX 75201</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
