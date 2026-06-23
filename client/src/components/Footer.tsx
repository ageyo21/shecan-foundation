export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">She Can Foundation</p>
                <p className="text-xs text-primary-mid">Govt. Registered NGO</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Together We Can Change The World. Empowering women through
              education, support, and community-driven programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
                { label: 'Instagram', href: 'https://www.instagram.com/shecanfoundation.ngo' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/shecanfoundation' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-gray-400 hover:text-primary-mid text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Contact Info
            </h4>
            <ul className="space-y-3">
              {[
                { icon: '📧', value: 'president@shecanfoundation.org' },
                { icon: '📱', value: '+91-8283841830' },
                { icon: '🌐', value: 'shecanfoundation.org' },
                { icon: '📸', value: '@shecanfoundation.ngo' },
              ].map((item) => (
                <li key={item.value} className="flex items-start gap-2">
                  <span className="text-base mt-0.5">{item.icon}</span>
                  <span className="text-gray-400 text-sm break-all">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {currentYear} She Can Foundation. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Registered under Indian Society Act, 1860
          </p>
        </div>
      </div>
    </footer>
  )
}