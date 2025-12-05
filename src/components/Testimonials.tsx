import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Working with NexaDigital transformed our online presence completely. Our traffic increased by 300% in just 4 months. Absolutely phenomenal team!',
    rating: 5,
    gradient: 'from-primary to-amber',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GrowthLabs',
    content: 'The best investment we made for our startup. Their SEO expertise and web development skills are unmatched. Highly recommend their services.',
    rating: 5,
    gradient: 'from-accent to-rose',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, Retail Co.',
    content: 'From strategy to execution, they delivered beyond our expectations. Our e-commerce sales doubled within the first quarter of working together.',
    rating: 5,
    gradient: 'from-violet to-primary',
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full glass-card text-sm text-primary font-semibold tracking-wider uppercase mb-6 border border-primary/20">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Hear from the businesses we've helped grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card-hover rounded-3xl p-8 h-full relative">
                {/* Quote Icon */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-6 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber fill-amber" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground/90 leading-relaxed mb-8 text-lg">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-primary-foreground font-bold font-display`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground font-display">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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