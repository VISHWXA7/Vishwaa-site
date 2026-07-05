import { motion } from 'framer-motion';


const hobbies = [
  {
    title: "YouTube",
    description: "documenting my life as a software engineer",
    stats: "100+ videos",
    color: "rose"
  },
  {
    title: "Real Estate Investing",
    description: "playing monopoly but with real money",
    stats: "0 properties",
    color: "blue"
  },
  {
    title: "Stocks and Crypto",
    description: "buying high and selling low is my philosophy",
    stats: "-$25,000 profit",
    color: "green"
  },
  {
    title: "Mechanical Keyboards",
    description: "fun but will be the reason why im homeless",
    stats: "3 custom keyboards",
    color: "purple"
  },
];

export const HobbiesSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
      {hobbies.map((hobby) => {
        return (
          <motion.div
            key={hobby.title}
            className="group py-1 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <h3 className="font-medium">{hobby.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {hobby.description}
              </p>
              <p
                className={`text-xs text-${hobby.color}-500 dark:text-${hobby.color}-500 mt-2 font-medium`}
              >
                {hobby.stats}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
