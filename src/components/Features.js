const Features = () => {
    return (
      <section className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="text-2xl font-semibold text-indigo-600 uppercase mb-2">Crypto Feature</p>
      <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">Best Features</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Nunc sed congue arcu, In et dignissim quam condimentum vel.<br />
      </p>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Feature 1 */}
        <div className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl">
            🔒
          </div>
          <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">Safe & Secure</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore labore et dolor.
          </p>
        </div>
  
        {/* Feature 2 */}
        <div className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl">
            🎁
          </div>
          <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">Early Bonus</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore et dolor.
          </p>
        </div>
  
        {/* Feature 3 */}
        <div className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl">
            🌐
          </div>
          <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">Universal Access</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore et dolor.
          </p>
        </div>
        {/* Feature 4 */}
        <div className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl">
            🌐
          </div>
          <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">Secure Storage</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore et dolor.
          </p>
        </div>
       <div className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl">
            🌐
          </div>
          <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">Low Cost</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore et dolor.
          </p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl">
            🌐
          </div>
          <h3 className="text-4xl font-semibold text-gray-900 dark:text-white">Several Profit</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor labore labore et dolor.
          </p>
        </div>
      </div>
    </div>
  </section>
  
    );
  }
  export default Features;