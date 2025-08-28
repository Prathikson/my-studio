import React from "react";

interface TapeItem {
  type: string; // less strict
  content: string;
  alt?: string;
}


interface CTATapeProps {
  items: TapeItem[];
  speed?: number;
}

const CTATape: React.FC<CTATapeProps> = ({ items, speed = 60 }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-lightGray">
      <div
        className="flex items-center whitespace-nowrap py-10"
        style={{ animation: `scroll-left ${speed}s linear infinite` }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={`${item.content}-${index}`} className="flex-shrink-0 px-8">
            {item.type === "text" ? (
              <span className="text-4xl md:text-8xl font-bold text-carbonGray">
                {item.content}
              </span>
            ) : (
              <img
                src={item.content}
                alt={item.alt || ""}
                className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTATape;
