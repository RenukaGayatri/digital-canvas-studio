import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import workShowcase from '@/assets/work-showcase.jpg';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'WordPress + SEO',
    description: 'Full e-commerce solution with 200% organic traffic increase in 6 months.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    stats: ['+200% Traffic', '+150% Sales'],
    gradient: 'from-primary to-amber',
  },
  {
    title: 'SaaS Landing Page',
    category: 'Custom Development',
    description: 'High-converting landing page built with React and optimized for performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    stats: ['98 Performance', '3.2s Load'],
    gradient: 'from-accent to-violet',
  },
  {
    title: 'Restaurant Chain',
    category: 'Social Media + Framer',
    description: 'Complete digital presence overhaul with social media management.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop',
    stats: ['+500K Followers', '+80% Engagement'],
    gradient: 'from-rose to-accent',
  },
  {
    title: 'Tech Startup',
    category: 'Full Stack + Marketing',
    description: 'End-to-end development and marketing for a Series A startup.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    stats: ['$2M Raised', '10K Users'],
    gradient: 'from-violet to-primary',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-background opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/10 rounded-full blur-[250px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full glass-card text-sm text-primary font-semibold tracking-wider uppercase mb-6 border border-primary/20">
            Our Work
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real results for real businesses. Here's a glimpse of what we've achieved.
          </p>
        </motion.div>

        {/* Featured Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="glass-card rounded-4xl overflow-hidden p-2">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={workShowcase}
                alt="Featured Work"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-primary mb-4">
                  Featured Project
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-display">Award-Winning Design</h3>
                <p className="text-muted-foreground text-lg">Crafting digital experiences that stand out</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.15)]">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <span className={`px-4 py-2 rounded-full glass-card text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border border-border/50`}>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Hover Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-5 right-5 w-12 h-12 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Stats */}
                  <div className="flex gap-3 flex-wrap">
                    {project.stats.map((stat, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 rounded-xl bg-gradient-to-r ${project.gradient} text-sm font-bold text-primary-foreground shadow-lg`}
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="glass" size="lg">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};