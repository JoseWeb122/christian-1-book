import { useEffect, useRef, useState } from "react";
import type { Book } from "../data/books";
import BookCover from "./BookCover";
import { Sparkle, Star } from "./Decor";

export default function BookModal({ book, onClose, onNav }: { book: Book; onClose: () => void; onNav: (dir: 1 | -1) => void }) {
  const [tab, setTab] = useState<"about" | "inside">("about");
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTab("about");
    scrollRef.current?.scrollTo({ top: 0 });
  }, [book.id]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onNav]);

  const configured = book.purchaseLinks.filter((l) => l.url.trim() !== "");
  const facts = [
    ["Format", book.format],
    ["Audience", book.audience],
    book.illustrator ? ["Illustrated by", book.illustrator] : null,
    book.publisher ? ["Publisher", book.publisher] : null,
    book.published ? ["Published", book.published] : null,
  ].filter(Boolean) as [string, string][];

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="book-modal-title">
      <div className="fade-in absolute inset-0 bg-midnight/60 backdrop-blur-md" onClick={onClose} />

      <div ref={scrollRef} className="modal-in paper relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-t-[2.5rem] bg-ivory shadow-2xl sm:rounded-[2.5rem]">
        <div className="absolute inset-x-0 top-0 h-72 md:h-full md:w-[42%]" style={{ background: `linear-gradient(160deg, ${book.accent}, ${book.accent}99)` }}>
          {[...Array(8)].map((_, i) => (
            <Sparkle
              key={i}
              className="absolute animate-twinkle"
              color="#fff"
              style={{ width: 8 + (i % 3) * 5, left: `${(i * 29) % 90}%`, top: `${(i * 41) % 85}%`, animationDelay: `${i * 0.4}s`, opacity: 0.7 }}
            />
          ))}
        </div>

        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-2xl text-midnight shadow-lg transition-transform hover:rotate-90"
          aria-label="Close book details"
        >
          ×
        </button>

        <div className="relative grid gap-8 p-6 pt-10 md:grid-cols-[42%_1fr] md:gap-0 md:p-0">
          {/* Cover column */}
          <div className="flex flex-col items-center md:p-10 md:pt-14">
            <div className="relative w-52 sm:w-60 md:w-full md:max-w-[290px]">
              <BookCover book={book} className="rotate-[-2deg] animate-bob" />
              <Star className="absolute -right-5 -top-5 w-12 animate-spin-slow" />
            </div>
            <div className="mt-8 flex gap-3">
              <button onClick={() => onNav(-1)} className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-midnight shadow transition hover:bg-white" aria-label="Previous book">
                ← Prev
              </button>
              <button onClick={() => onNav(1)} className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-midnight shadow transition hover:bg-white" aria-label="Next book">
                Next →
              </button>
            </div>
          </div>

          {/* Details column */}
          <div className="md:p-10 md:pl-12 md:pt-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky/50 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-midnight">
              📚 {book.format} · by Christian Kueng
            </span>
            <h3 id="book-modal-title" className="mt-4 font-display text-4xl font-semibold leading-tight text-midnight md:text-5xl">
              {book.title}
            </h3>
            <p className="mt-2 font-display text-lg text-coral">{book.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-midnight px-3 py-1.5 text-sm font-bold text-ivory">🎈 {book.audience}</span>
              {book.themes.map((t) => (
                <span key={t} className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-midnight ring-1 ring-midnight/10">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 inline-flex rounded-full bg-midnight/5 p-1" role="tablist">
              {(["about", "inside"] as const).map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={`rounded-full px-5 py-2 font-display text-sm font-semibold transition ${tab === t ? "bg-white text-midnight shadow" : "text-midnight/60 hover:text-midnight"}`}
                >
                  {t === "about" ? "About the Story" : "✨ Inside the Story"}
                </button>
              ))}
            </div>

            {tab === "about" ? (
              <div className="fade-in mt-5 space-y-4 text-[1.05rem] leading-relaxed text-midnight/80">
                {book.longDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <dl className="grid gap-3 rounded-3xl bg-white p-5 ring-1 ring-midnight/5 sm:grid-cols-2">
                  {facts.map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs font-extrabold uppercase tracking-wider text-midnight/45">{k}</dt>
                      <dd className="font-display text-lg font-semibold text-midnight">{v}</dd>
                    </div>
                  ))}
                  {book.details?.map((d) => (
                    <div key={d}>
                      <dt className="text-xs font-extrabold uppercase tracking-wider text-midnight/45">Details</dt>
                      <dd className="font-display text-lg font-semibold text-midnight">{d}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : (
              <div className="fade-in mt-5">
                <p className="font-display text-xl font-semibold text-midnight">{book.insideTitle}</p>
                <ul className="mt-4 space-y-3">
                  {book.inside.map((q, i) => (
                    <li
                      key={q}
                      className="flex items-center gap-3 rounded-[1.5rem_1.5rem_1.5rem_0.4rem] bg-white px-5 py-4 font-display text-lg text-midnight shadow-sm ring-1 ring-midnight/5"
                      style={{ marginLeft: `${i * 1.25}rem` }}
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold" style={{ background: book.accent }}>
                        {i + 1}
                      </span>
                      {q}
                    </li>
                  ))}
                </ul>
                {book.awards && (
                  <div className="mt-6 rounded-3xl bg-sun/30 p-5">
                    <p className="font-display text-lg font-semibold">🏆 Awards & honors</p>
                    <ul className="mt-2 space-y-1.5 text-sm font-semibold text-midnight/80">
                      {book.awards.map((a) => (
                        <li key={a} className="flex gap-2">
                          <Sparkle className="mt-1 h-3 w-3 shrink-0" color="#FF947E" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Purchase */}
            <div className="mt-8 rounded-3xl bg-midnight p-6 text-ivory">
              <div className="flex items-center gap-2">
                <span className="text-xl">🛍️</span>
                <h4 className="font-display text-xl font-semibold">Bring this story home</h4>
              </div>
              {configured.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {configured.map((l) => (
                    <a
                      key={l.retailer}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-sun px-5 py-2.5 font-display font-semibold text-midnight transition hover:-translate-y-0.5"
                    >
                      Find it on {l.retailer} ↗
                    </a>
                  ))}
                  <a href="#contact" onClick={onClose} className="rounded-full border border-ivory/30 px-5 py-2.5 font-display font-semibold text-ivory transition hover:bg-white/10">
                    School & bulk orders
                  </a>
                </div>
              ) : (
                <div className="mt-4 flex items-start gap-4 rounded-2xl bg-white/10 p-4">
                  <span className="grid h-11 w-11 shrink-0 animate-bob place-items-center rounded-xl bg-sun text-xl">⏳</span>
                  <div>
                    <p className="font-display text-lg font-semibold text-sun">Purchase link coming soon</p>
                    <p className="mt-1 text-sm text-ivory/75">Retailer links for this book haven't been added yet. Get in touch to be notified.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
