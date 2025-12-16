import React from "react";

interface ImageItem {
  src: string;
  alt?: string;
}

interface ImageSliderProps {
  images: ImageItem[];
  autoPlayMs?: number;
  heightClass?: string; // e.g. "h-40", "h-56"
}

export default function ImageSlider({ images, autoPlayMs = 3000, heightClass = "h-40" }: ImageSliderProps) {
  const [index, setIndex] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);
  const timerRef = React.useRef<number | null>(null);

  const goNext = React.useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const goPrev = React.useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  React.useEffect(() => {
    if (!images.length) return;
    timerRef.current && window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(goNext, autoPlayMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [goNext, autoPlayMs, images.length]);

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    const threshold = 40; // swipe sensitivity
    if (delta > threshold) goNext();
    else if (delta < -threshold) goPrev();
  };

  if (!images.length) return null;

  return (
    <div className={`w-full relative overflow-hidden rounded-xl bg-gray-200 ${heightClass}`} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <img
            key={img.src + i}
            src={img.src}
            alt={img.alt || `slide-${i}`}
            className={`w-full h-full object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      {/* Controls */}
      <button aria-label="prev" onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-95">
        <span className="text-lg">‹</span>
      </button>
      <button aria-label="next" onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full w-8 h-8 flex items-center justify-center active:scale-95">
        <span className="text-lg">›</span>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} aria-label={`go-${i}`} onClick={() => setIndex(i)} className={`w-2.5 h-2.5 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}
