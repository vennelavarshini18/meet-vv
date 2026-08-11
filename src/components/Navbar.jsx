import {
  Home,
  User,
  Layers,
  Briefcase,
  Users,
  Code,
  Trophy,
  Mail
} from "lucide-react";

const navItems = [
  { icon: Home, link: "#home", label: "Home" },
  { icon: User, link: "#about", label: "About" },
  { icon: Layers, link: "#skills", label: "Skills" },
  { icon: Briefcase, link: "#work-experience", label: "Experience" },
  { icon: Users, link: "#experience", label: "Leadership" },
  { icon: Code, link: "#projects", label: "Projects" },
  { icon: Trophy, link: "#achievements", label: "Achievements" },
  { icon: Mail, link: "#contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 backdrop-blur-2xl bg-darkSurfaceLighter/70 border border-darkBorder rounded-full px-6 py-4 flex gap-6 sm:gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {navItems.map(({ icon: Icon, link, label }, i) => (
        <a
          key={i}
          href={link}
          title={label}
          className="relative group text-textMuted hover:text-primaryLight transition-colors hover:scale-110 active:scale-95 p-2"
        >
          <div className="absolute inset-0 bg-primaryLight/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
          <Icon className="w-5 h-5 relative z-10" strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
}
