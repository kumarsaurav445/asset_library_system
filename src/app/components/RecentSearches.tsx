interface Props {
    recentSearches: string[];
    handleSearch: (term: string) => void;
    setRecentSearches: (searches: string[]) => void;
}

// component to show recent searches section on landing page.

export default function RecentSearches({
    recentSearches,
    handleSearch,
    setRecentSearches,
}: Props) {

    // Function to update recent searches by removing the search term at the specified index
    const updateRecentSearches = (index: number) => {
        const updatedSearches = [...recentSearches];
        updatedSearches.splice(index, 1);
        setRecentSearches(updatedSearches);
    };
    return (
        <div className="flex gap-2 flex-wrap my-3">
            {recentSearches.map((term, index) => (
                <div
                    key={index}
                    className="flex items-center bg-gray-200 text-sm px-3 py-1 rounded-full hover:bg-gray-300"
                >
                    <button
                        onClick={() => handleSearch(term)}
                        className="mr-2 focus:outline-none"
                    >
                        {term}
                    </button>
                    <button
                        onClick={() =>
                            updateRecentSearches(index)
                        }
                        className="text-gray-500 hover:text-gray-700 text-xs ml-1 focus:outline-none"
                    >
                        ✕
                    </button>
                </div>
            ))}
        </div>
    );
}
