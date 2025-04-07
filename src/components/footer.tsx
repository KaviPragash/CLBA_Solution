'use client';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 text-white py-12 px-6">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Section 1: Logo and Description */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">Corporate And Legal Business Accounts Solutions</h3>
                    <p className="text-sm mt-2 text-gray-400">
                    We provide direct access to expert legal & accounting professionals
                to resolve corporate issues efficiently and amicably.
                    </p>
                </div>

                {/* Section 2: Quick Links */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="about" className="text-gray-400 hover:text-white">About</a></li>
                        <li><a href="courses" className="text-gray-400 hover:text-white">Services</a></li>
                        <li><a href="university" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Section 3: Get in Touch */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
                    <ul className="space-y-2 text-gray-400">
                    <li>CLBA (Corporate And Legal Business Accounts) Solutions</li>
                        <li>No. 93/A, 1/1, Colombo Road, Negombo, Sri Lanka.</li>
                        <li>Email: info@mybridge.lk </li>
                        <li>Phone: 071 15 22 915</li>
                        <li>Fax: 031 222 80 25 </li>
                    </ul>
                </div>

                {/* Section 4: Social Media Icons */}
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Corporate And Legal Business Accounts Solutions. All rights reserved.
                <p>
                    Developed by{" "}
                    <a 
                        href="https://www.verveautomation.com" // Replace with the correct URL
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-500"
                    >
                        Verveautomation (PVT) LTD
                    </a>
                </p>
            </div>
        </footer>
    );
}