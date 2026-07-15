import { motion } from 'framer-motion';
import { Project } from '../components/Project';
import { HobbiesSection } from '../components/HobbiesSection';

const projects = [
  {
    title: "Cypher Chat",
    description: "Secure client-server chat web app enabling real-time and private communication.",
    tech: [
      { name: "TypeScript", color: "blue" },
      { name: "React", color: "cyan" },
      { name: "Next.js", color: "neutral" },
      { name: "Node.js", color: "green" },
      { name: "Express.js", color: "amber" },
      { name: "AWS", color: "orange" }
    ],
    link: "https://github.com/phillip-che/ChatApplication",
    previewImage: "https://personal-site-phi-snowy.vercel.app/assets/cypherchat-7f589c33.png"
  },
  {
    title: "Sole Exchange",
    description: "Forum that allows users to post, interact, and search about anything sneaker related..",
    tech: [
      { name: "React", color: "cyan" },
      { name: "JavaScript", color: "yellow" },
      { name: "Node.js", color: "green" },
      { name: "Supabase", color: "emerald" }
    ],
    link: "https://github.com/phillip-che/Sneaker-Forum",
    previewImage: "https://personal-site-phi-snowy.vercel.app/assets/soleexchange1-40b3b5a8.png"
  },
  {
    title: "Spotify Data Dashboard",
    description: "Dashboard that fetches Spotify's Top 50 songs and visualizes data in text and chart form.",
    tech: [
      { name: "React", color: "cyan" },
      { name: "Spotify API", color: "emerald" },
      { name: "JavaScript", color: "yellow" },
      { name: "Node.js", color: "green" },
    ],
    link: "https://github.com/phillip-che/Data-Dashboard",
    previewImage: "https://personal-site-phi-snowy.vercel.app/assets/spotifydash-7d7e663f.png"
  }
];

export const sections = [
    {
      title: "Timeline",
      content: (
        <div className="space-y-4 mb-8">
          {[
            {
              company: "Manipal University, Jaipur",
              date: "2026 - Now",
              title: "Master of Computer Application",
              description: ["Learning for my Masters"],
              dotColor: "bg-orange-500"
            },
            {
              company: "iAutomatia",
              date: "2025 - Now",
              title: "Software Development Engineer",
              description: ["working on large scale industrial application development"],
              dotColor: "bg-emerald-500"
            },
            {
              company: "TWT Organization",
              date: "2025",
              title: "Web Development Intern",
              description: ["Built a Modern website for the organization"],
              dotColor: "bg-blue-500"
            },
            {
              company: "The American College, Madurai",
              date: "2022 - 2025",
              title: "B.Sc. Computer Science",
              description: ["got my degree to make my parents proud"],
              dotColor: "bg-amber-300"
            },
          ].map((item) => (
            <div key={item.company + item.date} className="relative">
              <div 
                className={`absolute -left-[12px] top-2 h-[9px] w-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
              />
              <motion.div
                className="group py-1 transition-colors"
                whileHover={{ scale: 1.05 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <p className="font-medium">{item.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Projects",
      content: (
        <div className="space-y-4">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      )
    },
    {
      title: "Hobbies",
      content: <HobbiesSection />
    }
  ]
