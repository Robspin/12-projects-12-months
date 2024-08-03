import { SVGProps } from 'react'
import Image from 'next/image'
import { projects, ProjectType } from '../../utils/projects'

function Project({ project }: { project: ProjectType}) {
    const { month, name, key, description } = project

  return (
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Project {month} - {name}</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CalendarIcon className="w-4 h-4"/>
            <span>{month}</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <img
              alt="Project 11"
              className="rounded-lg object-cover aspect-[2/1]"
              height={400}
              src={`/projects/${key}.png`}
              width={800}
          />
          <div className="">
              <div className="flex gap-2 mb-4">
                <Image src={`/projects/favicons/${key}.png`} alt={name} height={20} width={30} />
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>
            <p className="text-gray-500 mb-4">
                {description}
            </p>
              <p className="font-medium p-0">Links: </p>
              <ul>
                  <li className="underline">
                      <a href={`https://${key}.vercel.app`}>View site</a>
                  </li>
                  <li className="underline">
                      <a href={`https://github.com/Robspin/${key}`}>View github</a>
                  </li>
              </ul>
          </div>
        </div>
      </div>
  )
}

export default function Page() {

  return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 overflow-y-auto">
          <section className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">12 Months 12 Projects</h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl text-center">
              Every month I build a new small project. To challenge and grow my skills
            </p>
          </section>
            <section className="flex flex-col items-center justify-center bg-gray-50  ">
              <div className="grid gap-36 p-6 md:p-12 lg:w-[1024px]">
                {projects.map((project, i) => <Project key={i} project={project} />)}
              </div>
            </section>
        </main>
      </div>
  )
}

function CalendarIcon(props: SVGProps<any>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
  )
}
