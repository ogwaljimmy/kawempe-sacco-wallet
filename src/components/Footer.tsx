import { Wallet, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Kawempe SACCO</div>
                <div className="text-sm text-primary-foreground/80">Member Wallet</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Empowering our community through cooperative finance and modern 
              digital banking solutions since 2008.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Services
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Loan Calculator
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Interest Rates
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Member Benefits
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Savings Accounts
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Emergency Loans
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Development Loans
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Business Loans
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Financial Education
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/80 mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  Kawempe Division, Kampala<br />
                  P.O. Box 12345<br />
                  Uganda
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+256 700 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">info@kawempesacco.ug</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Kawempe SACCO. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;