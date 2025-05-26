

const Home = () => {
  return (
    <section id='home' className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-green-600 bg-clip-text text-transparent leading-right">
                Hi, I am Tejeswara Sai
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                 Hi, I’m Tejeswara Sai Appikatla — a passionate frontend developer and AI enthusiast 
                 based in Florida. With experience building modern, scalable web applications using React,
                 TypeScript, and GraphQL, I love crafting clean user interfaces that solve real-world problems.
                 I hold a Master's in Computer and Information Science from Florida Atlantic University, and 
                 I've previously worked as a Software Development Engineer at Agile Solutions, where I 
                 contributed to enterprise-grade platforms and cloud-based automation tools. I'm always 
                 learning, building, and collaborating — aiming to bridge creativity and logic through 
                 technology.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59,130,246, 0.4)]">
                    View Projects
                </a>
                <a href="#projects" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246, 0.2)] hover:bg-blue-500/10">
                    Contact Me
                </a>
            </div>
        </div>

    </section>
  )
}

export default Home