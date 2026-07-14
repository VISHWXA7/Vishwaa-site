import { motion } from 'framer-motion';


const hobbies = [
  {
    title: "Investing",
    description: "analyzing market trends and building long-term wealth",
    stats: "long-term believer",
    color: "green"
  },
  {
    title: "Driving",
    description: "exploring and clearing my mind behind the wheel",
    stats: "0 fines (so far)",
    color: "blue"
  },
  {
    title: "Hearing Music",
    description: "enjoys the perfect soundtrack for coding sessions",
    stats: "24/7 lo-fi beats",
    color: "rose"
  },
  {
    title: "Gaming",
    description: "clutching into stories and diving into immersive open worlds",
    stats: "100+ hours logged",
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
