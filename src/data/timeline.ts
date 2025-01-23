// Type definitions for better TypeScript support
export type TimelineItemType = 'work' | 'education' | 'personal' | 'certification';

export interface TimelineItem {
  title: string;
  company?: string;
  companyUrl?: string;
  specialization?: string;
  location?: string;
  date: string;
  icon: string;
  type: TimelineItemType;
  highlights: string[];
  description?: string;
  responsibilities?: string[];
  technologies?: string[];
  links?: {
    playStore?: string;
    appStore?: string;
    oneTravel?: {
      playStore?: string;
      appStore?: string;
    };
  };
  credLink?: string;
}

export const timelineData: TimelineItem[] = [
  {
    title: 'Birth',
    location: 'Howrah, West Bengal, India',
    date: 'June 1998',
    icon: 'cake',
    type: 'personal',
    description: 'The beginning of my journey in this wonderful world! 🎉',
    highlights: ['A new star was born in Howrah, West Bengal!'],
  },
  {
    title: '10th Grade',
    company: 'Shibpur Dinobandhu Institution (Branch)',
    specialization: 'General',
    location: 'Howrah, West Bengal, India',
    date: 'March 2013',
    icon: 'study',
    type: 'education',
    highlights: ['Early exposure to computers sparked a lasting fascination with technology', 'Started learning basic programming concepts through school computer lab', 'Demonstrated natural aptitude for logical problem-solving'],
  },
  {
    title: '12th Grade',
    company: 'Shibpur Dinobandhu Institution (Branch)',
    specialization: 'Science with Computer Science',
    location: 'Howrah, West Bengal, India',
    date: 'June 2013 - July 2015',
    icon: 'study',
    type: 'education',
    highlights: ['Chose Computer Science as a major subject, diving deep into programming fundamentals', 'Developed first small applications using C++', 'Active participant in school technical activities', 'Discovered passion for software development through practical projects'],
  },
  {
    title: 'B.Tech',
    company: 'Narula Institute of Technology',
    specialization: 'Electronics and Communication Engineering',
    location: 'Kolkata, West Bengal, India',
    date: 'August 2015 - June 2019',
    icon: 'study',
    type: 'education',
    highlights: ['Merged electronics knowledge with programming skills to create innovative solutions', 'Led technical teams in college hackathons and projects', 'Self-learned web development technologies alongside curriculum', 'Received Technical Finesse Award for outstanding contributions', 'Developed an Automated Whiteboard Cleaner using Image Processing and Arduino, featuring a motor-operated duster for precise area cleaning based on image selection.'],
  },
  {
    title: 'Assistant System Engineer',
    company: 'Tata Consultancy Services',
    companyUrl: 'https://www.tcs.com/',
    location: 'Kolkata, West Bengal, India',
    date: 'July 2019 - June 2020',
    icon: 'work',
    type: 'work',
    description: 'Kickstarted my professional journey with React Native development and DevOps practices.',
    highlights: ['Optimized log management and load balancing in the API service layer using PM2’s advanced process management features, including log rotation.', 'Proactively notified teams of potential outages by creating precise failure alerts using Splunk and Dynatrace.', 'Streamlined deployment processes using Fastlane, reducing manual errors and deployment time.', 'Deployed the Scan & Go React Native shopping app to Google Play Store and Apple App Store, achieving over 1 million downloads with bug-free functionality.'],
    technologies: ['React Native', 'Node.js', 'PM2', 'Jenkins', 'Splunk', 'Dynatrace', 'Fastlane', 'Airwatch'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.asda.ScanandGoMobile&pcampaignid=web_share',
      appStore: 'https://apps.apple.com/gb/app/asda-scan-go/id1413258515',
    },
  },
  {
    title: 'System Engineer',
    company: 'Tata Consultancy Services',
    companyUrl: 'https://www.tcs.com/',
    location: 'Kolkata, West Bengal, India',
    date: 'July 2020 - October 2021',
    icon: 'work',
    type: 'work',
    description: 'Contributed to the development of inventory management applications for ASDA, a Walmart subsidiary and major UK retail client, as a key developer and team collaborator.',
    highlights: [
      'Collaborated with clients and UX/UI designers to clarify requirements and suggest design improvements for React Native and React Web apps.',
      'Developed multiple features and worked closely with QA teams to ensure bug-free delivery of applications.',
      'Built 3 internal inventory management apps using React Native, React Web, and Express.js, increasing store efficiency by 40% by transitioning operations from paperwork to app-based management.',
      'Architected and implemented a standalone repository for Redux and business logic, reused as node modules across apps, ensuring code efficiency and maintainability.',
      'Actively debugged and resolved live bugs across backend and frontend, ensuring app reliability and stability as a key contributor to the team.',
      'Participated in Agile practices, including daily stand-ups, sprint planning, and reviews, fostering a collaborative and efficient team environment.',
    ],
    technologies: ['React Native', 'React Web', 'Express.js', 'Redux', 'Redux Saga', 'JavaScript', 'Node.js', 'Material UI', 'HTML', 'CSS', 'Axios'],
  },
  {
    title: 'Become a React Native Developer',
    company: 'LinkedIn',
    companyUrl: 'https://www.linkedin.com/',
    location: 'Online',
    date: 'September 2020',
    icon: 'certificate',
    type: 'certification',
    credLink: 'https://media.licdn.com/dms/image/v2/D4D2DAQHmqQkVlCcENg/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1719346344531?e=1738195200&v=beta&t=rGE-fCs9UH9RosDScDb390UXXSNt02cFov-USpyPCkE',
    highlights: ["Mastered cross-platform development while discovering why 'it works on my machine' isn't a valid excuse", 'Built production-ready features including smooth animations that even Android and iOS could agree on', 'Learned to debug layout issues without throwing my phone out the window (most days)'],
  },
  {
    title: 'React Native - The Practical Guide',
    company: 'Udemy',
    companyUrl: 'https://www.udemy.com/',
    location: 'Online',
    date: 'September 2020',
    icon: 'certificate',
    type: 'certification',
    credLink: 'https://media.licdn.com/dms/image/v2/D4D2DAQGt2MBGauaKqg/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1719346545892?e=1738195200&v=beta&t=L5lKnHxpee-4263ErFRPIS2cFXiyPc35S7KK_QsquF4',
    highlights: ['Shipped 5 practice apps while finally understanding Flexbox layouts (column vs row: 1, Me: 0)', 'Became best friends with the React Native debugger - our relationship is complicated but productive', 'Discovered 37 ways to center a div... and then learned proper mobile UI/UX practices'],
  },
  {
    title: 'The Complete React Native + Hooks Course',
    company: 'Udemy',
    companyUrl: 'https://www.udemy.com/',
    location: 'Online',
    date: 'October 2020',
    icon: 'certificate',
    type: 'certification',
    credLink: 'https://media.licdn.com/dms/image/v2/D4D2DAQFD-B2MvvMOwQ/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1719346056813?e=1738195200&v=beta&t=oxPUINBQ1gnTXArT1NL7Wy1i13zSPuAEf_kTJkfalNg',
    highlights: ['Tamed state management with Hooks after initial attempts that resembled spaghetti code', 'Built async storage solutions that actually persisted data (most of the time)', "Reduced 'prop drilling' anxiety through proper context API implementation", 'Coffee consumption remained stable at 3 cups/hour during Redux integration modules'],
  },
  {
    title: 'Javascript (Basic)',
    company: 'HackerRank',
    companyUrl: 'https://www.hackerrank.com/',
    location: 'Online',
    date: 'June 2021',
    icon: 'certificate',
    type: 'certification',
    credLink: 'https://www.hackerrank.com/certificates/c902fc16abf7',
    highlights: ["Solved algorithmic puzzles without Googling '== vs ===' for the 100th time", "Mastered closures after realizing they're just functions with commitment issues", "Finally wrote error-free code (note: 'error-free' may exclude semicolon debates)", 'Earned official proof that I understand hoisting (variables up, confidence down)'],
  },
  {
    title: 'Mobile Application Developer',
    company: 'Fareportal',
    companyUrl: 'https://www.fareportal.com/',
    location: 'Remote',
    date: 'November 2021 - March 2023',
    icon: 'work',
    type: 'work',
    description: 'Enhanced travel booking experience through innovative mobile solutions across multiple travel brands including CheapOair and OneTravel.',
    highlights: [
      'Designed smart native rating prompts boosting Apple App Store ratings to 4.8★ (iOS) and Google Play Store to 4.6★ (Android) across 200K+ user reviews',
      'Engineered robust in-app update system that dramatically increased update adoption rates from 52% to 91% of users within a 5-day window',
      'Engineered in-house Codepush-like dynamic javascript bundle update system slashing hotfix deployment time from 2 days → 30 minutes.',
      'Achieved 99.95% (iOS) and 99.9% (Android) crash-free sessions via Firebase Crashlytics-driven error resolution',
      'Boosted checkout conversion by 18% through modernized payment stack with Venmo and Apple Pay integration, adding support for 9 new currencies',
      'Proposed and spearheaded adoption of Lottie animation framework, implementing UI components that reduced design-to-code time by 65% and enhanced user experience through fluid, complex animations',
      'Led React Native migration from version 0.64 to 0.71, successfully resolving 120+ compatibility issues while achieving a 20% APK size reduction through dependency tree optimization.',
    ],
    technologies: ['React Native', 'JavaScript', 'Apple Pay', 'Venmo', 'Lottie', 'Firebase Crashlytics', 'CodePush'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.fp.cheapoair',
      appStore: 'https://apps.apple.com/us/app/cheapoair-cheap-flight-deals/id436858222',
      oneTravel: {
        playStore: 'https://play.google.com/store/apps/details?id=com.wkt.onetravel.android',
        appStore: 'https://apps.apple.com/in/app/onetravel-flight-hotel-deals/id680520990',
      },
    },
  },
  {
    title: 'Senior Mobile Application Developer',
    company: 'Fareportal',
    companyUrl: 'https://www.fareportal.com/',
    location: 'Remote',
    date: 'April 2023 - Present',
    icon: 'work',
    type: 'work',
    description: 'Leading mobile app development initiatives across multiple travel brands (CheapOair and OneTravel) while mentoring junior developers and implementing innovative solutions.',
    highlights: [
      'Introduced error boundary patterns to isolate component-level failures, reducing unhandled exceptions by 50% and improving app stability',
      'Led development of 5+ promotional mini-games (Football, Tennis, Olympic Archery, Hurdles Run, Disc Shooting, and Easter Egg Hunt) and two quizzes with reward-sharing features, resulting in an 18% increase in user retention through time-sensitive sports-themed campaigns.',
      'Implemented Firebase Performance Monitoring to detect and resolve API latency issues below 800ms threshold.',
      'Developed 8+ native modules bridging React Native with iOS/Android SDKs for payment processing, fraud detection, and GDPR cookie permission management',
      'Implemented A/B tests for UI components and features, increasing conversion rates and user engagement significantly.',
      'Adopted microfrontend architecture, breaking the app into modular, independently deployable chunks, enabling faster feature rollouts and reducing build times by 30%',
      'Collaborated with cross-functional teams to deliver key features and approve release builds for Google Play and Apple App Store before every release',
      'Mentored 3 junior developers through bi-weekly code reviews and pair programming sessions, significantly accelerating feature delivery velocity',
    ],
    technologies: ['React Native', 'A/B Testing', 'Microfrontend', 'Firebase Crashlytics', 'Azure Pipelines', 'Objective-C', 'Java', 'Firebase Performance Monitoring'],
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.fp.cheapoair',
      appStore: 'https://apps.apple.com/us/app/cheapoair-cheap-flight-deals/id436858222',
      oneTravel: {
        playStore: 'https://play.google.com/store/apps/details?id=com.wkt.onetravel.android',
        appStore: 'https://apps.apple.com/in/app/onetravel-flight-hotel-deals/id680520990',
      },
    },
  },

  {
    title: 'Prompt Engineering Certification',
    company: 'Vanderbilt University - Coursera',
    location: 'Online',
    date: 'September 2023',
    icon: 'certificate',
    type: 'certification',
    credLink: 'https://www.coursera.org/account/accomplishments/verify/APX8AEZUPQTF',
    highlights: ['Learned to talk to AI like a pro (without accidentally triggering robot uprising scenarios)', "Discovered that 'be creative' means very different things to humans vs. LLMs - mastered the middle ground", 'Built prompt chains that make ChatGPT work smarter, not harder - 10x efficiency, 0x existential dread', "Turned 'vague idea' → 'precise output' faster than you can say 'hallucinated response'", 'Now certified in making AI do useful work while keeping my prompts more organized than my browser tabs'],
  },
];
