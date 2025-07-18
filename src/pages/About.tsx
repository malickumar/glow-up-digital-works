import FloatingCard from "@/components/FloatingCard";
import GlowButton from "@/components/GlowButton";
import { CheckCircle, Heart, Zap, Target, Award, Users } from "lucide-react";
import portraitImage from "@/assets/malick-portrait.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Strategy + Soul",
      description: "Every project combines data-driven strategy with emotional storytelling that connects"
    },
    {
      icon: Zap,
      title: "Speed & Quality",
      description: "Fast turnaround without compromising on the premium quality you deserve"
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "I don't just create content—I create content that converts and drives action"
    }
  ];

  const skills = [
    { name: "Video Editing", level: 95 },
    { name: "Web Development", level: 90 },
    { name: "Creative Design", level: 88 },
    { name: "Brand Strategy", level: 85 },
    { name: "Motion Graphics", level: 82 },
    { name: "UI/UX Design", level: 80 }
  ];

  const milestones = [
    {
      icon: Users,
      number: "100+",
      label: "Projects Delivered",
      description: "Across video editing, web development, and creative design"
    },
    {
      icon: Award,
      number: "3+",
      label: "Years Experience",
      description: "Building digital experiences that matter"
    },
    {
      icon: CheckCircle,
      number: "50+",
      label: "Happy Clients",
      description: "From individual creators to growing businesses"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                I'm <span className="gradient-text">Malick</span>,<br />
                and I love making things that matter.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I started with nothing but a phone, curiosity, and big ideas. Now I work with brands, 
                influencers, and creators to make the internet a more beautiful place — one frame at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlowButton href="/contact" size="lg">
                  Let's Work Together
                </GlowButton>
                <GlowButton variant="accent" href="/portfolio" size="lg">
                  See My Work
                </GlowButton>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20 animate-glow-pulse">
                  <img 
                    src={portraitImage}
                    alt="Malick Umar"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements around portrait */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="space-y-8">
            <FloatingCard className="animate-slide-up">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2021</div>
                  <div className="text-sm text-muted-foreground">The Beginning</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground">
                    Started with basic phone editing, learning from YouTube tutorials and practicing 
                    every day. My first paid project was a ₹500 Instagram reel that took me 8 hours to edit.
                  </p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2022</div>
                  <div className="text-sm text-muted-foreground">The Growth</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground">
                    Expanded into web development and design. Built my first website for a local business. 
                    Started understanding the psychology behind what makes content click.
                  </p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2024</div>
                  <div className="text-sm text-muted-foreground">The Vision</div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground">
                    Now I work with creators, startups, and businesses across India. Every project 
                    is built with strategy + soul, combining technical excellence with emotional impact.
                  </p>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Makes Me <span className="gradient-text">Different</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike other freelancers, I don't just deliver work — I deliver results that feel premium, personal, and powerful.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <FloatingCard key={value.title} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Skills & <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                I use human psychology (color, motion, layout) to create action-triggering content 
                that focuses on speed, visual clarity, brand alignment, and wow-factor.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Technical skills + emotional storytelling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Agency-level quality with personal attention</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Psychology-driven design principles</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trust <span className="gradient-text">Indicators</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <FloatingCard key={milestone.label} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <milestone.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{milestone.number}</div>
                <div className="text-lg font-semibold mb-2">{milestone.label}</div>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
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
            Ready to transform your vision into scroll-stopping content that converts?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton href="/contact" size="lg">
              Start a Project
            </GlowButton>
            <GlowButton variant="accent" href="/services" size="lg">
              View My Services
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;