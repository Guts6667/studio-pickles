"use client";

import { useState, useSyncExternalStore } from "react";
import Marquee from "react-fast-marquee";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export default function InfiniteTextSlider({
  clients = [],
  pauseLabel = "Mettre en pause le défilement",
  resumeLabel = "Reprendre le défilement",
}) {
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  const clientItems = clients.map((name) => (
    <span
      key={name}
      className={`${reducedMotion ? "max-w-full break-words text-center" : "mx-8 whitespace-nowrap"} text-lg uppercase tracking-[0.18em] text-white/72 lg:text-3xl`}
    >
      {name}
    </span>
  ));

  return (
    <>
      <ul className="sr-only">
        {clients.map((name) => <li key={name}>{name}</li>)}
      </ul>
      <div className="relative">
        <div aria-hidden="true">
          {reducedMotion ? (
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 px-4 py-7">
              {clientItems}
            </div>
          ) : (
            <Marquee
              play={!paused}
              pauseOnHover
              speed={38}
              gradient={false}
              className="py-7"
            >
              {clientItems}
            </Marquee>
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>
      {!reducedMotion && clients.length > 1 ? (
        <div className="flex justify-end px-4 pb-4">
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 transition-colors hover:border-white/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {paused ? resumeLabel : pauseLabel}
          </button>
        </div>
      ) : null}
    </>
  );
}
