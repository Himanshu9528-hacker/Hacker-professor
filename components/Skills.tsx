import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Search, 
  Bug, 
  Terminal, 
  TrendingUp, 
  Code,
  Lock,
  Cpu,
  Globe,
  Zap
} from 'lucide-react';

const mainSkills = [
  { 
    name: 'Ethical Hacker', 
    level: 98, 
    icon: <ShieldCheck className="w-5 h-5" />, 
    color: 'from-cyan-500 to-blue-600',
    description: 'Expertise in vulnerability assessment and network penetration.'
  },
  { 
    name: 'OSINT Master', 
    level: 95, 
    icon: <Search className="w-5 h-5" />, 
    color: 'from-emerald-500 to-teal-600',
    description: 'Advanced data gathering and intelligence analysis.'
  },
  { 
    name: 'Web Pentester', 
    level: 92, 
    icon: <Globe className="w-5 h-5" />, 
    color: 'from-blue-500 to-indigo-600',
    description: 'Securing web applications and breaking complex architectures.'
  },
  { 
    name: 'Bug Bounty Hunter', 
    level: 90, 
    icon: <Bug className="w-5 h-5" />, 
    color: 'from-purple-500 to-pink-600',
    description: 'Identifying and reporting critical flaws in live systems.'
  },
  { 
    name: 'Pentesting Tester', 
    level: 94, 
    icon: <Lock className="w-5 h-5" />, 
    color: 'from-red-500 to-orange-600',
    description: 'Red teaming and specialized security testing protocols.'
  },
  { 
    name: 'Trader', 
    level: 85, 
    icon: <TrendingUp className="w-5 h-5" />, 
    color: 'from-yellow-500 to-amber-600',
    description: 'Algorithmic trading and financial market analysis.'
  },
  { 
    name: 'Software Dev', 
    level: 88, 
    icon: <Code className="w-5 h-5" />, 
    color: 'from-indigo-500 to-purple-600',
    description: 'Full-stack engineering with a focus on secure code.'
  },
];

const languages = [
  { name: 'Python', color: 'text-yellow-400' },
  { name: 'TypeScript', color: 'text-blue-400' },
  { name: 'C', color: 'text-gray-400' },
  { name: 'HTML', color: 'text-orange-400' },
  { name: 'CSS', color: 'text-blue-300' },
  { name: 'JS', color: 'text-yellow-300' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 font-mono relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-4"
            >
              <Cpu className="w-4 h-4 animate-pulse" />
              <span>System_Capabilities</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black uppercase tracking-tighter"
            >
              Skill_<span className="text-cyan-500">Matrix</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block py-2 px-4 glass border border-cyan-500/20 rounded text-[10px] text-cyan-500/60 uppercase tracking-widest"
          >
            Encryption: AES-256 | Protocol: SECURE_V2
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Skills Grid */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {mainSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}></div>
                <div className="relative glass p-6 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 text-white shadow-lg`}>
                      {skill.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-white">{skill.level}%</span>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Efficiency</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{skill.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{skill.description}</p>
                  
                  {/* Skill Bar */}
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Programming Languages Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-cyan-500/10 relative overflow-hidden"
            >
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 uppercase tracking-widest border-b border-white/5 pb-4">
                <Terminal className="w-5 h-5 text-cyan-500" />
                Lang_Vault
              </h3>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {languages.map((lang, idx) => (
                  <motion.div 
                    key={lang.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-zinc-950 border border-white/10 py-4 px-4 rounded-xl flex items-center justify-between group-hover:border-cyan-500/50 transition-all duration-300">
                      <span className={`text-sm font-black ${lang.color} tracking-tighter`}>{lang.name}</span>
                      <Zap className="w-3 h-3 text-white/10 group-hover:text-cyan-500 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-5 rounded-xl bg-black border border-cyan-500/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Status: Active</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                  Continuous integration of modern frameworks and secure development practices within these core architectures.
                </p>
              </div>
            </motion.div>

            {/* Tactical Bonus Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl shadow-2xl shadow-cyan-500/20 group cursor-default"
            >
              <h4 className="text-black font-black text-xl mb-2 uppercase tracking-tighter">Total_Threat_Mitigation</h4>
              <p className="text-black/70 text-xs font-bold mb-6 italic tracking-tight uppercase">99.98% Success Rate in Production</p>
              <div className="flex items-center gap-2">
                <div className="h-2 flex-grow bg-black/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '99%' }}
                    viewport={{ once: true }}
                    className="h-full bg-black"
                  ></motion.div>
                </div>
                <span className="text-black font-black text-xs">99%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative large text overlay */}
      <div className="absolute -bottom-24 -left-20 text-[18rem] font-black text-white/5 select-none pointer-events-none uppercase tracking-tighter">
        Elite
      </div>
    </section>
  );
};

export default Skills;
