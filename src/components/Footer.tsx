import { Card } from "@/components/ui/card";
import { CarFront, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Safety", href: "#safety" },
    { name: "FAQ", href: "#faq" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                  <CarFront className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">ShareWay</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making commuting in Delhi NCR smarter, cheaper, and more sustainable through community-driven ride sharing.
              </p>
              <div className="flex space-x-4">
                <Card className="p-2 bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer">
                  <Mail className="h-4 w-4 text-gray-400" />
                </Card>
                <Card className="p-2 bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer">
                  <Phone className="h-4 w-4 text-gray-400" />
                </Card>
                <Card className="p-2 bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer">
                  <MapPin className="h-4 w-4 text-gray-400" />
                </Card>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>hello@shareway.in</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Delhi NCR, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 ShareWay. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
                Made with ❤️ for Delhi NCR commuters
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
