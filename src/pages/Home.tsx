import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';
import RecentProject from '../assets/images/RecentProject.png';

const Home = () => {
  usePageTitle('');  // Empty string for home page

  const RecentProjTech = [
    { name: 'Figma', className: 'bg-cyan-500' },
    { name: 'WPF', className: 'bg-violet-500' },
    { name: 'Claude', className: 'bg-orange-500' },
  ];

  return (
    <div>
      <FadeInSection>
        <section className="space-y-4">
          <motion.div
            className="text-2xl sm:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'hello, Vishwaa here',
              ]}
              wrapper="h1"
              cursor={true}
              repeat={0}
              speed={50}
              style={{ display: 'inline-block' }}
            />
          </motion.div>
          <motion.p
            className="text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            your average tech enthusiast from Cape documenting the path to becoming a software engineer.
          </motion.p>
        </section>
      </FadeInSection>
      
      {/* Recent Project Section */}
      <FadeInSection delay={0.2}>
        <motion.section className="mt-10 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Recent Project</h2>
            {/* Placeholder for githublink */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-[#222222] dark:hover:text-white"
            >
              🔒 NDA Protected
            </a>
          </div>

          <div className="space-y-3">
            <img
              src={RecentProject}
              alt="Preview of Recent Project"
              className="aspect-video w-full rounded-lg object-cover object-top"
            />

            <div className="space-y-2">
              <h3 className="font-medium text-gray-900 dark:text-white">Industrial UI Framework</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Designed a multi-module frontend interface system for an automated factory processing platform (EFEM).
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {RecentProjTech.map((tech) => (
                  <span
                    key={tech.name}
                    className={`rounded-full px-2 py-1 text-xs text-white ${tech.className}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <motion.section className="mt-4">
          
        </motion.section>
      </FadeInSection>
    </div>
  );
};

export default Home; 
