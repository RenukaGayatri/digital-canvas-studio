import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Digital Marketing Expert',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'SEO specialist, social media strategist, and YouTube growth expert with 5+ years of experience driving measurable results for brands.',
    skills: ['SEO', 'Social Media', 'YouTube', 'PPC', 'Analytics'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'marketing@nexadigital.com',
    },
  },
  {
    name: 'Web Development Expert',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Full-stack developer specializing in WordPress, Framer, and custom coded solutions. Passionate about creating fast, beautiful websites.',
    skills: ['React', 'WordPress', 'Framer', 'TypeScript', 'UI/UX'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'dev@nexadigital.com',
    },
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            The Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dynamic duo combining marketing expertise with technical excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden gradient-border p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-medium text-primary-foreground">
                    {member.role}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{member.bio}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-secondary text-xs font-medium text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:text-primary transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
