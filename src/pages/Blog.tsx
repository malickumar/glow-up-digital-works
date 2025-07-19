import { useState } from "react";
import FloatingCard from "@/components/FloatingCard";
import GlowButton from "@/components/GlowButton";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen, Zap, TrendingUp } from "lucide-react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "tips", name: "Creative Tips" },
    { id: "industry", name: "Industry Insights" },
    { id: "tutorials", name: "Tutorials" }
  ];

  // Demo blog posts - in real implementation, these would come from admin panel
  const blogPosts = [
    {
      id: 1,
      title: "10 Psychology Tricks That Make Your Videos Go Viral",
      excerpt: "Discover the hidden psychological triggers that make viewers stop scrolling and start engaging with your content.",
      category: "tips",
      readTime: "5 min read",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Web Design: 3D Elements and Micro-Interactions",
      excerpt: "How modern websites are using 3D elements and subtle animations to create immersive user experiences.",
      category: "industry",
      readTime: "7 min read",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Complete Guide to YouTube Thumbnail Design",
      excerpt: "Step-by-step process to create click-worthy thumbnails that increase your video's click-through rate by 300%.",
      category: "tutorials",
      readTime: "12 min read",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop"
    },
    {
      id: 4,
      title: "Color Psychology in Brand Design: What Your Colors Say",
      excerpt: "Understanding how different colors trigger specific emotions and how to use this in your brand strategy.",
      category: "tips",
      readTime: "6 min read",
      date: "2024-01-02",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=800&h=500&fit=crop"
    },
    {
      id: 5,
      title: "Instagram Reels Algorithm: What Really Works in 2024",
      excerpt: "Latest insights on how the Instagram algorithm works and proven strategies to boost your reach.",
      category: "industry",
      readTime: "8 min read",
      date: "2023-12-28",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop"
    },
    {
      id: 6,
      title: "Building Websites That Convert: UX Design Principles",
      excerpt: "Essential UX principles that turn website visitors into customers. Real examples and actionable tips.",
      category: "tutorials",
      readTime: "10 min read",
      date: "2023-12-25",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    }
  ];

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Creative <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Behind-the-scenes tips, industry insights, and creative strategies that help you grow your digital presence.
          </p>
          
          {/* Blog Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center gap-2 text-primary">
              <BookOpen className="h-5 w-5" />
              <span>50+ Articles</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Zap className="h-5 w-5" />
              <span>Weekly Updates</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-5 w-5" />
              <span>10K+ Readers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
            </div>
            
            <FloatingCard className="overflow-hidden animate-slide-up">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {categories.find(cat => cat.id === featuredPost.category)?.name}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                    <p className="text-muted-foreground text-lg">{featuredPost.excerpt}</p>
                    
                    <GlowButton className="mt-6">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </GlowButton>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
            </FloatingCard>
          </div>
        </section>
      )}

      {/* Filter Buttons */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id ? "btn-glow text-black" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <FloatingCard 
                key={post.id} 
                className="group overflow-hidden animate-slide-up hover:shadow-lg transition-shadow" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-full">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                  
                  <Button variant="outline" className="w-full group mt-4">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Never Miss an <span className="gradient-text">Update</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Get weekly creative tips, industry insights, and behind-the-scenes content straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground"
            />
            <GlowButton>
              Subscribe Now
            </GlowButton>
          </div>
        </div>
      </section>

      {/* Work Together CTA */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something <span className="gradient-text">Amazing</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let's turn your ideas into scroll-stopping content that converts
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

export default Blog;