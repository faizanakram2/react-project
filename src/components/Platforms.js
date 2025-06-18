import uideck from '../assets/uideck.svg'
import tailgrids from '../assets/tailgrids.svg'
import lineicons from '../assets/lineicons.svg'
import ayroui from '../assets/ayroui (1).svg';
import plainadmin from '../assets/plainadmin.svg'

const Platforms = () => {
  return (
    <section className="py-10 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-8">
          Join the <span className="text-indigo-600 dark:text-indigo-400">20,000+</span> companies using our platform
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
          <a href="https://uideck.com" target="_blank" rel="noopener noreferrer">
            <img src={uideck} alt="Uideck" className="h-8" />
          </a>
          <a href="https://tailgrids.com" target="_blank" rel="noopener noreferrer">
            <img src={tailgrids} alt="TailGrids" className="h-8" />
          </a>
          <a href="https://lineicons.com" target="_blank" rel="noopener noreferrer">
            <img src={lineicons} alt="Lineicons" className="h-8" />
          </a>
          <a href="https://ayroui.com/" target="_blank" rel="noopener noreferrer">
            <img src={ayroui} alt="AyroUI" className="h-8" />
          </a>
          <a href="https://plainadmin.com" target="_blank" rel="noopener noreferrer">
            <img src={plainadmin} alt="PlainAdmin" className="h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Platforms;
