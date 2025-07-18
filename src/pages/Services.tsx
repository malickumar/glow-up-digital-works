import FloatingCard from "@/components/FloatingCard";
import GlowButton from "@/components/GlowButton";
import { Video, Globe, Palette, Clock, CheckCircle, Star, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Transform raw footage into compelling stories that captivate your audience and drive engagement.",
      features: [
        "YouTube long-form content editing",
        "Instagram Reels & TikTok optimization", 
        "Branded promotional videos",
        "Podcast video editing",
        "Motion graphics & animations",
        "Color grading & audio enhancement"
      ],
      benefits: "Increase watch time by 40% with professional editing",
      pricing: "Starting at ₹2,500 per video"
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Build fast, responsive, and conversion-focused websites that represent your brand perfectly.",
      features: [
        "Modern responsive design",
        "Lightning-fast loading speeds",
        "SEO optimization included",
        "Mobile-first approach",
        "Custom animations & interactions",
        "Ongoing maintenance & support"
      ],
      benefits: "Convert 60% more visitors into customers",
      pricing: "Starting at ₹15,000 per website"
    },
    {
      icon: Palette,
      title: "Creative Content Design",
      description: "Eye-catching visual content that makes your brand impossible to ignore across all platforms.",
      features: [
        "YouTube thumbnails that click",
        "Instagram story templates",
        "Social media post designs",
        "Brand identity packages",
        "Custom illustrations",
        "Print design materials"
      ],
      benefits: "Boost click-through rates by 35%",
      pricing: "Starting at ₹500 per design"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We discuss your vision, goals, and project requirements in detail."
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "I create a custom strategy tailored to your brand and audience."
    },
    {
      step: "03",
      title: "Creation & Iteration", 
      description: "I bring your vision to life with unlimited revisions until perfect."
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final files delivered with ongoing support for your success."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Services That <span className="gradient-text">Transform</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Unlike other freelancers, I don't just deliver work — I deliver results that feel premium, personal, and powerful.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle className="h-5 w-5" />
              <span>Agency-level quality</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Clock className="h-5 w-5" />
              <span>Fast turnaround</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Star className="h-5 w-5" />
              <span>100% satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FloatingCard key={service.title} className="h-full flex flex-col" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="text-sm font-semibold text-primary mb-2">Key Benefits:</div>
                    <div className="text-sm text-muted-foreground">{service.benefits}</div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold mb-3">What's Included:</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="text-lg font-bold text-primary mb-4">{service.pricing}</div>
                    <GlowButton className="w-full group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </GlowButton>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and designed for your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border" />
                  )}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="section-padding bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Malick Umar</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">get started</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let's turn your vision into reality with content that converts
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton href="/contact" size="lg">
              Start Your Project
            </GlowButton>
            <GlowButton variant="accent" href="/portfolio" size="lg">
              View My Work
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;