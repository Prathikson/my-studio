import React, { useState, useRef, useEffect } from "react";

export interface PrivacyVersion {
  version: string;
  date: string;
  content: React.ReactNode;
  href?: string;
}

interface Props {
  versions: PrivacyVersion[];
  selected: PrivacyVersion;
  onSelect: (version: PrivacyVersion) => void;
}

export default function PrivacyPolicySwitcher({ versions, selected, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="underline text-blue-600 hover:text-blue-800 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={open}
      >
        Select Privacy Policy Version: {selected.version}
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-56 bg-lightGray border border-gray-300 rounded shadow-lg">
          {versions.map((v) => (
            <button
              key={v.version}
              type="button"
              onClick={() => {
                onSelect(v);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-white ${
                v.version === selected.version ? "font-medium bg-gray-200" : ""
              }`}
            >
              {v.version} — {v.date}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
