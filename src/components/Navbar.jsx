import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img src='https://www.transcurators.com/Trans_logo.svg' alt='tc-logo' className='w-60 aspect-w-16 aspect-h-9' />
          </div>
          <div className="hidden lg:flex items-center gap-10 font-medium relative">
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 text-green-700 hover:text-green-800"
              >
                Services {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {open && (
                <div className="absolute top-12 left-0 w-[700px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-4 gap-6">
                  {services.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-lg p-4 hover:bg-green-50 cursor-pointer transition"
                    >
                      <div className="mb-2 text-xl">{item.icon}</div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="hover:text-green-700">About Us</a>
            <a href="#" className="hover:text-green-700">Resources</a>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <a href="#" className="hover:text-green-700 font-semibold hidden lg:block">Careers</a>
            <button className="btn btn-outline btn-success hidden lg:block shadow-[0_2px_6px_#bfdcc6] hover:shadow-[0_4px_12px_#bfdcc6] transition-shadow duration-300">
            Talk to Sales
          </button>
          </div>
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-4"
            >
              <li><a>Services</a></li>
              <li><a>About Us</a></li>
              <li><a>Resources</a></li>
              <li><a>Careers</a></li>
            </ul>
          </div>

        </div>
        <div className="bg-green-50 text-center text-sm py-2 text-green-700 font-medium">
          <a href="#" className="hover:underline">Learn Paid Media from Experts, Start Your Journey Now →</a>
        </div>
      </nav>
      <div className="h-[120px]"></div>
    </>
  );
}
const services = [
  { title: "Content Writing", desc: "Professional writing services", icon: "📝" },
  { title: "Design & Development", desc: "Web & app solutions", icon: "💻" },
  { title: "Video Production", desc: "Engaging videos", icon: "🎥" },
  { title: "Social Media", desc: "Marketing strategies", icon: "📣" },
  { title: "Digital Marketing", desc: "Growth solutions", icon: "📊" },
  { title: "SEO Services", desc: "Rank higher on Google", icon: "🚀" },
  { title: "Content Marketing", desc: "Strategic promotion", icon: "📦" },
  { title: "Translation & Voiceover", desc: "Multilingual services", icon: "🎙️" },
];
