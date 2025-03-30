/*
@copyright 2024 by AKS
@license <Apache-2.0 
*/

/*
Components
*/
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: '/images/HTML5.svg',
    label: 'Html',
    desc: 'Web Content'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mysql-official.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/power.svg',
    label: 'MS Power Point',
    desc: 'Presentation'
  },
  {
    imgSrc: '/images/word.svg',
    label: 'MS Word',
    desc: 'Technical Writing'
  },
  {
    imgSrc: '/images/excel.svg',
    label: 'MS Excel',
    desc: 'Data Visualization'
  },
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/php.svg',
    label: 'PhP',
    desc: 'Programming Language'
  }

];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
         <h2 className="headline-2">
            Essential Tools I use
         </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies 
          I use to create exceptional, high-performing websites 
          & applications.
          </p>

          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,1fr))]">
            {
              skillItem.map(({imgSrc, label, desc}, key) => 
                (
                   <SkillCard
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}
                    key={key}
                   />
                ))
            }
          </div>
      </div>


    </section>
  )
}

export default Skill