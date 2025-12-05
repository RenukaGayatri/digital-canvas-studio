import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Palette, Code2, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery Call',
    description: 'We start with an in-depth conversation to understand your goals, challenges, and vision.',
    gradient: 'from-primary to-amber',
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description: 'Our team crafts a tailored strategy combining marketing and development solutions.',
    gradient: 'from-amber to-accent',
  },
  {
    icon: Palette,
    title: 'Design & Prototype',
    description: 'We create stunning designs and interactive prototypes for your approval.',
    gradient: 'from-accent to-rose',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Our developers bring the design to life with clean, performant code.',
    gradient: 'from-rose to-violet',
  },
  {
    icon: Rocket,
    title: 'Launch & Optimize',
    description: 'We launch your project and continuously optimize for maximum performance.',
    gradient: 'from-violet to-primary',
  },
  {
    icon: HeartHandshake,
    title: 'Ongoing Support',
    description: 'We provide dedicated support and maintenance to ensure lasting success.',
    gradient: 'from-primary to-accent',
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full glass-card text-sm text-primary font-semibold tracking-wider uppercase mb-6 border border-primary/20">
            How We Work
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A streamlined approach to delivering exceptional results, every single time
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="glass-card-hover rounded-3xl p-8 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-background border-2 border-border flex items-center justify-center">
                    <span className={`text-lg font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent font-display`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 font-display">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};