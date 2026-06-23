import { useEffect, useState } from "react";

export default function ScreenshotLightbox({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  function close() {
    setActiveIndex(null);
  }

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (activeIndex === null) return;

      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      <div className="mt-10 grid gap-8">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-3xl border border-amber-500/25 bg-white/[0.04] text-left shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-amber-400/60 ${
              index === 0 ? "lg:grid lg:grid-cols-[1.4fr_0.6fr]" : ""
            }`}
          >
            <div className="bg-[#020817] p-3">
              <img
                src={image.src}
                alt={image.title}
                className="w-full rounded-2xl border border-white/10 object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <p className="text-xs font-black uppercase tracking-widest text-amber-400">
                Click to enlarge
              </p>
              <h3 className="mt-3 text-2xl font-black text-amber-400">
                {image.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-300">{image.text}</p>
            </div>
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 p-4 backdrop-blur">
          <div className="mx-auto flex h-full max-w-7xl flex-col">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-black text-white">
                  {activeImage.title}
                </h2>
                <p className="text-sm text-slate-400">
                  {activeIndex + 1} of {images.length}
                </p>
              </div>

              <button
                type="button"
                onClick={close}
                className="rounded-xl border border-amber-500/30 px-4 py-2 font-black text-amber-400 hover:bg-amber-500/10"
              >
                Close
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center">
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-0 z-10 rounded-xl bg-[#020817]/80 px-4 py-3 font-black text-amber-400 hover:bg-[#06152a]"
              >
                ‹
              </button>

              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-full max-w-full rounded-2xl border border-amber-500/25 object-contain shadow-2xl shadow-black"
              />

              <button
                type="button"
                onClick={showNext}
                className="absolute right-0 z-10 rounded-xl bg-[#020817]/80 px-4 py-3 font-black text-amber-400 hover:bg-[#06152a]"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}