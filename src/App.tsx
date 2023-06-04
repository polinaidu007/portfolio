import React, { useEffect, useState } from 'react';
import './App.css';

interface ExperienceCardProps {
  cssAddonClass: string;
  company: string;
  location: string;
  role: string;
  content: string[];
  skills: string[];
}

let experienceDetails: ExperienceCardProps[] = [
  {
    cssAddonClass: 'self-start',
    company: 'Cylogic',
    location: 'Hyderabad',
    role: 'Software Engineer',
    content: [
      'Developed cross-platform desktop application using Electron.js.',
      'Refactored a large codebase from python to nestjs.',
      'Developed proper architecture documentation for features that are implemented by me.'
    ],
    skills: ['ElectronJs', 'NestJs', 'Python']
  },
  {
    cssAddonClass: 'self-start',
    company: 'Axiom IO IT Services Pvt Ltd',
    location: 'Hyderabad',
    role: 'Javascript Developer',
    content: [
      'Developed user management software using Node.js, NestJS, Angular, and PostgreSQL.',
      'Implemented complex payment feature requirements using Stripe APIs.',
      'Optimised slow postgres typeorm queries in the code.',
      'Created automated unit tests using Jest.',
      'Led a team of 3 members to write unit tests.',
      'Deployed and managed Kubernetes nodes, pods, services, and storage resources.',
      'Troubleshot and resolved Kubernetes-related issues such as node failures, pod failures, and network issues.',
      'Extensive experience with version control systems, such as Git',
      'Collaborated with project managers and other engineers to ensure project success',
      'Experienced in debugging and troubleshooting applications'
    ],
    skills: ['Javascript', 'Angular', 'NodeJs', 'Postgres', 'Kubernetes']
  }
]

let introContent: string = `I'm Poli and I'm a JavaScript developer with 2+ years of experience. My goal is to use my knowledge of JavaScript and web development to create highly efficient and dynamic applications that contribute to the organization's growth. I am passionate about staying up-to-date with the latest technologies and trends in the industry, and I am eager to take on challenging projects and learn new skills.`

function App() {
  let [state, setState] = useState(false);
  return (
    <>
      <div className={!state ? 'min-h-screen flex flex-col justify-center items-center bg-black  text-white' : 'min-h-screen bg-black  text-white'}>
        <Loading parentSetState={setState} />
        {
          state && (
            <>
              <div className='min-h-[100vh] bg-[#0F172B] welcomeDiv flex justify-center items-center w-[100%] sticky top-0'>
                <div className='w-[50%]'>
                  <h1 className='sm:text-9xl text-5xl'>Welcome.</h1>
                  <span className='leading-relaxed'>
                    {introContent}
                  </span>
                </div>
              </div>
              <div className='bg-white w-[100%] min-h-[100vh] flex-col flex items-center text-black z-[1] relative sm:flex-row'>  {/* EXPERIENCE SECTION*/}
                <div className='sm:m-2 m-2 mt-5 min-w-[50%] flex justify-center'>
                  <h1 className='sm:text-7xl text-5xl'>EXPERIENCE</h1>
                </div>
                <div className='flex flex-col justify-end items-center w-[100%] p-4'>
                  {
                    experienceDetails.map(item => (
                      <ExperienceCard key={item.company}
                        cssAddonClass={item.cssAddonClass}
                        company={item.company}
                        location={item.location}
                        role={item.role}
                        content={item.content}
                        skills={item.skills}
                      />
                    ))
                  }
                </div>

              </div>
            </>


          )
        }
      </div>

    </>

  );
}

function ExperienceCard(props: ExperienceCardProps) {
  return (
    <div className={'flex hover:bg-[#DDDDDD] hover:shadow-lg max-w-full ' + props.cssAddonClass}> {/* Experience Card*/}
      {/* <div className='m-5 p-5 text-slate-500'>
        <span>2018 - PRESENT</span>
      </div> */}
      <div className='flex flex-col items-start m-5 p-5 max-w-full'>
        <div>{/* Heading and Role*/}
          <h1 className='font-medium text-black'>{`${props.company}, ${props.location}`}</h1>
          <span className='text-slate-500'>{props.role}</span>
        </div>
        <br></br>
        <div className='text-slate-600 pl-10 max-w-full'> {/* Description regarding role*/}
          <ul className='list-disc'>
            {
              props.content.map(item => (
                <li key={item}>{item}</li>
              ))
            }
          </ul>
        </div>
        <div className='flex pl-10 max-w-full flex-wrap'> {/* Skills acquired*/}
          {
            props.skills.map(skill => (
              <span className='bg-green-300 bg-opacity-50 rounded-md p-1 m-1 text-green-700 font-bold' key={skill}>{skill}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
}



function Loading({ parentSetState }: any) {
  let [count, setCount] = useState(0);
  let [text, setText] = useState("{ Loading }");
  let [css, setCss] = useState("font-mono text-xl")

  useEffect(() => {
    let period = '.'
    if (count < 5) {
      setTimeout(() => {
        setCount(count + 1);
        setText(`{ Loading${period.repeat(count)} }`);
      }, 500)
    }
    else {
      setCss('hidden')
      parentSetState(true)
    }

  }, [count])
  return (
    <span className={css}>
      {text}
    </span>
  )
}

export default App;
