import {
  FaLocationDot,
  FaBuildingColumns,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa6'
import { SiGooglescholar } from 'react-icons/si'
import profile from '../assets/profile.jpg'
import PublicationCard from '../components/PublicationCard.jsx'
import { PUBLICATIONS } from '../data/publications.js'
import { annotatePublications } from '../utils/publications.js'
import { Link } from 'react-router-dom'

const INFO = [
  { icon: FaLocationDot, text: 'Boston, MA' },
  { icon: FaBuildingColumns, text: 'Northeastern University' },
]

const SOCIAL_LINKS = [
  {
    label: 'Email',
    icon: FaEnvelope,
    href: 'mailto:wen.jiani@northeastern.edu',
    bg: 'bg-rose-500',
  },
  {
    label: 'Google Scholar',
    icon: SiGooglescholar,
    href: 'https://scholar.google.com/citations?hl=en&user=pyZkenUAAAAJ',
    bg: 'bg-blue-600',
  },
  {
    label: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/jianing-wen-/',
    bg: 'bg-[#0A66C2]',
  },
]

const NEWS = [
  {
    date: '2026.06',
    text: (
      <>
        ✈️ Attending{' '}
        <a
          href="https://dis.acm.org/2026/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-700 hover:underline dark:text-sky-300 dark:hover:text-sky-200"
        >
          DIS 2026
        </a>{' '}
        in person to present our work,{' '}
        <a
          href="https://doi.org/10.1145/3800645.3813014"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-700 hover:underline dark:text-sky-300 dark:hover:text-sky-200"
        >
          PrivacyMotiv
        </a>
        🎤📄
      </>
    ),
  },
  {
    date: '2025.03',
    text: (
      <>
        🎉 Excited to share that I will be joining{' '}
        <a
          href="https://peach.codes/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-700 hover:underline dark:text-sky-300 dark:hover:text-sky-200"
        >
          PEACH Lab
        </a>{' '}
        at Northeastern University in Fall 2025!
      </>
    ),
  },
]

const INTERESTS = [
  {
    title: 'Human-Centered Privacy',
    body: "I study privacy challenges from a human-centered perspective, with a focus on understanding people's needs, experiences, and perceptions of privacy in emerging technologies.",
  },
  {
    title: 'Risks and Trustworthiness in LLMs and AI Agents',
    body: "I investigate emerging risks associated with LLMs and increasingly capable AI agents. My current work examines how agentic capabilities can amplify privacy threats and how these risks can be better understood and mitigated through both empirical studies and computational methods.",
  },
  {
    title: 'Human-AI Interaction & Collaboration',
    body: 'I am broadly interested in how people interact and collaborate with AI systems. My work explores how the design and behavior of AI systems shape human decision-making, trust, and control, with the goal of informing the design of more effective and trustworthy human-AI systems.',
  },
]

const TEACHING = [
  'CSCI 4707, Practice of Database Systems (Teaching Assistant), Spring 2025, UMN-TC',
  'CSCI 2033, Elementary Computational Linear Algebra (Teaching Assistant), Spring 2024, UMN-TC',
  'CSCI 5302, Analysis of Numerical Algorithms (Teaching Assistant), Spring 2023, UMN-TC',
]

const HONORS = ['Global Excellence Scholarship (2021–2023)']

function FullWidthSection({ title, children }) {
  return (
    <section className="py-4">
      <h2 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-neutral-100">{title}</h2>
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-800/60">
        {children}
      </div>
    </section>
  )
}

function DiamondList({ items, accent }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base text-slate-800 dark:text-neutral-200">
          <span
            className={`mt-1.5 h-2 w-2 shrink-0 rotate-45 rounded-[2px] ${accent}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  return (
    <div>
      {/* Top section: 1/3 left column, 2/3 right column */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Left column */}
        <div className="flex flex-col md:col-span-1">
          <div
            data-no-glow
            className="mx-auto aspect-[4/5] w-[86%] rounded-full border-2 border-dashed border-blue-200 bg-white p-2 shadow-md dark:border-sky-700 dark:bg-neutral-900"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <img
                src={profile}
                alt="Jianing Wen"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-4 flex items-start justify-between gap-4">
            <ul className="space-y-2.5">
              {INFO.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-sm whitespace-nowrap text-slate-800 dark:text-neutral-200">
                  <Icon className="text-blue-600 dark:text-sky-300" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="flex shrink-0 gap-2">
              {SOCIAL_LINKS.map(({ label, icon: Icon, href, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  title={label}
                  aria-label={label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-base text-white shadow-sm transition-transform hover:scale-110 ${bg}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-1 min-h-40 flex-col rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/60 p-4 dark:border-sky-700 dark:bg-sky-950/30">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-neutral-100">
              📻 Latest News
            </h2>
            <ul className="news-scroll min-h-0 flex-1 space-y-3 overflow-y-scroll pr-2">
              {NEWS.map((item) => (
                <li key={item.date} className="flex gap-2 text-base text-slate-800 dark:text-neutral-200">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-sky-300" />
                  <span>
                    <span className="font-medium text-slate-900 dark:text-neutral-100">
                      {item.date}:
                    </span>{' '}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-semibold text-center text-slate-900 dark:text-neutral-100"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Jianing Wen
          </h1>
          <p className="mt-4 text-base text-slate-900 dark:text-neutral-100">
            I'm a PhD student in the Khoury College of Computer Sciences at Northeastern University, supervised by Prof.{' '}
            <a
              href="https://tianshili.me/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline dark:text-sky-300 dark:hover:text-sky-200"
            >
              Tianshi Li
            </a>{' '}
            in the{' '}
            <a
              href="https://peach.codes/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline dark:text-sky-300 dark:hover:text-sky-200"
            >
              PEACH Lab
            </a>
            . Previously, I earned both my Master's and Bachelor's degrees in
            Computer Science from the University of Minnesota - Twin
            Cities. I worked as a research assistant in the{' '}
            <a
              href="https://minnesotanlp.github.io/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline dark:text-sky-300 dark:hover:text-sky-200"
            >
              Minnesota NLP group
            </a>
            , where I was advised by Prof.{' '}
            <a
              href="https://dykang.github.io/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline dark:text-sky-300 dark:hover:text-sky-200"
            >
              Dongyeop Kang
            </a>
            .
          </p>
          <p className="mt-3 text-base font-semibold text-slate-900 dark:text-neutral-100">
            ✉️ Always open to collaborations, random conversations, 
            or just making new friends - feel free to say hi!
          </p>
          <p className="mt-3 text-base text-slate-900 dark:text-neutral-100">
            My research lies at the intersection of Human-Computer Interaction (HCI), Privacy, and Artificial Intelligence (AI). I study emerging privacy challenges in digital and AI-driven environments, combining human-centered perspectives with technical approaches to understand and address these problems.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-slate-900 dark:text-neutral-100">
            💭 Research Interests
          </h2>
          <div className="space-y-5">
            {INTERESTS.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <span className="w-10 shrink-0 text-2xl font-bold text-blue-300 select-none dark:text-sky-700">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-lg font-medium text-slate-900 dark:text-neutral-100">{item.title}</p>
                  <p className="text-base text-slate-900 dark:text-neutral-100">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-neutral-700" />

      {/* Full-width sections */}
      <FullWidthSection title="📄 Selected Publications and Preprints">
        {annotatePublications(PUBLICATIONS).slice(0, 2).map(({ pub, showYear, showDivider }) => (
          <PublicationCard
            key={pub.title}
            publication={pub}
            showYear={showYear}
            showDivider={showDivider}
          />
        ))}
        <Link
          to="/publications"
          className="mt-2 inline-block text-base font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-sky-300 dark:hover:text-sky-200"
        >
          View all publications →
        </Link>
      </FullWidthSection>

      <FullWidthSection title="📖 Teaching">
        <DiamondList items={TEACHING} accent="bg-emerald-400" />
      </FullWidthSection>

      <FullWidthSection title="🎖 Honors and Awards">
        <DiamondList items={HONORS} accent="bg-amber-400" />
      </FullWidthSection>

      <FullWidthSection title="🌟 More About Me">
        <p className="text-base text-slate-800 dark:text-neutral-200">
          I love outdoor activities, nature and music!
        </p>
        <div className="mt-3">
          <DiamondList
            items={["In my spare time, I enjoy 🏊‍♀️, 🎾, 🏞️, 🚶🏻‍♀️, 🤿, ⛷️, and 🏂.", 'I play the flute! 🎶']}
            accent="bg-rose-300"
          />
        </div>
      </FullWidthSection>
    </div>
  )
}
