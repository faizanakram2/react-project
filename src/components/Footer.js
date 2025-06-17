import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Github, Send } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
  }

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"> */}
              {/* <span className="text-white font-bold text-sm">₿</span> */}
              {/* </div> */}
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Crypto
              </span>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae quam nec ante fringilla vel at erat convallis elit.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-500 transition-colors duration-200">
                  What is ICO
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-500 transition-colors duration-200">
                  RoadMap
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-blue-500 transition-colors duration-200">
                  WhitePaper
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-500 transition-colors duration-200">
                  Social Network
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-blue-500 transition-colors duration-200">
                  Join us now
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">
                  Settings and Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">
                  24/7 Supports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors duration-200">
                  On point FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">News & Posts</h3>
            <p className="text-sm mb-4">Stay updated with our latest features and releases.</p>
            <form onSubmit={handleSubmit} className="flex">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 rounded-l-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-r-md transition-colors duration-200 flex items-center justify-center"
              >
                <Send size={18} />
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xxl">© {new Date().getFullYear()} Crypto- All rights reserved. Crafted by Nextjs.Templates</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* <a href="#" className="text-sm hover:text-blue-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-blue-500 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-blue-500 transition-colors duration-200">
                Cookies
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
