import authorPhoto from "../assets/author-photo.jpg";
import { BookIcon, Butterfly, Eyebrow, Sparkle, Star, Wave } from "./Decor";

const highlights = [
  {
    icon: "🎨",
    color: "#FFD66B",
    title: "Artist at Heart",
    text: "Studied design & visual communications at Chaffey College and fine & studio arts at Cal State Fullerton, working as a freelance artist along the way.",
  },
  {
    icon: "🍎",
    color: "#FF947E",
    title: "30+ Years in Education",
    text: "Taught grades K, 2 and 4–6, then served as principal, director of curriculum & assessment, and assistant superintendent.",
  },
  {
    icon: "🎓",
    color: "#A8DDBB",
    title: "Lifelong Learner",
    text: "M.A. in Education (Azusa Pacific), Ed.D. in Organizational Leadership (University of La Verne), and graduate of the Institute of Children's Literature.",
  },
];

const timeline = [
  ["🍊", "Grew up in Ontario, California", "Among orange groves, grape vineyards and dairies, the oldest of four sons of Swiss parents Robert and Margrit Kueng."],
  ["✏️", "Loved art & creative writing", "His favorite school subjects, and the spark behind a lifelong desire to write, draw and create."],
  ["🏫", "Classroom to district leadership", "Three decades helping children, teachers and schools grow as an educator and administrator."],
  ["📚", "Author of picture books & fantasy", "From Three Genie Brothers, his first juvenile fantasy novel, to the award-winning Caleb's Adventures with Granddad."],
];

export default function About() {
  return (
    <section id="about" className="relative">
      <Wave fill="var(--color-band-a)" />
      <div className="paper relative overflow-hidden bg-band-a pb-24 pt-10 md:pb-32">
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-sun/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-white/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Portrait */}
          <div className="reveal relative mx-auto w-full max-w-[440px]">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-sun" />
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[55%_45%_45%_55%/45%_55%_45%_55%] bg-coral/70" />
            <div className="relative overflow-hidden rounded-[48%_52%_46%_54%/52%_46%_54%_48%] border-8 border-white shadow-2xl">
              <img src={authorPhoto} alt="Portrait of author Christian “Chris” Kueng" className="aspect-square w-full object-cover" loading="lazy" />
            </div>

            <div className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-full bg-white px-5 py-2.5 shadow-lg">
              <p className="font-display text-lg font-semibold leading-none text-midnight">
                Kueng <span className="text-sm font-medium text-midnight/55">· pronounced “King”</span>
              </p>
            </div>

            <div className="absolute -right-2 top-4 animate-float rounded-3xl bg-midnight p-4 text-ivory shadow-xl md:-right-8">
              <BookIcon className="w-10" />
              <p className="mt-1 font-display text-sm font-semibold">Author · Artist</p>
              <p className="font-display text-sm font-semibold text-sun">Educator</p>
            </div>
            <Butterfly className="absolute -left-4 bottom-24 w-10 animate-flutter" color="#C9B8F5" />
            <Star className="absolute left-10 -top-10 w-10 animate-twinkle" />
          </div>

          {/* Copy */}
          <div>
            <div className="reveal">
              <Eyebrow color="#FF947E">Meet Christian “Chris” Kueng</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-midnight sm:text-5xl lg:text-[3.6rem]">
                Every Great Adventure Begins With a <span className="text-coral">Story.</span>
              </h2>
            </div>
            <p className="reveal mt-7 text-xl leading-relaxed text-midnight/80">
              My name is Christian Kueng (pronounced King), but everyone calls me “Chris.” I always had a deep desire to
              write, draw, and create things since I was a child. I grew up in Ontario, California, when there were orange
              groves, grape vineyards, and dairies throughout the Southland. My parents, Robert and Margrit Kueng, came from
              Switzerland, and I am the oldest of their four sons.
            </p>
            <p className="reveal mt-4 text-lg leading-relaxed text-midnight/70">
              As a youngster I loved going to school. My favorite subjects were art and creative writing. I still live in
              Ontario, where I spend my spare time between my family and my creative hobbies. I enjoy going to schools to
              talk about writing and providing writing workshops for teachers and students (grades 4–8).
            </p>

            <blockquote className="reveal relative mt-8 rounded-3xl bg-white/85 p-6 shadow-sm ring-1 ring-midnight/5">
              <Sparkle className="absolute -left-2 -top-2 w-6" color="#FF947E" />
              <p className="font-display text-2xl leading-snug text-midnight">“Every reader is an author's best friend.”</p>
              <footer className="mt-2 text-sm font-bold text-midnight/55">Christian Kueng, Ed.D.</footer>
            </blockquote>
          </div>
        </div>

        {/* Journey timeline */}
        <div className="relative mx-auto mt-20 max-w-7xl px-5 md:px-8">
          <h3 className="reveal text-center font-display text-3xl font-semibold text-midnight sm:text-4xl">Chris's Story So Far</h3>
          <ol className="relative mt-10 grid gap-6 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-8 hidden h-1 rounded-full bg-[repeating-linear-gradient(90deg,#263653_0_10px,transparent_10px_20px)] opacity-15 md:block" />
            {timeline.map(([icon, t, d], i) => (
              <li key={t} className="reveal relative text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-white text-2xl shadow-md" style={{ background: ["#FFD66B", "#FF947E", "#A8DDBB", "#C9B8F5"][i] }}>
                  {icon}
                </span>
                <p className="mt-4 font-display text-lg font-semibold text-midnight">{t}</p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-midnight/65">{d}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Highlights */}
        <div className="relative mx-auto mt-20 grid max-w-7xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(38,54,83,0.5)] transition-transform duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 transition-transform duration-700 group-hover:scale-150" style={{ background: h.color }} />
              <span className="relative grid h-16 w-16 place-items-center rounded-2xl text-3xl shadow-inner transition-transform duration-500 group-hover:rotate-12" style={{ background: h.color }}>
                {h.icon}
              </span>
              <h3 className="relative mt-6 font-display text-2xl font-semibold text-midnight">{h.title}</h3>
              <p className="relative mt-3 leading-relaxed text-midnight/70">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Wave fill="var(--color-band-a)" flip className="bg-ivory" />
    </section>
  );
}
