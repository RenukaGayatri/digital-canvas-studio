import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Globe, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroAbstract from '@/assets/hero-abstract.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Abstract Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroAbstract} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>
      
      {/* Mesh Background */}
      <div className="absolute inset-0 mesh-background" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[130px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 15, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[15%] hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl border border-primary/20">
          <Zap className="w-8 h-8 text-primary" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [15, -10, 15], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-48 left-[10%] hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl border border-accent/20">
          <Globe className="w-8 h-8 text-accent" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-20, 10, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-[8%] hidden lg:block"
      >
        <div className="glass-card p-4 rounded-2xl border border-amber/20">
          <TrendingUp className="w-8 h-8 text-amber" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card text-sm font-medium text-foreground/80 mb-8 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              Digital Agency That Delivers Results
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 font-display tracking-tight"
          >
            We Build
            <br />
            <span className="gradient-text">Brands That</span>
            <br />
            <span className="gradient-text">Dominate</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
          >
            Strategic digital marketing meets exceptional web development. 
            We transform your vision into a powerful online presence that 
            attracts, engages, and converts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Button variant="hero" size="xl">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="xl">
              <Play className="w-5 h-5" />
              See Our Work
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { number: '150+', label: 'Projects Delivered', gradient: 'from-primary to-amber' },
              { number: '50+', label: 'Happy Clients', gradient: 'from-accent to-rose' },
              { number: '5+', label: 'Years Experience', gradient: 'from-violet to-accent' },
              { number: '99%', label: 'Client Satisfaction', gradient: 'from-amber to-primary' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-3xl p-6 md:p-8 text-center border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 font-display`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};