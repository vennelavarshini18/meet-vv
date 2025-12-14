import {
  Home,
  User,
  Briefcase,
  Code,
  Trophy,
  Mail
} from "lucide-react";

const navItems = [
  { icon: Home, link: "#home" },
  { icon: User, link: "#about" },
  { icon: Briefcase, link: "#experience" },
  { icon: Code, link: "#projects" },
  { icon: Trophy, link: "#achievements" },
  { icon: Mail, link: "#contact" }
];

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-lg bg-white/5 border border-white/10 rounded-full px-6 py-3 flex gap-6">
      {navItems.map(({ icon: Icon, link }, i) => (
        <a
          key={i}
          href={link}
          className="text-gray-300 hover:text-cyan-400 transition"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
