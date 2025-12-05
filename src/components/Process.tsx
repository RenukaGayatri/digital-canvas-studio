import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Palette, Code2, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery Call',
    description: 'We start with an in-depth conversation to understand your goals, challenges, and vision.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description: 'Our team crafts a tailored strategy combining marketing and development solutions.',
  },
  {
    icon: Palette,
    title: 'Design & Prototype',
    description: 'We create stunning designs and interactive prototypes for your approval.',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Our developers bring the design to life with clean, performant code.',
  },
  {
    icon: Rocket,
    title: 'Launch & Optimize',
    description: 'We launch your project and continuously optimize for maximum performance.',
  },
  {
    icon: HeartHandshake,
    title: 'Ongoing Support',
    description: 'We provide dedicated support and maintenance to ensure lasting success.',
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results, every single time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-primary text-primary text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
