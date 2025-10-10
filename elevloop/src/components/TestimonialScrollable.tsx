"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Users, Award, TrendingUp } from "lucide-react";
import testimonials from "@/data/testimonials";

/*
  Quick tuning variables:
  - CARD_MIN_WIDTH: change this number to make cards smaller or larger (in px)
  - AUTO_SCROLL_SPEED: higher = faster auto scroll
*/
const CARD_MIN_WIDTH = 20; // <--- make this smaller to reduce width
const AUTO_SCROLL_SPEED = 2; // px per frame, tweak for faster/slower

export default function TestimonialsClient() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // refs used to avoid re-renders while dragging / hover
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);

  const [progress, setProgress] = useState(0);

  // Auto-scroll loop using requestAnimationFrame for smoothness
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const getSingleWidth = () => Math.floor(el.scrollWidth / 2) || 1;

    let rafId = 0;
    const step = () => {
      // only auto-scroll when user not hovering or dragging
      if (!isHoveredRef.current && !isDraggingRef.current) {
        const singleWidth = getSingleWidth();
        el.scrollLeft += AUTO_SCROLL_SPEED;

        // seamless loop using duplicated items technique
        if (el.scrollLeft >= singleWidth) {
          el.scrollLeft -= singleWidth;
        } else if (el.scrollLeft < 0) {
          el.scrollLeft += singleWidth;
        }

        // compute progress relative to single (original) content width
        const curr = (el.scrollLeft % singleWidth + singleWidth) % singleWidth;
        setProgress((curr / singleWidth) * 100);
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    // re-calc on resize so loop stays smooth
    const onResize = () => {
      // force recompute next frame by doing nothing here,
      // getSingleWidth reads current el.scrollWidth when used
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Pointer based dragging (works for mouse + touch), robust and performant
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      // only left button for mouse
      if ((e as any).button && (e as any).button !== 0) return;
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      startScrollRef.current = el.scrollLeft;

      // capture pointer to keep receiving pointermove outside element
      try {
        // set pointer capture when available
        (e.target as Element).setPointerCapture?.((e as PointerEvent).pointerId);
      } catch (err) { /* ignore */ }

      // visual and selection lock
      el.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const dx = e.clientX - startXRef.current;
      // invert dx because we want native drag feel (drag left -> scroll right)
      const newScroll = startScrollRef.current - dx;
      el.scrollLeft = newScroll;

      // keep progress in sync while dragging
      const singleWidth = Math.floor(el.scrollWidth / 2) || 1;
      const curr = (el.scrollLeft % singleWidth + singleWidth) % singleWidth;
      setProgress((curr / singleWidth) * 100);
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      try {
        (e.target as Element).releasePointerCapture?.((e as PointerEvent).pointerId);
      } catch (err) { /* ignore */ }
      el.style.cursor = "grab";
      document.body.style.userSelect = "";
    };

    // add listeners
    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    // cleanup
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-accent font-semibold mb-2 tracking-wide uppercase text-sm">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it, hear what our clients say about their experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Users, value: "10+", label: "Happy Clients" },
            { icon: Star, value: "4.9/5", label: "Average Rating" },
            { icon: TrendingUp, value: "98%", label: "Success Rate" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="group bg-white p-5 rounded-xl border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-center">
                  <div className="bg-accent/10 p-3 rounded-xl group-hover:bg-accent transform group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scrollable testimonials container
            - We duplicate testimonials array (concat) to create seamless loop
            - Use inline style minWidth so you can easily change CARD_MIN_WIDTH
        */}
        <div
          ref={scrollRef}
          onMouseEnter={() => (isHoveredRef.current = true)}
          onMouseLeave={() => (isHoveredRef.current = false)}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 cursor-grab select-none"
          // keep built in touch scrolling available, pointer handlers handle drag
        >
          {testimonials.concat(testimonials).map((t, idx) => (
            <div
              key={idx}
              style={{ minWidth: `${CARD_MIN_WIDTH}px` }}
              className="flex-shrink-0 bg-white p-4 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-2">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <div className="font-semibold text-gray-900 text-base">{t.name}</div>
                  <div className="text-gray-600 text-xs">{t.role}</div>
                  <div className="text-gray-500 text-[11px] mt-1">{t.company}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-2">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-2">"{t.message}"</p>

              <div className="inline-flex items-center px-3 py-1 bg-accent/5 border border-accent/20 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                <span className="text-xs font-semibold text-accent">{t.project}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Thin progress line */}
        <div className="relative mt-4 h-[3px] bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-accent transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Satisfaction block */}
        <div className="relative group overflow-hidden rounded-xl mt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative text-center p-8">
            <div className="bg-white/10 p-3 rounded-2xl w-fit mx-auto mb-3 backdrop-blur-sm">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-white/90 text-lg font-medium">Client Satisfaction Rate</div>
            <p className="text-white/80 mt-2 max-w-xl mx-auto">Every project delivered on time and exceeding expectations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
