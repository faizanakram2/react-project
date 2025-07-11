import btc from '../assets/btc.jpeg'
import coding from '../assets/coding.jpeg'
import mac from '../assets/mac.jpeg'

export default function Latestnews() {
    return (
        <section data-aos="fade-up" id="blog" className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4">Latest News</h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4">Recent News & Blogs
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Stay updated with the latest insights, news, and trends in the cryptocurrency and blockchain world.
                    </p>
                </div>

                {/* Blog Posts Grid - 3 Simple Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={btc}
                                alt="Blog post"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Understanding Blockchain Technology
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                            >
                                Read More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={coding}
                                alt="Blog post"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                The Future of Cryptocurrency Trading
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                            >
                                Read More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={mac}
                                alt="Blog post"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Security Best Practices for Crypto
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                            >
                                Read More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}