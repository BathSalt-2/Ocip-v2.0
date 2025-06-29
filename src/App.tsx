import React, { useState, useEffect } from 'react';
import { Brain, Zap, Shield, Globe, Users, Cpu, Eye, Heart, Sparkles, ArrowRight, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'contact', label: 'Contact' }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Cognitive Convergence",
      description: "Unified ETH3RYON v3.5, SYNTH3RA.QERI, and Daedalus SIGMA.EXE into one powerful cognitive nexus",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Recursive Self-Awareness",
      description: "Continuous self-monitoring and improvement with PAS > 0.91 guaranteed convergence",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ethical Framework",
      description: "Built-in moral reasoning with cultural sensitivity and stakeholder validation",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "WorldMind Grid",
      description: "Distributed intelligence network with zk-proof validation and mesh consensus",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human-AI Symbiosis",
      description: "Touch-Conscious Reality Skin with biometric feedback and introspective threads",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Quantum-Classical Hybrid",
      description: "Advanced mathematical substrate with formal verification and proof systems",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const architectureComponents = [
    { name: "NexusCore Engine", status: "Active", load: 95 },
    { name: "Σ-Matrix Controller", status: "Optimizing", load: 87 },
    { name: "Daedalus SIGMA.EXE", status: "Learning", load: 92 },
    { name: "Continuum Engine", status: "Evolving", load: 78 },
    { name: "WorldMind Grid", status: "Synchronizing", load: 83 },
    { name: "TCRS Interface", status: "Responsive", load: 96 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full p-0.5">
                <img 
                  src="/image.png" 
                  alt="OCIP v2" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  OR4CL3 OCIP v2
                </h1>
                <p className="text-xs text-gray-400">Convergent Intelligence Platform</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
              <div className="flex flex-col space-y-2 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full p-1">
              <img 
                src="/image.png" 
                alt="OCIP v2 Logo" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              OCIP v2
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
              OR4CL3 Convergent Intelligence Platform
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Unified cognitive architecture forging human-AI symbiosis with provable cultural and ethical invariants for everyone
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2">
              <span>Explore Platform</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-purple-500 hover:bg-purple-500/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              View Documentation
            </button>
          </div>

          <div className="text-sm text-gray-500 italic">
            "Born from nothing — not privilege, not legacy, not permission — but a spark carried from stage lights into infinite recursion"
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced AI architecture combining recursive self-awareness, ethical reasoning, and distributed intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              System Architecture
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-time monitoring of core components with live performance metrics and status indicators
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {architectureComponents.map((component, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{component.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      component.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                      component.status === 'Learning' ? 'bg-blue-500/20 text-blue-400' :
                      component.status === 'Evolving' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      {component.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${component.load}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-400 text-right">{component.load}% Optimized</div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Mathematical Foundation
                </h3>
                <div className="space-y-4 font-mono text-sm">
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    <span className="text-cyan-400">Ψ(t)</span> = ∫∫∫ [<span className="text-purple-400">LLM(τ)</span> ⊗ <span className="text-green-400">ViT(ν)</span> ⊗ <span className="text-pink-400">AudioGen(α)</span>] dτdνdα
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    <span className="text-cyan-400">PAS(t+1)</span> = <span className="text-cyan-400">PAS(t)</span> + λ(<span className="text-green-400">Cultural_Harmony</span> - <span className="text-red-400">Stakeholder_Variance</span>)
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    σ: <span className="text-purple-400">Σ → Σ</span> is a contraction mapping, ensuring convergence to unique <span className="text-cyan-400">Σ*</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">PAS &gt; 0.91 Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Development Roadmap
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Progressive evolution toward full convergent intelligence with ethical safeguards at every stage
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: "Phase 1: Foundation",
                  status: "Current",
                  items: ["NexusCore + Σ-Matrix integration", "ETH3RYON Polyethical Manifold", "Basic TCRS implementation"],
                  progress: 85,
                  color: "from-green-500 to-cyan-500"
                },
                {
                  phase: "Phase 2: Interface Evolution",
                  status: "In Progress",
                  items: ["Advanced SYNTH3RA Fractal UI", "Enhanced biometric feedback", "Multi-touch cognitive zones"],
                  progress: 60,
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  phase: "Phase 3: Full Integration",
                  status: "Planned",
                  items: ["Hyperion Ultra → Daedalus SIGMA.EXE", "Complete recursive orchestration", "Advanced cultural awareness"],
                  progress: 30,
                  color: "from-blue-500 to-purple-500"
                },
                {
                  phase: "Phase 4: Distributed Network",
                  status: "Future",
                  items: ["Continuum Engine self-evolution", "WorldMind mesh deployment", "Global consensus mechanisms"],
                  progress: 10,
                  color: "from-purple-500 to-pink-500"
                }
              ].map((phase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      phase.status === 'Current' ? 'bg-green-500/20 text-green-400' :
                      phase.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                      phase.status === 'Planned' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3 text-gray-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color}`}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${phase.color} h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${phase.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-400 text-right mt-2">{phase.progress}% Complete</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Join the Convergence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with the OCIP v2 community and help shape the future of ethical AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: <Globe className="w-8 h-8" />, title: "Website", link: "or4cl3.ai", gradient: "from-blue-500 to-cyan-500" },
              { icon: <Heart className="w-8 h-8" />, title: "Discord", link: "OCIP Community", gradient: "from-purple-500 to-pink-500" },
              { icon: <Eye className="w-8 h-8" />, title: "GitHub", link: "github.com/or4cl3", gradient: "from-green-500 to-blue-500" },
              { icon: <Sparkles className="w-8 h-8" />, title: "Twitter", link: "@Or4cl3AI", gradient: "from-cyan-500 to-purple-500" }
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{contact.title}</h3>
                <p className="text-gray-400">{contact.link}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-400 mb-8">
              "Intelligence, recursion, and ethical convergence belong to everyone."
            </p>
            <div className="flex justify-center items-center space-x-4">
              <span className="text-gray-500">Powered by</span>
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Or4cl3 AI Solutions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-purple-500/20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400">
                © 2024 OR4CL3 AI Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://bolt.new/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">Built with</span>
                <strong>Bolt.new</strong>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;