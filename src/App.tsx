import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Github, Linkedin, Mail, Code, Coffee, Rocket, Star, Trophy, Wheat, Brain, } from 'lucide-react';

import { FaWhatsapp } from 'react-icons/fa';



function App() {
  const { scrollY } = useScroll();
  
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const heroY = useTransform(scrollY, [0, 300], [0, 100]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [achievementsRef, achievementsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const handleDownload = () => {
    // Logique pour télécharger le CV
    window.open('/cv.pdf', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        id="hero"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              background: [
                "linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                "linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0"
          ></motion.div>
        </div>
        <div className="text-center relative z-10">
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Mohamed Maiga
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8"
          >
            Développeur Full Stack Créatif
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center gap-4 mb-8"
          >
            <motion.a 
              href="https://github.com/Moxd2rr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>

            <motion.a 
              href="https://wa.me/+22391040392"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <FaWhatsapp className="w-6 h-6" />
           

            </motion.a>
            <motion.a 

              href="mailto:mohamedmag543@gmail.com"
           
          
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
          <motion.button 
            onClick={handleDownload}
            whileHover={{ scale: 1.05, backgroundColor: "rgb(37, 99, 235)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.7, 
              duration: 0.8,
              backgroundColor: { duration: 0.2 }
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-blue-500/20"
          >
            <Download className="w-5 h-5" href='cv.pdf'/>
            Télécharger CV
          </motion.button>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
        id="about"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">À Propos de Moi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-300">
                Passionné par le développement web depuis plus de 3 ans, je crée des expériences numériques uniques qui allient design moderne et performance.
              </p>
              <p className="text-gray-300">
                Spécialisé dans les technologies JavaScript modernes, j'aime relever des défis techniques et transformer des idées créatives en solutions concrètes.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span>3+ ans d'expérience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-blue-400" />
                  <span>10+ projets</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Mes Intérêts</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span>Recherche</span>
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-purple-400" />
                  <span>Innovation Web</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span>Sécurité</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
        id="skills"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/5 rounded-lg p-6 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Front-end</h3>
            <div className="space-y-3">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400 bg-blue-200/20">
                      React
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-400">
                      60%
                    </span>
                  </div>
                </div>
                <motion.div 
                  className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200/20"
                  initial={{ width: 0 }}
                  animate={skillsInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: "60%" } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></motion.div>
                </motion.div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-400 bg-purple-200/20">
                      HTML-CSS
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-purple-400">
                      85%
                    </span>
                  </div>
                </div>
                <motion.div 
                  className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200/20"
                  initial={{ width: 0 }}
                  animate={skillsInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: "85%" } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  ></motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/5 rounded-lg p-6 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Back-end</h3>
            <div className="space-y-3">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-400 bg-green-200/20">
                      php
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-400">
                      88%
                    </span>
                  </div>
                </div>
                <motion.div 
                  className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200/20"
                  initial={{ width: 0 }}
                  animate={skillsInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: "88%" } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></motion.div>
                </motion.div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-400 bg-red-200/20">
                      Python
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-red-400">
                      50%
                    </span>
                  </div>
                </div>
                <motion.div 
                  className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200/20"
                  initial={{ width: 0 }}
                  animate={skillsInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: "50%" } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/5 rounded-lg p-6 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">Deploiement</h3>
            <div className="space-y-3">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-400 bg-yellow-200/20">
                      Vercel
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-yellow-400">
                      45%
                    </span>
                  </div>
                </div>
                <motion.div 
                  className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200/20"
                  initial={{ width: 0 }}
                  animate={skillsInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: "45%" } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                  ></motion.div>
                </motion.div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-400 bg-cyan-200/20">
                      Netlify
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-cyan-400">
                      55%
                    </span>
                  </div>
                </div>
                <motion.div 
                  className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-cyan-200/20"
                  initial={{ width: 0 }}
                  animate={skillsInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: "55%" } : {}}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"
                  ></motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
        id="projects"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.a 
            href="https://ai-image-generator.example.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/5 rounded-lg p-6 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
            <p className="text-gray-400 mb-4">Interface de gestion de problemes rencontrés par des etudiants.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Php</span>
              <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Mysql</span>
            </div>
          </motion.a>

          <motion.a 
            href="https://ecommerce-platform.example.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/5 rounded-lg p-6 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-4">E-Commerce Platform</h3>
            <p className="text-gray-400 mb-4">Plateforme e-commerce complète avec paiement en ligne et gestion des stocks en temps réel.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Php</span>
              <span className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm">Mysql</span>
            </div>
          </motion.a>

          <motion.a 
            href="https://smart-home.example.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/5 rounded-lg p-6 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-4">Service de livraison</h3>
            <p className="text-gray-400 mb-4">Interface de commande et visualisation des livraisons en temps réel.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Map API</span>
            </div>
          </motion.a>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        ref={experienceRef}
        initial={{ opacity: 0, y: 50 }}
        animate={experienceInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
        id="experience"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Expérience</h2>
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={experienceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 relative pl-8 border-l-2 border-blue-600"
          >
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
            <h3 className="text-xl font-semibold mb-2">Lead Developer</h3>
            <p className="text-gray-400 mb-2">IAM • 2024 </p>
            <p className="text-gray-300">Leader d'une équipe de 4 développeurs sur un projets Fullstack. Mise en place de l'architecture technique et des bonnes pratiques de développement.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={experienceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 relative pl-8 border-l-2 border-blue-600"
          >
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-gray-400 mb-2">Business For You • Aout - 2024</p>
            <p className="text-gray-300"> Participation au développement de sites web et applications web. Assistance à la gestion des bases de données et au déploiement
de projets.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={experienceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 relative pl-8 border-l-2 border-blue-600"
          >
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-gray-400 mb-2">Iba Express •  2024</p>
            <p className="text-gray-300">Création d'interfaces utilisateur modernes et responsives.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        ref={achievementsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
        id="achievements"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Réalisations</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 rounded-lg p-6 text-center"
          >
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Prix </h3>
            <p className="text-gray-400">#2 Meilleur projet  2024</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 rounded-lg p-6 text-center"
          >
            <Star className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">10+ Projets</h3>
            <p className="text-gray-400">Livrés avec succès</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 rounded-lg p-6 text-center"
          >
             <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Open Source</h3>
            <p className="text-gray-400">30+ contributions</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;