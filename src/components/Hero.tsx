import { ArrowDown, Play, Eye } from "lucide-react";
import GlowButton from "./GlowButton";
import heroImage from "@/assets/hero-creative.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Creative Digital Work" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="block text-foreground">I Design Content</span>
          <span className="block gradient-text text-glow">That Connects.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-slide-up max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
          Video, Web & Creative Design that feels built just for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <GlowButton size="lg" className="group" href="/portfolio">
            <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            See My Work
          </GlowButton>
          
          <GlowButton variant="accent" size="lg" className="group" href="/contact">
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Hire Me Now
          </GlowButton>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">100+</div>
            <div className="text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;