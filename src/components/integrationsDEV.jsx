import { useState, useEffect } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { curve } from "../assets";
import yamil from "../assets/integrantes/yamil.jpg"
import jhamil from "../assets/integrantes/jhamil.jpg"
import omar from "../assets/integrantes/omar.jpg"
const TeamMember = ({ name, role, walletAddress, image, delay = 0, colorScheme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [particleCount, setParticleCount] = useState(20);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative group transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${colorScheme.particles} rounded-full animate-float opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main card */}
      <div className={`relative h-80 ${colorScheme.cardBg} rounded-2xl border ${colorScheme.border} overflow-hidden group-hover:${colorScheme.hoverBorder} transition-all duration-500 ${colorScheme.shadow}`}>
        {/* Holographic overlay */}
        <div className={`absolute inset-0 ${colorScheme.hologram} transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000`} />
        
        
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className={`border ${colorScheme.gridBorder} animate-pulse`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6">
          {/* Avatar */}
          <div className="mx-auto mb-4">
            <div className={`w-20 h-20 ${colorScheme.avatarBg} rounded-full flex items-center justify-center ${colorScheme.avatarShadow} group-hover:${colorScheme.avatarHoverShadow} transition-all duration-300 group-hover:scale-110 overflow-hidden border-2 ${colorScheme.avatarBorder}`}>
              {image ? (
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-2xl font-bold text-white">
                  {name.charAt(0)}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="text-center">
            <h3 className={`text-xl font-semibold text-white mb-2 group-hover:${colorScheme.nameHover} transition-colors`}>
              {name}
            </h3>
            <div className={`${colorScheme.infoBg} rounded-lg p-3 border ${colorScheme.infoBorder} backdrop-blur-sm`}>
              <p className={`text-xs ${colorScheme.roleLabel} mb-1`}>Role</p>
              <p className={`text-xs font-mono ${colorScheme.roleText} break-all`}>{role}</p>
            </div>
          </div>

          {/* Web3 indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            <div className={`w-2 h-2 ${colorScheme.indicator1} rounded-full animate-pulse`} />
            <div className={`w-2 h-2 ${colorScheme.indicator2} rounded-full animate-pulse`} style={{ animationDelay: "0.5s" }} />
            <div className={`w-2 h-2 ${colorScheme.indicator3} rounded-full animate-pulse`} style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const IntegrationsDEV = () => {
  const [blockHeight, setBlockHeight] = useState(2845672);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlockHeight(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    {
      name: "Yamil Navia",
      role: "Blockchain Developer Solidity - Rust",
      walletAddress: "0x742d35Cc6761C4F4CE9FD5afD4C0...",
      image: yamil,
      colorScheme: {
        cardBg: "bg-gradient-to-br from-orange-900/80 via-red-900/70 to-pink-900/80",
        border: "border-orange-500/30",
        hoverBorder: "border-orange-400/70",
        shadow: "shadow-lg shadow-orange-500/20",
        particles: "bg-gradient-to-r from-orange-400 to-red-400",
        hologram: "bg-gradient-to-r from-transparent via-orange-300/10 to-transparent",
        gridBorder: "border-orange-500/25",
        avatarBg: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500",
        avatarBorder: "border-orange-400/60",
        avatarShadow: "shadow-lg shadow-orange-500/50",
        avatarHoverShadow: "shadow-orange-400/80",
        nameHover: "text-orange-300",
        infoBg: "bg-orange-950/60",
        infoBorder: "border-orange-400/20",
        roleLabel: "text-orange-400",
        roleText: "text-red-300",
        indicator1: "bg-orange-400",
        indicator2: "bg-red-400", 
        indicator3: "bg-pink-400"
      }
    },
    {
      name: "Jhamil Mamani", 
      role: "Frontend Developer React - Tailwind",
      walletAddress: "0x8F3B2C1A9E6D7F4A2B8C5E9F1D3A...",
      image: jhamil,
      colorScheme: {
        cardBg: "bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-teal-900/80",
        border: "border-blue-500/30",
        hoverBorder: "border-cyan-400/70",
        shadow: "shadow-lg shadow-blue-500/20",
        particles: "bg-gradient-to-r from-blue-400 to-cyan-400",
        hologram: "bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent",
        gridBorder: "border-blue-500/25",
        avatarBg: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
        avatarBorder: "border-cyan-400/60",
        avatarShadow: "shadow-lg shadow-blue-500/50",
        avatarHoverShadow: "shadow-cyan-400/80",
        nameHover: "text-cyan-300",
        infoBg: "bg-blue-950/60",
        infoBorder: "border-cyan-400/20",
        roleLabel: "text-cyan-400",
        roleText: "text-blue-300",
        indicator1: "bg-blue-400",
        indicator2: "bg-cyan-400",
        indicator3: "bg-teal-400"
      }
    },
    {
      name: "Omar Quispe",
      role: "AI Developer Specialist Agent AI", 
      walletAddress: "0x1A2B3C4D5E6F7A8B9C0D1E2F3A4B...",
      image: omar,
      colorScheme: {
        cardBg: "bg-gradient-to-br from-emerald-900/80 via-green-900/70 to-lime-900/80",
        border: "border-emerald-500/30",
        hoverBorder: "border-green-400/70",
        shadow: "shadow-lg shadow-emerald-500/20",
        particles: "bg-gradient-to-r from-emerald-400 to-green-400",
        hologram: "bg-gradient-to-r from-transparent via-green-300/10 to-transparent",
        gridBorder: "border-emerald-500/25",
        avatarBg: "bg-gradient-to-br from-emerald-500 via-green-500 to-lime-500",
        avatarBorder: "border-green-400/60",
        avatarShadow: "shadow-lg shadow-emerald-500/50",
        avatarHoverShadow: "shadow-green-400/80",
        nameHover: "text-green-300",
        infoBg: "bg-emerald-950/60",
        infoBorder: "border-green-400/20",
        roleLabel: "text-green-400",
        roleText: "text-emerald-300",
        indicator1: "bg-emerald-400",
        indicator2: "bg-green-400",
        indicator3: "bg-lime-400"
      }
    }
  ];

  return (
    <Section className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <Heading
            title={
              <>
                Meet Our{" "}
                <span className="inline-block relative font-semibold">
                  Web3 Builders
                  <img
                    src={curve}
                    className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                    width={624}
                    height={28}
                    alt="Curve"
                  />
                </span>
              </>
            }
            text="The decentralized team behind your AI-powered Sonic transfers"
          />
          
          
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              {...member}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Floating Web3 elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-10 animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {["⟠", "◈", "⬡", "⟐", "◇"][i % 5]}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </Section>
  );
};

export default IntegrationsDEV;