'use client';
import { AssetTypeLabel, mockAssets } from "./data/mockData";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchByType from "./components/SearchByType";
import { useEffect, useState } from "react";
import FilteredAssetByTypeOrSearchText from "./components/FiltertedAssetByTypeOrSearchText";
import RecentSearches from "./components/RecentSearches";



export default function Dashboard() {
  
  // default selected type is Featured
  const [selectedTypeLabel, setSelectedTypeLabel] = useState<AssetTypeLabel>({
    label: "Featured",
    value: "Featured"
  });
  // default counts for showing assets
  // Initially set to 2, this is getting updated by +2 on clicking "Show More" button
  const [showFilteredAssetCount, setShowFilteredAssetCount] = useState(2);
  const [showTrendingAssetCount, setShowTrendingAssetCount] = useState(2);
  // Recent searches state
  // This will store the last 3 searches made by the user
  const [recentSearches, setRecentSearches] = useState<string[]>([]);


  const [searchText, setSearchText] = useState("");

  // Filtered assets based on selected type
  // Initially set to Featured assets
  // This will be updated based on search text or selected type

  let filteredAssets = mockAssets.filter(asset => asset.type === selectedTypeLabel.value);
  let trendingAssets = mockAssets.filter(asset => asset.isTrending && asset.type === selectedTypeLabel.value);
  // If search text is provided, filter assets based on search text
  // This will filter both filteredAssets and trendingAssets
  if (searchText) {
      const searchLower = searchText.toLowerCase();
      filteredAssets = filteredAssets.filter(asset =>
        asset.title.toLowerCase().includes(searchLower) ||
        asset.shortDescription.toLowerCase().includes(searchLower)
      );
      trendingAssets = trendingAssets.filter(asset =>
        asset.title.toLowerCase().includes(searchLower) ||
        asset.shortDescription.toLowerCase().includes(searchLower)
      );
  }
  // Effect to update recent searches
  // This will add the search text to recent searches if it's not already present
  useEffect(() => {
    if(searchText.length === 0 || recentSearches.includes(searchText)) return;
    setRecentSearches(prev => {
    const updated = [searchText, ...prev.filter(t => t !== searchText && !searchText.includes(t))];
      return updated.slice(0, 3); // Keeping only last 3 searches
    });
  }, [searchText]);

  useEffect(() => {
    // Reset the count when search text or selected type changes
    setShowFilteredAssetCount(2);
    setShowTrendingAssetCount(2);
  }, [searchText, selectedTypeLabel]);

  const showMoreFilteredAssets = () => {
    setShowFilteredAssetCount(prevCount => prevCount + 2);
    // Logic to show more assets, e.g., fetch next page of results
  }

  const showMoreTrendingAssets = () => {
    setShowTrendingAssetCount(prevCount => prevCount + 2);
    // Logic to show more trending assets, e.g., fetch next page of results
  }

  return (
    <div className="bg-gray-100 p-3">
      <Header />
      <div className="w-3/5 relative mx-auto">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        {
          recentSearches.length > 0 && 
          <RecentSearches recentSearches={recentSearches} handleSearch={setSearchText} setRecentSearches={setRecentSearches} />
        }
        <SearchByType selectedType={selectedTypeLabel.value} setSelectedTypeLabel={setSelectedTypeLabel} />
        <div className="max-h-[calc(100vh-240px)] overflow-y-auto space-y-4">
          <FilteredAssetByTypeOrSearchText title={selectedTypeLabel.label} description="Curated top picks for this week" filteredAssets={filteredAssets.slice(0, showFilteredAssetCount)} showMoreButton={filteredAssets.slice(0, showFilteredAssetCount).length < filteredAssets.length} showMoreFilteredAssets={showMoreFilteredAssets}/>
          <FilteredAssetByTypeOrSearchText title={"Trending"} description="Most popular by comunity" filteredAssets={trendingAssets.slice(0, showTrendingAssetCount)} showMoreButton={trendingAssets.slice(0, showTrendingAssetCount).length < trendingAssets.length} showMoreFilteredAssets={showMoreTrendingAssets}/>
        </div>
      </div>
    </div>
  );
}
