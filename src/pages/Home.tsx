import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingCard from "@/components/FloatingCard";
import GlowButton from "@/components/GlowButton";
import { Video, Globe, Palette, Star, ArrowRight } from "lucide-react";
import portfolioImage from "@/assets/portfolio-showcase.jpg";

const Home = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "High-performance video editing for creators, brands & businesses. Reels, YouTube edits, branded clips that captivate.",
      features: ["YouTube Edits", "Instagram Reels", "Branded Content"]
    },
    {
      icon: Globe,
      title: "Website Development", 
      description: "Responsive, fast, stylish websites that convert visitors into customers with pixel-perfect design.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
    },
    {
      icon: Palette,
      title: "Creative Content",
      description: "Branded visual content design — thumbnails, reels, posters, and more that make your brand unforgettable.",
      features: ["Thumbnails", "Social Posts", "Brand Identity"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      content: "Malick took my video content to a completely new level. His editing style is incredible!",
      rating: 5
    },
    {
      name: "David Chen", 
      role: "Startup Founder",
      content: "His designs made my brand feel alive. Professional, fast, and exactly what I needed.",
      rating: 5
    },
    {
      name: "Maya Patel",
      role: "Influencer",
      content: "Trusted, fast, professional. Malick understands what works on social media.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Here's what I can do for you:
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I help creators, startups, and entrepreneurs stand out online through fast, scroll-stopping, and emotionally resonant digital visuals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FloatingCard key={service.title} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-primary">• {feature}</li>
                    ))}
                  </ul>
                  <GlowButton size="sm" className="w-full group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </GlowButton>
                </CardContent>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Work That <span className="gradient-text">Wins</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every project is built with strategy + soul. I combine technical skills + emotional storytelling to create action-triggering content.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full" />
                  </div>
                  <span>Agency-level quality with one-on-one attention</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full" />
                  </div>
                  <span>Human psychology (color, motion, layout) driven</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full" />
                  </div>
                  <span>Focus on speed, visual clarity, and wow-factor</span>
                </div>
              </div>
              <GlowButton href="/portfolio" size="lg">
                View Full Portfolio
              </GlowButton>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <img 
                  src={portfolioImage} 
                  alt="Portfolio Showcase" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What People Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take my word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FloatingCard key={testimonial.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's create something <span className="gradient-text">epic</span> together
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to transform your ideas into scroll-stopping content that converts?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton href="/contact" size="lg">
              Start Your Project
            </GlowButton>
            <GlowButton variant="accent" href="/portfolio" size="lg">
              See My Work First
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;