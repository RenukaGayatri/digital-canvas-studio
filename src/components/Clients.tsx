import { motion } from 'framer-motion';

const clients = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Spotify', 'Airbnb',
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Spotify', 'Airbnb',
];

export const Clients = () => {
  return (
    <section className="py-16 relative overflow-hidden border-y border-border/30">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-10 uppercase tracking-widest"
        >
          Trusted by industry leaders
        </motion.p>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex gap-16 marquee">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors font-display"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};