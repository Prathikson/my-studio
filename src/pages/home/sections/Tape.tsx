import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="relative z-10">
      <div
        className="-rotate-2 -my-6"
        style={{ transformOrigin: "center", overflow: "hidden" }}
      >
        <div className="bg-black py-6">
          <div
            className="flex w-[max-content] gap-6 px-[80px] animate-tapeFlow"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            {[...Array(2)].map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word, i) => (
                  <div
                    key={`${word}-${i}`}
                    className="inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <span className="text-white text-xs uppercase font-semibold tracking-wide">
                      {word}
                    </span>
                    <img
                      src="/assets/x.svg"
                      alt="star"
                      className="w-4 h-4 -rotate-12"
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
