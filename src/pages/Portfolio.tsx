import { useState } from "react";
import FloatingCard from "@/components/FloatingCard";
import GlowButton from "@/components/GlowButton";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Eye, Star, Quote } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "video", name: "Video Editing" },
    { id: "web", name: "Websites" },
    { id: "design", name: "Creative Design" }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Tech Startup Rebrand",
      category: "video",
      description: "Complete video marketing suite for a growing tech startup",
      image: "/api/placeholder/600/400",
      tags: ["Video Editing", "Motion Graphics", "Branding"],
      link: "#",
      type: "video"
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "web", 
      description: "Modern, conversion-focused online store",
      image: "/api/placeholder/600/400",
      tags: ["React", "E-commerce", "Mobile-First"],
      link: "#",
      type: "website"
    },
    {
      id: 3,
      title: "YouTube Thumbnail Series",
      category: "design",
      description: "Click-worthy thumbnails that increased CTR by 45%",
      image: "/api/placeholder/600/400",
      tags: ["Thumbnails", "YouTube", "Social Media"],
      link: "#",
      type: "design"
    },
    {
      id: 4,
      title: "Instagram Reel Campaign",
      category: "video",
      description: "Viral Instagram reels for a lifestyle brand",
      image: "/api/placeholder/600/400",
      tags: ["Instagram", "Reels", "Social Media"],
      link: "#",
      type: "video"
    },
    {
      id: 5,
      title: "SaaS Landing Page",
      category: "web",
      description: "High-converting landing page for B2B SaaS",
      image: "/api/placeholder/600/400",
      tags: ["Landing Page", "SaaS", "Conversion"],
      link: "#",
      type: "website"
    },
    {
      id: 6,
      title: "Brand Identity Package",
      category: "design",
      description: "Complete visual identity for a creative agency",
      image: "/api/placeholder/600/400",
      tags: ["Branding", "Logo Design", "Identity"],
      link: "#",
      type: "design"
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Startup Founder",
      content: "Malick's video editing transformed our marketing. We saw a 300% increase in engagement within the first month.",
      rating: 5,
      project: "Tech Startup Rebrand"
    },
    {
      name: "Sarah Wilson",
      role: "YouTuber (100K+ subs)",
      content: "His thumbnails are pure magic. My click-through rate went from 3% to 12% overnight. Game changer!",
      rating: 5,
      project: "YouTube Thumbnail Series"
    },
    {
      name: "Mike Rodriguez",
      role: "E-commerce Owner",
      content: "The website Malick built for us converts 3x better than our old one. ROI was instant.",
      rating: 5,
      project: "E-commerce Website"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Work That <span className="gradient-text">Wins</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Real projects, real results. See how I've helped creators, startups, and brands transform their digital presence.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Repeat Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={activeFilter === category.id ? "btn-glow text-black" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <FloatingCard 
                key={item.id} 
                className="group overflow-hidden animate-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      {item.type === "video" && (
                        <Button size="icon" className="btn-glow text-black">
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                      <Button size="icon" className="btn-accent-glow">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    <Eye className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Transformation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See the dramatic difference professional design makes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg border border-red-500/20">
                <h3 className="text-lg font-bold text-red-400 mb-3">Before: DIY Content</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Low engagement rates (2-3%)</li>
                  <li>• Poor click-through rates</li>
                  <li>• Inconsistent branding</li>
                  <li>• Amateur visual quality</li>
                  <li>• Limited audience growth</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-primary/20">
                <h3 className="text-lg font-bold text-primary mb-3">After: Professional Design</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High engagement rates (8-15%)</li>
                  <li>• 3x better click-through rates</li>
                  <li>• Cohesive brand identity</li>
                  <li>• Premium visual quality</li>
                  <li>• Rapid audience growth</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <FloatingCard>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">300%</div>
                  <div className="text-muted-foreground">Average Engagement Increase</div>
                </div>
              </FloatingCard>
              <FloatingCard>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">45%</div>
                  <div className="text-muted-foreground">CTR Improvement</div>
                </div>
              </FloatingCard>
              <FloatingCard>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">60%</div>
                  <div className="text-muted-foreground">Conversion Rate Boost</div>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real clients
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FloatingCard key={testimonial.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-primary/30" />
                  
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary mt-1">Project: {testimonial.project}</div>
                  </div>
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
            Ready for your <span className="gradient-text">transformation</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let's create content that gets noticed, remembered, and shared
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton href="/contact" size="lg">
              Start Your Project
            </GlowButton>
            <GlowButton variant="accent" href="/services" size="lg">
              View Services & Pricing
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;