/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Server,
  Cpu,
  Wrench,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Download,
  Printer,
  ExternalLink,
  Menu,
  X,
  CheckCircle,
  Briefcase,
  Layers,
  Award,
  ChevronRight,
  Send,
  Sparkles,
  Users,
  Code,
  Radio,
  FileText
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'ict' | 'health' | 'embedded' | 'maker';
  categoryLabel: string;
  artStyle: string;
  description: string;
  extendedDetails: string;
  tags: string[];
  metrics?: string;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState<'all' | 'ict' | 'health' | 'embedded' | 'maker'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 'mims',
      title: 'Member Information Management System',
      category: 'ict',
      categoryLabel: 'ICT & Systems',
      artStyle: 'from-sky-950 via-sky-900 to-cyan-600',
      description: 'Designed and deployed a robust system for member registration, automated ID card generation, and operational reporting for makerspace administration.',
      extendedDetails: 'Engineered a full-stack database application to streamline onboarding for over 1,200 makerspace members. Features include automated barcode/QR ID generation, equipment access logging, and usage analytics dashboards that reduced administrative processing time by 75%.',
      tags: ['Information Systems', 'Database Architecture', 'Automation', 'Python/JS'],
      metrics: '1,200+ Active Users'
    },
    {
      id: 'mavid',
      title: 'MAVID Maternal Vital Signs Monitoring',
      category: 'health',
      categoryLabel: 'Health Tech',
      artStyle: 'from-cyan-950 via-teal-900 to-sky-600',
      description: 'Contributed to a low-cost wearable health technology concept for maternal vital-sign monitoring, involving embedded systems and wireless telemetry.',
      extendedDetails: 'Collaborated with multidisciplinary biomedical teams to prototype affordable wearable sensors for continuous maternal monitoring in low-resource clinical settings. Integrated ESP32 microcontrollers, pulse oximetry, and Bluetooth Low Energy (BLE) transmission.',
      tags: ['Embedded Systems', 'ESP32', 'Bluetooth', 'Biomedical Engineering'],
      metrics: 'Low-cost clinical prototype'
    },
    {
      id: 'uvc',
      title: 'UV-C Disinfection Unit',
      category: 'health',
      categoryLabel: 'Health Tech',
      artStyle: 'from-sky-900 via-cyan-900 to-blue-900',
      description: 'Contributed to development and validation activities for a UV-C disinfection unit deployed at Muhimbili National Hospital during the COVID-19 response.',
      extendedDetails: 'Involved in hardware fabrication, safety interlock engineering, and rigorous dosimetry validation for localized hospital sterilization systems during the pandemic response.',
      tags: ['Health Technology', 'Safety Engineering', 'Technical Documentation'],
      metrics: 'Deployed at Muhimbili National Hospital'
    },
    {
      id: 'prototypes',
      title: 'Student Engineering Prototypes',
      category: 'maker',
      categoryLabel: 'Innovation & Mentorship',
      artStyle: 'from-blue-950 via-sky-900 to-cyan-700',
      description: 'Mentored student teams through product ideation, CAD modeling, electronics assembly, fabrication, and iterative prototype testing.',
      extendedDetails: 'Guided 110+ student innovation projects from conceptual sketches to functional hardware demos, fostering practical design thinking, rapid prototyping, and IP documentation.',
      tags: ['Mentorship', 'CAD / CAM', 'Rapid Prototyping', 'Design Thinking'],
      metrics: '110+ Projects Guided'
    },
    {
      id: 'ict-training',
      title: 'ICT Training & Digital Skills',
      category: 'ict',
      categoryLabel: 'ICT Education',
      artStyle: 'from-sky-950 via-slate-900 to-cyan-800',
      description: 'Supported ICT learning programmes for students and educators, combining digital literacy with hands-on computer laboratory maintenance.',
      extendedDetails: 'Delivered structured ICT training using Intel Learn Modules and Cisco IT Essentials materials across vocational and community education centers with World Vision Tanzania.',
      tags: ['ICT Education', 'Cisco IT Essentials', 'Field Training'],
      metrics: 'Community Impact'
    },
    {
      id: 'makerspace',
      title: 'Digital Fabrication & Makerspace Operations',
      category: 'maker',
      categoryLabel: 'Fabrication',
      artStyle: 'from-cyan-950 via-sky-950 to-blue-900',
      description: 'Managed advanced digital fabrication machinery including 3D printers, laser cutters, CNC routers, and electronics workstations.',
      extendedDetails: 'Ensured 99.8% uptime for high-precision workshop equipment, implemented preventive maintenance schedules, and trained community members on safe machine operation and CAD workflows.',
      tags: ['3D Printing', 'Laser Cutting', 'CNC', 'Workshop Safety'],
      metrics: '99.8% Equipment Uptime'
    }
  ];

  const filteredProjects = activeProjectFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeProjectFilter);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio enquiry from ' + formData.name);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:ngushwaijoel@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-sky-900/40 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center font-black text-slate-950 shadow-lg shadow-sky-500/30 group-hover:scale-105 transition-transform">
              JN
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-lg block text-white">JOEL NGUSHWAI</span>
              <span className="text-xs text-cyan-400 font-semibold tracking-wide">ICT & Computer Engineer</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 hover:from-sky-400 hover:to-cyan-300 transition-all font-bold shadow-lg shadow-cyan-500/20">
              Get in Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-sky-900/40 px-6 py-5 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium">Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium">Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium">Projects</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold">
              Get in Touch
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-slate-950 via-sky-950/40 to-slate-900 text-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> ICT • Engineering • Information Security
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                Technology that solves <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">real problems.</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
                I’m Joel Ngushwai, an ICT professional and Computer Engineer working across IT support, network infrastructure, information security, engineering systems, and technology innovation.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#projects" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold hover:from-sky-400 hover:to-cyan-300 transition-all shadow-xl shadow-cyan-500/25 flex items-center gap-2">
                  Explore my work <ChevronRight className="w-4 h-4 text-slate-950" />
                </a>
                <a href="/public/assets/aistudio/Joel_Ngushwai_CV.pdf" download className="px-7 py-3.5 rounded-full bg-slate-900 border border-sky-500/30 text-sky-200 font-semibold hover:bg-slate-800 transition-all flex items-center gap-2">
                  <Download className="w-4 h-4 text-cyan-400" /> Download CV
                </a>
                <button onClick={() => window.print()} className="px-5 py-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-semibold transition-all flex items-center gap-2" title="Print Portfolio">
                  <Printer className="w-4 h-4 text-sky-400" /> Print
                </button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400 border-t border-sky-900/30 pt-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" /> Based in Dar es Salaam, Tanzania
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span> Open to professional opportunities
                </div>
              </div>
            </div>

            {/* Hero Profile Photo Card */}
            <div className="lg:col-span-5 reveal">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-400 opacity-30 blur-xl"></div>
                <div className="relative rounded-3xl bg-slate-900/90 border border-sky-500/30 p-6 shadow-2xl backdrop-blur-xl">
                  
                  {/* Real Photo Embed */}
                  <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/5] bg-slate-950 border border-sky-900/50 group">
                    <img 
                      src="/public/assets/aistudio/DSC_2019_f7b38549.jpg" 
                      alt="Joel Ngushwai Professional Portrait" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 text-xs font-black backdrop-blur-md shadow-lg">
                        Joel Ngushwai, BEng, MSc
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3.5 rounded-2xl bg-sky-950/30 border border-sky-500/20">
                      <span className="block text-2xl font-black text-cyan-400">6+</span>
                      <span className="text-xs text-slate-400 font-medium">Years Experience</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-sky-950/30 border border-sky-500/20">
                      <span className="block text-2xl font-black text-sky-400">110+</span>
                      <span className="text-xs text-slate-400 font-medium">Projects Mentored</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 border-y border-sky-900/40 py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="reveal">
              <span className="block text-3xl md:text-4xl font-black text-cyan-400 mb-1">1,200+</span>
              <span className="text-sm text-slate-400 font-medium">Makerspace Community Served</span>
            </div>
            <div className="reveal">
              <span className="block text-3xl md:text-4xl font-black text-sky-400 mb-1">110+</span>
              <span className="text-sm text-slate-400 font-medium">Student Projects Guided</span>
            </div>
            <div className="reveal">
              <span className="block text-3xl md:text-4xl font-black text-cyan-400 mb-1">6+ Years</span>
              <span className="text-sm text-slate-400 font-medium">Professional Practice</span>
            </div>
            <div className="reveal">
              <span className="block text-3xl md:text-4xl font-black text-sky-400 mb-1">MSc & BEng</span>
              <span className="text-sm text-slate-400 font-medium">Engineering & Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 reveal">
            <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-xs">About me</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-2 mb-4">Connecting IT systems, engineering, and people.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              I combine practical ICT support and infrastructure experience with hands-on engineering, technical training, and innovation programme coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-slate-900 border border-sky-900/40 rounded-3xl p-8 shadow-xl reveal flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                  <Briefcase className="w-5 h-5 text-cyan-400" /> Professional Profile
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  I currently coordinate operations at the DIT Design Studio, supporting a university makerspace where learners and innovators develop practical solutions. My work includes technical equipment operations, ICT systems, member information management, training, project mentorship, and stakeholder collaboration.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Previously, I supported ICT training and equipment maintenance with World Vision Tanzania. These experiences have helped me work across technical, educational, and field-based environments.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  My academic background includes Computer Engineering and Information Security, alongside ongoing postgraduate study in Biomedical Engineering and Medical Device Innovation.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-sky-900/30 flex flex-wrap gap-4">
                <a href="mailto:ngushwaijoel@gmail.com" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:underline">
                  <Mail className="w-4 h-4" /> ngushwaijoel@gmail.com
                </a>
                <a href="tel:+255718894449" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:underline">
                  <Phone className="w-4 h-4" /> +255 718 894 449
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 border border-sky-900/40 rounded-3xl p-8 shadow-xl reveal">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                <Layers className="w-5 h-5 text-sky-400" /> Core Focus Areas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'IT Support & Operations',
                  'Networks & Infrastructure',
                  'Information Security',
                  'Systems & Databases',
                  'Embedded Systems',
                  'Digital Fabrication',
                  'Technical Training',
                  'Project Coordination'
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/20 text-slate-200 text-sm font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 reveal">
            <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-xs">Technical capabilities</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-2 mb-4">Skills built through practical work.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              A broad technical foundation spanning end-user support, infrastructure, software, information security, and engineering prototyping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Server className="w-6 h-6 text-sky-400" />,
                title: 'IT Support & Systems',
                desc: 'Computer setup, hardware and software troubleshooting, operating systems, user support, equipment maintenance, and technical documentation.',
                tags: ['Windows', 'Ubuntu basics', 'Help desk', 'Preventive maintenance']
              },
              {
                icon: <Radio className="w-6 h-6 text-cyan-400" />,
                title: 'Networking',
                desc: 'Network installation and troubleshooting, connectivity diagnostics, wired and wireless networks, and network equipment configuration.',
                tags: ['LAN/WAN', 'TCP/IP', 'Cisco routers & switches', 'Wi-Fi']
              },
              {
                icon: <Shield className="w-6 h-6 text-sky-400" />,
                title: 'Information Security',
                desc: 'Data protection, access management, backup procedures, security policy implementation, and information systems risk awareness.',
                tags: ['Access control', 'Backup & recovery', 'Data protection']
              },
              {
                icon: <Code className="w-6 h-6 text-cyan-400" />,
                title: 'Software & Information Systems',
                desc: 'Programming and database-backed applications for registration, information management, and reporting workflows.',
                tags: ['Python', 'JavaScript', 'C/C++', 'Databases']
              },
              {
                icon: <Cpu className="w-6 h-6 text-sky-400" />,
                title: 'Embedded Systems & Electronics',
                desc: 'Microcontroller programming, electronics prototyping, sensor integration, and wireless communication for practical devices.',
                tags: ['Arduino', 'ESP32', 'Bluetooth', 'XBee']
              },
              {
                icon: <Wrench className="w-6 h-6 text-cyan-400" />,
                title: 'Engineering & Fabrication',
                desc: 'Product development and prototyping using digital design, fabrication tools, and practical workshop processes.',
                tags: ['CAD/CAM', '3D printing', 'Laser cutting', 'PCB design']
              }
            ].map((skill, idx) => (
              <div key={idx} className="bg-slate-900 border border-sky-900/40 rounded-3xl p-7 shadow-xl hover:border-cyan-500/40 transition-all reveal flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center mb-5 shadow-inner">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{skill.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-sky-900/30">
                  {skill.tags.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-sky-950/50 border border-sky-500/20 text-sky-200 text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 reveal">
            <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-xs">Professional experience</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-2 mb-4">Experience across ICT, education, and innovation.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Selected responsibilities and contributions from my professional journey.
            </p>
          </div>

          <div className="relative pl-6 md:pl-10 border-l-2 border-sky-500/30 space-y-12 max-w-4xl">
            {[
              {
                role: 'Design Studio Coordinator',
                org: 'DIT Design Studio / Rice 360 Institute for Global Health',
                period: 'Apr 2022 – Present',
                bullets: [
                  'Coordinate daily operations of a university makerspace serving a community of 1,200+ members.',
                  'Oversee technical equipment, maintenance, procurement coordination, and practical training activities.',
                  'Manage a member information system supporting registration, ID card generation, and reporting.',
                  'Mentor student innovators and coordinate more than 110 student projects from concept development toward functional prototypes.',
                  'Support innovation programmes, partnerships, stakeholder engagement, and technical workshops.'
                ]
              },
              {
                role: 'Engineer I – Technical Operations & Engineering Support',
                org: 'DIT Design Studio',
                period: 'Sep 2020 – Mar 2022',
                bullets: [
                  'Supported computer and engineering equipment installation, maintenance, and troubleshooting.',
                  'Delivered practical instruction in CAD, 3D printing, laser cutting, robotics, and Arduino programming.',
                  'Assisted users with prototyping, fabrication, equipment operation, and technical problem-solving.',
                  'Supported workshop preparation, preventive maintenance, and safe laboratory operations.'
                ]
              },
              {
                role: 'Assistant ICT Project Officer',
                org: 'World Vision Tanzania',
                period: 'Apr 2018 – Mar 2019',
                bullets: [
                  'Supported ICT training, computer laboratory operations, and equipment maintenance in vocational and educational settings.',
                  'Delivered learning activities using Intel Learn Modules, multimedia resources, and Cisco IT Essentials materials.',
                  'Assisted with school-based student enterprise groups, project documentation, and progress reporting.',
                  'Worked with instructors, project teams, and community stakeholders across field locations.'
                ]
              }
            ].map((exp, idx) => (
              <div key={idx} className="relative reveal">
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                <div className="bg-slate-900 border border-sky-900/40 rounded-3xl p-8 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="text-cyan-400 font-semibold text-sm">{exp.org}</div>
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-200 text-xs font-bold w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-slate-300 text-sm">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
            <div>
              <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-xs">Selected projects</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-2 mb-3">Practical technology with a purpose.</h2>
              <p className="text-slate-400 max-w-xl">
                Examples of ICT systems, engineering development, and technology-enabled problem-solving. Click any project for full details.
              </p>
            </div>

            {/* Project Filters */}
            <div className="flex flex-wrap gap-2 bg-slate-900 p-1.5 rounded-2xl border border-sky-900/40">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'ict', label: 'ICT & Systems' },
                { id: 'health', label: 'Health Tech' },
                { id: 'embedded', label: 'Embedded/IoT' },
                { id: 'maker', label: 'Fabrication' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProjectFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeProjectFilter === tab.id
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="bg-slate-900 border border-sky-900/40 rounded-3xl overflow-hidden shadow-xl hover:border-cyan-400/50 transition-all cursor-pointer group reveal flex flex-col justify-between"
              >
                <div>
                  <div className={`h-40 p-6 bg-gradient-to-br ${proj.artStyle} flex items-end relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="relative z-10">
                      <span className="px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md text-cyan-300 border border-cyan-400/30 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                        {proj.categoryLabel}
                      </span>
                      <h3 className="text-lg font-black text-white leading-snug">{proj.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">{proj.description}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2 border-t border-sky-900/30 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 2).map((t, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md bg-sky-950/50 text-sky-300 text-xs font-medium border border-sky-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-cyan-400 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Details <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 mt-8 text-center">
            For projects involving health technologies, this portfolio describes development contributions and does not imply regulatory approval or clinical validation unless specifically documented.
          </p>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-sky-500/40 rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              {selectedProject.categoryLabel}
            </span>
            <h3 className="text-2xl font-black text-white mb-4">{selectedProject.title}</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6">{selectedProject.extendedDetails}</p>
            {selectedProject.metrics && (
              <div className="p-4 rounded-2xl bg-sky-950/40 border border-sky-500/30 mb-6 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Key Outcome: {selectedProject.metrics}</span>
              </div>
            )}
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tags.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-sky-950/50 border border-sky-500/20 text-sky-200 text-xs font-semibold">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold hover:from-sky-400 hover:to-cyan-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Education & Certifications */}
      <section id="education" className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 reveal">
            <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-xs">Education & development</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-2 mb-4">Engineering foundations. Security expertise. Continuous learning.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                degree: 'MSc Biomedical Engineering – Medical Device Innovation',
                school: 'Kenyatta University, Kenya',
                period: 'In progress, expected 2027',
                mark: 'MSc'
              },
              {
                degree: 'MSc Information Security',
                school: 'Institute of Accountancy Arusha, Tanzania',
                period: '2024 · GPA 3.7',
                mark: 'MSc'
              },
              {
                degree: 'Bachelor of Engineering in Computer Engineering',
                school: 'Dar es Salaam Institute of Technology',
                period: '2021 · GPA 3.4/5.0',
                mark: 'BEng'
              },
              {
                degree: 'Diploma in Computer Science',
                school: 'Ruaha Catholic University',
                period: '2015 · GPA 3.0',
                mark: 'Dip'
              }
            ].map((edu, idx) => (
              <div key={idx} className="bg-slate-900 border border-sky-900/40 rounded-3xl p-7 shadow-xl flex gap-5 items-start reveal">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-cyan-400 font-black flex items-center justify-center shrink-0">
                  {edu.mark}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-cyan-400 text-sm font-semibold mb-1">{edu.school}</p>
                  <p className="text-slate-400 text-xs">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" /> Certifications & Professional Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Certificate in Global Health Technology – Rice 360, 2022',
                'Trainer of Trainers (ToT) Pedagogical Certification',
                'Intellectual Property, Trademarks & Patent Filing Workshop',
                'Modern Teaching Methodologies Workshop – Rice 360',
                'Rice 360 Engineering Internship – Malawi, 2019',
                'Professional development in networking and information security'
              ].map((cert, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-sky-900/40 text-slate-300 text-sm font-semibold flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-sky-950/40 to-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16 reveal">
            <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-xs">Contact</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-2 mb-4">Let’s discuss an opportunity or project.</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              For ICT roles, engineering collaborations, technical training, and technology innovation opportunities, you can reach me using the details below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 bg-slate-900/80 border border-sky-900/40 rounded-3xl p-8 shadow-xl backdrop-blur-xl reveal flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-sky-900/30">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">Email</span>
                    <a href="mailto:ngushwaijoel@gmail.com" className="text-white font-bold hover:text-cyan-400 transition-colors">ngushwaijoel@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-6 border-b border-sky-900/30">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">Phone</span>
                    <a href="tel:+255718894449" className="text-white font-bold hover:text-cyan-400 transition-colors">+255 718 894 449</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">Location</span>
                    <span className="text-white font-bold">Dar es Salaam, Tanzania</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-sky-900/30">
                <p className="text-xs text-slate-400">LinkedIn and professional profile connections available upon direct enquiry.</p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-900/80 border border-sky-900/40 rounded-3xl p-8 shadow-xl backdrop-blur-xl reveal">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-sky-900/40 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-sky-900/40 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your opportunity or enquiry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-sky-900/40 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Prepare Email Message
                </button>

                <p className="text-xs text-slate-400 text-center">
                  This form prepares an email in your default mail client to <span className="text-cyan-400">ngushwaijoel@gmail.com</span>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-sky-900/40 py-8 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Joel Ngushwai. Professional Portfolio.</span>
          <span className="text-xs">ICT • Computer Engineering • Information Security • Innovation</span>
        </div>
      </footer>
    </div>
  );
}
