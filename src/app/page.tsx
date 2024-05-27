import { SVGProps } from 'react'

function Project({ number }: { number: number }) {
  return (
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Month</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CalendarIcon className="w-4 h-4"/>
            <span>11/01/2023 - 11/30/2023</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <img
              alt="Project 11"
              className="rounded-lg object-cover aspect-[2/1]"
              height={400}
              src="/next.svg"
              width={800}
          />
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Project {String(number)}</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">12 Months 12 Projects</h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl text-center">
              Follow along as we showcase a new project every month throughout the year.
            </p>
          </section>
          <div className="grid gap-12 p-6 md:p-12">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <Project key={n} number={n} />)}
          </div>
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
