"use client"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">🧋 Boba Bliss</h3>
            <p className="text-sm opacity-75">Handcrafted bubble tea made with love and premium ingredients.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#menu" className="hover:opacity-100 transition-opacity">
                  Bubble Tea
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:opacity-100 transition-opacity">
                  Smoothies
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:opacity-100 transition-opacity">
                  Lattes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-background/20 text-background rounded-full px-4 py-2 text-sm placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
          <p>&copy; 2025 Boba Bliss. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
