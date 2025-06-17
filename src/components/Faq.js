import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FaqSection() {
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null)

  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // FAQ data
  const faqs = [
    {
      question: "What is cryptocurrency?",
      answer:
        "Cryptocurrency is a digital or virtual form of currency that uses cryptography for security, making it difficult to counterfeit. Unlike traditional currencies issued by governments (fiat money), cryptocurrencies operate on decentralized systems based on blockchain technology – a distributed ledger enforced by a network of computers. Bitcoin, created in 2009, was the first cryptocurrency, but today there are thousands of alternative cryptocurrencies with various functions and specifications.",
    },
    {
      question: "How do I create a crypto wallet?",
      answer:
        "Creating a crypto wallet involves several steps: First, choose the type of wallet that suits your needs (hardware, software, mobile, or paper). For beginners, mobile or desktop wallets are often easiest. Next, download a reputable wallet application from the official website or app store. Follow the setup instructions, which typically involve creating a password and backing up your recovery phrase (usually 12-24 words). Keep this phrase secure and never share it – it's the only way to recover your wallet if you lose access. Finally, once setup is complete, you can receive cryptocurrency by sharing your public address with others.",
    },
    {
      question: "Is cryptocurrency investment safe?",
      answer:
        "Cryptocurrency investment carries significant risks that investors should understand. The market is highly volatile, with prices that can fluctuate dramatically in short periods. Regulatory uncertainty exists as governments worldwide are still developing frameworks for crypto. Security risks include exchange hacks and scams. However, many investors include crypto as part of a diversified portfolio. To invest more safely: research thoroughly before investing, only invest what you can afford to lose, use secure and reputable exchanges, implement strong security practices, and consider dollar-cost averaging instead of trying to time the market.",
    },
    {
      question: "What is blockchain technology?",
      answer:
        "Blockchain technology is a decentralized, distributed ledger that records transactions across many computers. Once a record is added to the chain, it's very difficult to change. Each \"block\" contains a number of transactions, and every time a new transaction occurs, a record of that transaction is added to every participant's ledger. This makes blockchain particularly secure and resistant to modification of data. The decentralized nature means it doesn't rely on a central point of control. Beyond cryptocurrencies, blockchain has applications in supply chain management, healthcare, voting systems, identity verification, and many other fields.",
    },
  ]

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to the most common questions about cryptocurrency and our services.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    openFaq === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={openFaq !== index}
              >
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
