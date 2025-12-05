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
  Rocket
} from 'lucide-react';

const marketingServices = [
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Dominate search rankings with data-driven SEO strategies that drive organic traffic and conversions.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build engaged communities and amplify your brand across all major social platforms.',
  },
  {
    icon: Youtube,
    title: 'YouTube Growth & Analysis',
    description: 'Optimize your YouTube presence with strategic content planning and analytics-backed growth.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Maximize ROI with targeted paid campaigns across Google, Meta, and more.',
  },
];

const devServices = [
  {
    icon: Code,
    title: 'Custom Coded Websites',
    description: 'Pixel-perfect, high-performance websites built with modern technologies like React and Next.js.',
  },
  {
    icon: Blocks,
    title: 'WordPress Development',
    description: 'Powerful, scalable WordPress solutions from blogs to enterprise e-commerce platforms.',
  },
  {
    icon: Figma,
    title: 'Framer & No-Code Sites',
    description: 'Stunning Framer and Webflow sites that combine design excellence with rapid delivery.',
  },
  {
    icon: RefreshCw,
    title: 'Website Revamps',
    description: 'Transform outdated websites into modern, conversion-focused digital experiences.',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: 'Keep your site secure, fast, and up-to-date with our comprehensive maintenance plans.',
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'Speed up your website for better user experience and higher search rankings.',
  },
];

const ServiceCard = ({ service, index }: { service: typeof marketingServices[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <service.icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
  </motion.div>
);

export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(190_95%_55%/0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete suite of digital solutions to elevate your brand and accelerate growth
          </p>
        </motion.div>

        {/* Digital Marketing */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-8 flex items-center gap-3"
          >
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            Digital Marketing
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Web Development */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-8 flex items-center gap-3"
          >
            <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            Web Development
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
