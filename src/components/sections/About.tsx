const About = () => {
  const frontendSkills = ["React", "JavaScript", "Tailwind CSS", "TypeScript"];
  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            A passionate software developer with a Master's degree in Computer
            and Information Science from Florida Atlantic University, graduating
            with a 3.81 CGPA. My academic interests span artificial
            intelligence, information retrieval, cloud security, and data
            science.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech,key)=>(
                    <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    ">
                        {tech}
                    </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech,key)=>(
                    <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    ">
                        {tech}
                    </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 📚 Education </h3>
                <ul className=" list-inside text-gray-300 space-y-2">
                    <li className="font-semibold">
                        <strong className="text-blue-500">Master's in Computer and information Sciences</strong> - Florida Atlantic Unversity (2023-2025)
                    </li>
                    <li className="pl-8">
                        <strong className="text-blue-300">Relevant Coursework</strong>: Analysis of Algorithms, Information Theory, Intro to Data Science, Software Engineering, Cloud Security, Artificial Intelligence, Information Retrieval, Natural Language Processing, Data Management and Analysis with Excel, Internet of Things
                    </li>
                    <li className="pl-8">
                       <strong className="text-blue-300">Teaching Assistant</strong>: Served as a Teaching Assistant for the Artificial Intelligence Course under Prof. Xingquan Zhu for the Fall 2025 Semester of Graduates. 
                    </li>
                </ul>

                <ul className=" list-inside text-gray-300 space-y-2 pt-4">
                    <li className="font-semibold">
                        <strong className="text-blue-500">Bachelor of Technology in Computer Science</strong> - Koneru Lakshmaiah Unversity (2018-2022)
                    </li>
                    <li className="pl-8">
                        <strong className="text-blue-300">Relevant Coursework</strong>: Data Science, Software Engineering, Data Structures and Algorithms, Cloud Computing, Databases, Data Visualization, Single Variable Calculus and Matrix Algebra, Multivariable Calculus, Digital System Design.
                    </li>
                    <li className="pl-8">
                       <strong className="text-blue-300">Competitive Coding Tutor</strong>: Served as a Competitive Coding Tutor, mentoring junior students in the fundamentals of C programming and introducing them to core algorithms and problem-solving strategies for competitive programming. Conducted hands-on sessions and curated challenges to strengthen their logical thinking and coding confidence.
                    </li>
                    <li className="pl-8">
                       <strong className="text-blue-300">Peer Mentor</strong>: Peer Mentor for Data Science Course, where I guided fellow students through core concepts and practical applications. I also designed a comprehensive and interactive Data Science Lab Manual, featuring hands-on exercises and skill-building sessions to make learning both effective and engaging.
                    </li>
                </ul>
            </div>
        </div>
        <div className="mt-8">
             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold"> <strong className="text-blue-500">Software Development Engineer</strong> - Agile Solutions (May 2022 - Dec 2022)</h4>
                        <p>Built enterprise apps using SAP HANA for TIMP Projects and developed scalable UI components with React, TypeScript, and GraphQL. Contributed to system modernization through the Automated Migration Tool, boosting performance and scalability of the legacy systems.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold"> <strong className="text-blue-500">Intern Software Developer</strong> - Agile Solutions (May 2021 - May 2022)</h4>
                        <p>Developed frontend components for the Agile Business Platform's Process Builder. Built POCs for ETL workflows using Cloud Functions and automated customer data verification with Google OCR APIs.</p>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
