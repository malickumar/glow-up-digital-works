import { useState } from "react";
import FloatingCard from "@/components/FloatingCard";
import GlowButton from "@/components/GlowButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle, Clock, CheckCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@malickumar.com",
      description: "Send me a detailed message",
      action: "mailto:contact@malickumar.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 9596831195",
      description: "Quick chat for urgent projects",
      action: "https://wa.me/919596831195?text=Hi%2C%20I%20found%20your%20profile%20and%20would%20like%20to%20know%20more%20about%20your%20services"
    },
    {
      icon: Phone,
      title: "Call",
      value: "+91 9596831195",
      description: "Let's discuss your project",
      action: "tel:+919596831195"
    }
  ];

  const pricingTiers = [
    {
      title: "Starter Pack",
      price: "₹2,500 - ₹10,000",
      description: "Perfect for individual creators and small projects",
      features: [
        "Single video edit or basic website",
        "2-3 design pieces",
        "Basic revisions included",
        "48-72 hour delivery"
      ]
    },
    {
      title: "Growth Pack",
      price: "₹10,000 - ₹30,000",
      description: "Great for growing brands and multiple content needs",
      features: [
        "Multiple videos or complete website",
        "Brand identity package",
        "Unlimited revisions",
        "24-48 hour delivery",
        "Strategy consultation"
      ],
      popular: true
    },
    {
      title: "Pro Creator Pack",
      price: "₹30,000+",
      description: "For serious businesses and ongoing partnerships",
      features: [
        "Complete content strategy",
        "Monthly content packages",
        "Priority support",
        "Same-day delivery",
        "Direct communication line"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Create Something <span className="gradient-text">Epic</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Ready to transform your ideas into scroll-stopping content that converts? 
            I'm here to help you stand out in the digital world.
          </p>
          
          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center gap-2 text-primary">
              <Clock className="h-5 w-5" />
              <span>24h Response Time</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle className="h-5 w-5" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Send className="h-5 w-5" />
              <span>Free Initial Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose your preferred way to reach out
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <FloatingCard key={method.title} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-primary font-semibold mb-2">{method.value}</p>
                <p className="text-muted-foreground text-sm mb-6">{method.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={method.action} target="_blank" rel="noopener noreferrer">
                    Contact via {method.title}
                  </a>
                </Button>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Project <span className="gradient-text">Inquiry</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tell me about your project and let's make it happen
            </p>
          </div>

          <FloatingCard className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="bg-muted border-border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video-editing">Video Editing</SelectItem>
                      <SelectItem value="website">Website Development</SelectItem>
                      <SelectItem value="creative-design">Creative Design</SelectItem>
                      <SelectItem value="complete-package">Complete Package</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                      <SelectItem value="5k-15k">₹5,000 - ₹15,000</SelectItem>
                      <SelectItem value="15k-30k">₹15,000 - ₹30,000</SelectItem>
                      <SelectItem value="30k-50k">₹30,000 - ₹50,000</SelectItem>
                      <SelectItem value="50k-plus">₹50,000+</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                  rows={6}
                  required
                  className="bg-muted border-border"
                />
              </div>

              <GlowButton type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Project Inquiry
              </GlowButton>
            </form>
          </FloatingCard>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Investment <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing for every budget and project size
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <FloatingCard 
                key={tier.title} 
                className={`text-center relative animate-slide-up ${tier.popular ? 'border-primary/50' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{tier.price}</div>
                  <p className="text-muted-foreground text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={tier.popular ? "default" : "outline"}
                  className={tier.popular ? "btn-glow text-black w-full" : "w-full"}
                >
                  Choose This Package
                </Button>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <FloatingCard className="animate-slide-up">
              <h3 className="text-lg font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-muted-foreground">
                Video editing: 24-72 hours | Websites: 1-2 weeks | Design packages: 24-48 hours. 
                Rush delivery available for urgent projects.
              </p>
            </FloatingCard>

            <FloatingCard className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-bold mb-3">Do you offer revisions?</h3>
              <p className="text-muted-foreground">
                Yes! All packages include revisions. Starter packages get 2-3 rounds, 
                while Growth and Pro packages include unlimited revisions until you're 100% satisfied.
              </p>
            </FloatingCard>

            <FloatingCard className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-bold mb-3">What's your payment process?</h3>
              <p className="text-muted-foreground">
                50% upfront to start the project, 50% upon delivery. For larger projects, 
                we can arrange milestone-based payments. All major payment methods accepted.
              </p>
            </FloatingCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;