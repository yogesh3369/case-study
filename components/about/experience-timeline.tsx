'use client';

import dynamic from 'next/dynamic';
import { Rocket, Lightbulb, Target, Users } from 'lucide-react';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

const experiences = [
  {
    id: 1,
    role: 'Sr. Associate UX Designer',
    company: 'Stylework Innovation Hub Pvt. Ltd.',
    period: 'Nov 2023 - Present',
    icon: <Rocket className="w-6 h-6 text-indigo-500" />,
    highlights: [
      'Redesigned mobile app homepage, increasing engagement by 45% and reducing abandonment by 30%',
      'Executed B2B feature refinements, increasing platform utilization by 55% across 12 enterprise clients',
      'Pioneered AI automation workflows, reducing manual tasks by 60% and improving lead conversion by 25%',
      'Designed AI-driven cold outreach system, increasing response rates by 35% while reducing preparation time by 75%',
      'Applied OOUX methodology to create scalable systems supporting rapid feature expansion'
    ]
  },
  {
    id: 2,
    role: 'UX UI Designer',
    company: 'RARR Technologies Pvt. Ltd.',
    period: 'May 2022 - Nov 2023',
    icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
    highlights: [
      'Architected dual-facing recruitment ecosystem, reducing hiring time by 30%',
      'Spearheaded real-time status update system, decreasing HR inquiries by 65%',
      'Conducted comprehensive user research, creating workflows that increased efficiency by 35%',
      'Developed interactive prototypes receiving 92% positive feedback in usability testing'
    ]
  },
  {
    id: 3,
    role: 'HR Manager',
    company: 'iDesign.Market',
    period: 'Feb 2022 - May 2022',
    icon: <Users className="w-6 h-6 text-emerald-500" />,
    highlights: []
  },
  {
    id: 4,
    role: 'Senior Counselor',
    company: 'Perfect E-learning',
    period: 'Nov 2020 - Feb 2022',
    icon: <Target className="w-6 h-6 text-rose-500" />,
    highlights: []
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Professional Journey
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          My career path through design and technology
        </p>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200" />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <MotionDiv
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white">
                <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company} • {exp.period}</p>
                  </div>
                </div>
                
                {exp.highlights.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {exp.role.includes('UX') && (
                      <>
                        <span className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full">
                          User Research
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full">
                          UI/UX Design
                        </span>
                      </>
                    )}
                    {exp.role.includes('HR') && (
                      <span className="px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                        People Management
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
