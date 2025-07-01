import { Asset } from "../data/mockData";
import AssetCard from "./AssetCard";
import AssetGrid from "./AssetGrid";


interface Props {
    title: string;
    description: string;
    filteredAssets: Asset[];
    showMoreButton: boolean;
    showMoreFilteredAssets?: () => void;
}

// This component is used to showcase filters asset grid on landing page based on search by text or type.

export default function FilteredAssetByTypeOrSearchText({ title,description, filteredAssets, showMoreButton, showMoreFilteredAssets }: Props) {
  return (
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mb-6">{description}</p>
      <div>
        {filteredAssets.length ? 
            <div className="">
                <AssetGrid assets={filteredAssets} />
                {showMoreButton && (
                    <div className="p-4">
                        <a className="flex justify-end cursor-pointer text-blue-600 hover:text-blue-800" onClick={showMoreFilteredAssets}>Show more</a>
                    </div>
                )}
            </div> : (
            <div className="bg-red-100 p-4 rounded text-red-700">No assets found. Click on "Request" button to create a new asset.</div>
        )}
      </div>
    </div>
  );
}
