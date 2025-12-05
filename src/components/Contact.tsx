import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@nexadigital.com',
    link: 'mailto:hello@nexadigital.com',
    gradient: 'from-primary to-amber',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    gradient: 'from-accent to-rose',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: 'Remote - Worldwide',
    link: '#',
    gradient: 'from-violet to-primary',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: 'Mon - Fri, 9AM - 6PM',
    link: '#',
    gradient: 'from-amber to-accent',
  },
];

const benefits = [
  'Transparent communication throughout every project',
  'Results-driven approach with measurable outcomes',
  'Integrated marketing and development solutions',
  'Dedicated support and ongoing optimization',
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-background opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full glass-card text-sm text-primary font-semibold tracking-wider uppercase mb-6 border border-primary/20">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            Let's Start Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your digital presence? We'd love to hear about your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-4xl p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Service Interested In
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="seo">SEO Services</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="youtube">YouTube Growth</option>
                  <option value="wordpress">WordPress Development</option>
                  <option value="custom">Custom Website</option>
                  <option value="framer">Framer / No-Code Site</option>
                  <option value="revamp">Website Revamp</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="full">Full Package (Marketing + Web)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Project Details
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Send Message
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Why Work With Us */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-display">
                Why Work With Us?
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="glass-card rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 block group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.details}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};