import ReviewOnScroll from "../ReviewOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <ReviewOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* OWL Assistants */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">OWL Assistants</h3>
                <p className="text-gray-400 mb-4">Developed Owl Assistants, a comprehensive Teaching Assistant (TA) Management System designed to streamline the recruitment, application, and assignment process for TAs in academic institutions. Built using React for the frontend, JavaScript for application logic, and Firebase for backend services including authentication, database, and real-time updates.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {['React','Javascript','TypeScript','Firebase','JIRA'].map((tech,key)=>(
                    <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                        {tech}
                    </span>
                ))}
                </div>
                
            </div>

        {/* Agile Business Platform - Process Builder */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">Agile Business Platform - Process Builder</h3>
                <p className="text-gray-400 mb-4">Worked as a React Frontend Developer on the Agile Business Platform, designing and building reusable UI components using React, JavaScript, and TypeScript. Integrated GraphQL APIs for efficient data handling, improving performance and user experience in an Agile environment.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {['React', 'TypeScript', 'GraphQL', 'StoryBoard', 'HTML', 'CSS'].map((tech,key)=>(
                    <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                        {tech}
                    </span>
                ))}
                </div>
                
            </div>

        {/* TIMP - Petrobras */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">TIMP - Petrobras</h3>
                <p className="text-gray-400 mb-4">Fixed over 100 bugs in the Tax Intelligent Management Platform (TIMP) for Petrobras, improving platform stability and usability with SAP HANA</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {['SAP HANA'].map((tech,key)=>(
                    <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                        {tech}
                    </span>
                ))}
                </div>
                
            </div>

        {/* SWITX - ETL Builder */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">SWITX - Automated Migration Tool</h3>
                <p className="text-gray-400 mb-4">Developed a web application that integrates Source APIs (Google Sheets, Google Big Query) and Transformation APIs for efficient data conversion, cleaning, and refactoring</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {['Google Cloud', 'Python', 'ETL', 'Big Query'].map((tech,key)=>(
                    <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                        {tech}
                    </span>
                ))}
                </div>
                
            </div>

        {/* SWITX - Automated Migration Tool */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">SWITX - Automated Migration Tool</h3>
                <p className="text-gray-400 mb-4">Contributed to migrating legacy systems using an Automated Migration Tool, improving system performance and scalability.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {['Machine Learning', 'TypeScript', 'React'].map((tech,key)=>(
                    <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                        {tech}
                    </span>
                ))}
                </div>
                
            </div>

        {/* Agile Knowledge Builder */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">Agile Knowledge Builder</h3>
                <p className="text-gray-400 mb-4">Developed a model to extract text from documents and images, leveraging OCR techniques like Google's Tesseract to automate data capture from unstructured sources.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'Tesseract OCR', 'Google Cloud'].map((tech,key)=>(
                    <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                        {tech}
                    </span>
                ))}
                </div>
                
            </div>

        {/* Analysis and Virtualization of Child Mortality Rate */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">Analysis and Virtualization of Child Mortality Rate</h3>
                <p className="text-gray-400 mb-4">Visualized and analyzed global child mortality data from the WHO using Python and Tableau, applying data visualization techniques to uncover trends, regional disparities, and key health insights.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'Tableau', 'Excel'].map((tech,key)=>(
                    <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                        {tech}
                    </span>
                ))}
                </div>
                
            </div>

        {/*Sports Management System*/}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2">Sports Management System</h3>
                <p className="text-gray-400 mb-4">Built a full-stack Sports Management System with HTML, CSS, JavaScript, and MySQL to manage player records, teams, schedules, and results. Features an easy-to-use interface for admins and coaches to update data and track performance, improving event coordination and team management.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {['JavaScript', 'HTML', 'CSS', 'MySQL'].map((tech,key)=>(
                    <span key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                        {tech}
                    </span>
                ))}
                </div>
                
            </div>
        </div>
      </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Projects;
