import type { Book } from "../data/books";

/** Real published cover with a subtle book-spine treatment. */
export default function BookCover({ book, className = "" }: { book: Book; size?: "md" | "lg"; className?: string }) {
  return (
    <div className={`book-cover relative overflow-hidden rounded-[4px_14px_14px_4px] bg-white ${className}`}>
      <img src={book.cover} alt={`Cover of ${book.title} by Christian Kueng`} className="block h-auto w-full" loading="lazy" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 via-white/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/15" />
    </div>
  );
}
