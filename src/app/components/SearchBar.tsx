'use client';
import { useEffect, useState } from "react";


interface Props {
  searchText: string;
  setSearchText: (searchText: string) => void;
}

// Component to showcase search input and its events.

export default function SearchBar({ searchText, setSearchText }: Props) {
  const [localInput, setLocalInput] = useState(searchText);
  
  // Local state to manage input changes and debounce the search text update
  // This helps to avoid updating the search text on every keystroke
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchText(localInput);
    }, 1000);

    return () => {
      clearTimeout(handler); // Clean up timeout on change
    };
  }, [localInput, setSearchText])

  useEffect(() => {
    setLocalInput(searchText);
  }, [searchText]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInput(event.target.value);
  };

  return (
    <div className="relative mb-4 mx-auto">
        <input
            type="text"
            placeholder="Search..."
            value={localInput}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
        </div>
    </div>
  );
}