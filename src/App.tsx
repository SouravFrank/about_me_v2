import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

import { TimelineEvent, SkillCard, ThemeToggle, ContactInfo, ContactForm, GoToTop, LocationMap, ArticlesSection, Footer, HorizontalScroll, GradientBlobCursor, RewardsRecognition, ProjectSection, SectionWrapper, IntroSection } from './components';

import { contactInfo, skills, timelineData, socialMediaLinks, projects } from './data';

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <GradientBlobCursor isDarkMode={isDark}>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
        <GoToTop />

        <IntroSection />

        {/* Timeline Section */}
        <section className="py-20 px-8">
          <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
          <div className="max-w-4xl mx-auto">
            {timelineData.map((item, index) => (
              <TimelineEvent key={index} {...item} index={index} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <SectionWrapper isDark={isDark} titleBold={'Unlocking '} titleLight={'Your Technical Potential'} description={'Discover the cutting-edge technologies and skills that drive innovation and success.'}>
          <div className="max-w-6xl mx-auto">
            {/* Technical Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.technical.map((skill, index) => (
                  <SkillCard key={index} {...skill} index={index} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.tools.map((skill, index) => (
                  <SkillCard key={index} {...skill} index={index} />
                ))}
              </div>
            </div>

            {/* Additional Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Additional Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.additional.map((skill, index) => (
                  <SkillCard key={index} {...skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Industry Standard Projects Section */}
        <SectionWrapper isDark={isDark} titleBold={'Pioneering '} titleLight={'Industry Projects'} description={'Explore my contributions to the industry through these projects, showcasing innovation and excellence.'}>
          <HorizontalScroll>
            <ProjectSection projects={projects} />
          </HorizontalScroll>
        </SectionWrapper>

        {/* Articles Section */}
        <SectionWrapper isDark={isDark} titleBold={'Industry Insights '} titleLight={'My Articles'} description={'Explore the articles I have published, sharing insights and knowledge on various topics.'}>
          <HorizontalScroll>
            <ArticlesSection />
          </HorizontalScroll>
        </SectionWrapper>

        <RewardsRecognition isDark={isDark} />

        {/* Contact Section */}
        <SectionWrapper isDark={isDark} titleBold={'Get '} titleLight={'in Touch'} description={'Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and development.'}>
          <div className="space-y-8 px-8">
            {/* Contact Info & Map Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-neumorph p-8">
                <ContactInfo contactInfo={contactInfo} socialLinks={socialMediaLinks} />
              </div>

              {/* Location Map */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-neumorph p-8">
                <LocationMap />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-neumorph p-8">
              <ContactForm />
            </div>
          </div>
        </SectionWrapper>

        {/* CV Download Section */}
        <section className="py-20 px-8">
          <motion.div className="max-w-md mx-auto shadow-neumorph p-8 rounded-lg text-center" whileHover={{ scale: 1.05 }}>
            <h2 className="text-2xl font-bold mb-4">Download My Resume</h2>
            <motion.a href="/resume.pdf" download className="inline-flex items-center px-6 py-3 rounded-full shadow-neumorph" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Download className="w-5 h-5 mr-2" /> Download CV
            </motion.a>
          </motion.div>
        </section>

        {/* Footer Section */}
        <Footer isDark={isDark} />
      </div>
    </GradientBlobCursor>
  );
}

export default App;
