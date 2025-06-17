import { useState } from "react"
import { Send } from "lucide-react"
export default function Newsletter() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")
        // Simulate API call
        setTimeout(() => {
            // Handle newsletter signup logic here
            console.log("Subscribed with:", email)
            setIsSubmitted(true)
            setIsLoading(false)
            setEmail("")
            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false)
            }, 5000)
        }, 1500)
    }
    return (
        <section id="newsletter" className="relative z-10">
            <div className="bg-primary absolute top-0 left-0 z-10 h-[120px] w-full dark:bg-[#14102C]">
                <div className="container">
                    <div className="wow fadeInUp bg-dark relative z-10 overflow-hidden rounded-sm p-8 sm:p-12">
                        <div className="max-w-xl mx-auto">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h2>
                                <p className="text-blue-100 dark:text-blue-200">
                                    Stay updated with the latest news, updates, and exclusive offers from CryptoVault.
                                </p>
                            </div>
                            {isSubmitted ? (
                                <div className="bg-green-500/20 border border-green-300 rounded-md p-4 text-center">
                                    <p className="text-white font-medium">Thank you for subscribing! Check your email for confirmation.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className="relative flex-grow">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your email address"
                                                required
                                                className="w-full px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none bg-white dark:bg-gray-800 border border-blue-300 dark:border-blue-600 focus:outline-none focus:ring-2 focus:ring-white text-gray-900 dark:text-white"
                                                disabled={isLoading}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <svg
                                                        className="animate-spin h-5 w-5 text-blue-600"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    <span>Subscribing...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    <span>Subscribe</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    {error && (
                                        <div className="bg-red-500/20 border border-red-300 rounded-md p-3">
                                            <p className="text-white text-sm">{error}</p>
                                        </div>
                                    )}
                                    <p className="text-xs text-blue-100 dark:text-blue-200 text-center mt-4">
                                        By subscribing, you agree to our{" "}
                                        <a href="#" className="text-white hover:underline font-medium">
                                            Privacy Policy
                                        </a>{" "}
                                        and consent to receive updates from our company.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}