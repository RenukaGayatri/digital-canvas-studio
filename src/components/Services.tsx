import { motion } from 'framer-motion';
import { 
  Search, 
  Share2, 
  Youtube, 
  TrendingUp, 
  Code, 
  Figma, 
  Blocks, 
  RefreshCw,
  Wrench,
  Rocket,
  ArrowUpRight
} from 'lucide-react';
import marketingVisual from '@/assets/marketing-visual.jpg';

const marketingServices = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Dominate search rankings with data-driven SEO strategies that drive organic traffic.',
    gradient: 'from-primary to-amber',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build engaged communities and amplify your brand across all major platforms.',
    gradient: 'from-accent to-rose',
  },
  {
    icon: Youtube,
    title: 'YouTube Growth & Analysis',
    description: 'Optimize your YouTube presence with strategic content planning and analytics.',
    gradient: 'from-rose to-primary',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Maximize ROI with targeted paid campaigns across Google, Meta, and more.',
    gradient: 'from-violet to-accent',
  },
];

const devServices = [
  {
    icon: Code,
    title: 'Custom Coded Websites',
    description: 'Pixel-perfect, high-performance websites built with React and Next.js.',
    gradient: 'from-primary to-violet',
  },
  {
    icon: Blocks,
    title: 'WordPress Development',
    description: 'Powerful, scalable WordPress solutions from blogs to enterprise e-commerce.',
    gradient: 'from-amber to-primary',
  },
  {
    icon: Figma,
    title: 'Framer & No-Code Sites',
    description: 'Stunning Framer and Webflow sites combining design excellence with speed.',
    gradient: 'from-accent to-violet',
  },
  {
    icon: RefreshCw,
    title: 'Website Revamps',
    description: 'Transform outdated websites into modern, conversion-focused experiences.',
    gradient: 'from-rose to-amber',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: 'Keep your site secure, fast, and up-to-date with comprehensive care.',
    gradient: 'from-violet to-primary',
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'Speed up your website for better UX and higher search rankings.',
    gradient: 'from-primary to-accent',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-background opacity-50" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[250px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full glass-card text-sm text-primary font-semibold tracking-wider uppercase mb-6 border border-primary/20">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A complete suite of digital solutions to elevate your brand and accelerate growth
          </p>
        </motion.div>

        {/* Digital Marketing Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                <h3 className="text-2xl md:text-3xl font-bold font-display">Digital Marketing</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-8">
                We help brands cut through the noise with strategic marketing campaigns that drive real results.
              </p>
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={marketingVisual}
                  alt="Digital Marketing Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {marketingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass-card-hover rounded-2xl p-6 h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 font-display">{service.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Web Development Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-violet rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold font-display">Web Development</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card-hover rounded-3xl p-8 h-full shine-effect">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 font-display flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};