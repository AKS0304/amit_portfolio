/*
@copyright 2024 by AKS
@license <Apache-2.0 
*/

/*
Components      
*/
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/images/project-1.png',
      title: 'Full stack Hotel Booking Management System',
      tags: ['API', 'MVC', 'Development'],
      
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'Chatbot',
      tags: ['API', 'Development'],
      projectLink: 'https://chatbot-ga8s.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.png',
      title: 'Full stack student registration ',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://aks0304.github.io/Student_Registration/'
    },
    {
      imgSrc: '/images/project-4.png',
      title: 'Quiz app',
      tags: ['React.js','Development'],
      projectLink: 'https://quiz-test-nine-tan.vercel.app/'
    },
    {
      imgSrc: '/images/project-5.png',
      title: 'ToDo list',
      tags: ['Javascript'],
      projectLink: 'https://aks0304.github.io/todoList/'
    },
    {
      imgSrc: '/images/project-6.png',
      title: 'Calculator',
      tags: ['Java','GUI'],
      
    },
    
  ];

const Work = () => {
  return (
    <section 
    id="work" 
    className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8">
               My Portfolio highlights 
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, 
                key) => (
                   <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                   />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work