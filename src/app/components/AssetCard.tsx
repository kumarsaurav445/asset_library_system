import { Asset } from "../data/mockData";

// This component is being used to show asset in a card.
// It accepts 2 props, one to showcase asset info and click event to open popup modal.

export default function AssetCard({ asset, onClick }: { asset: Asset; onClick: (asset: Asset) => void; }) {
  return (
    <div className={`flex border border-gray-300 p-3 rounded-md shadow-sm ${asset.type !== 'Featured' ? 'cursor-pointer' : 'cursor-not-allowed'}`} onClick={() => onClick(asset)}>
      <img src={asset.thumbnailUrl} alt={asset.title} className="w-16 h-16 object-cover" />
      <div className="ml-3">
        <h3 className="text-sm font-semibold">{asset.title}</h3>
        <p className="text-xs text-gray-500">{asset.shortDescription}</p>
        { asset.lastUpdated && <p className="text-xs text-gray-300">{asset.lastUpdated}</p>}
      </div>
    </div>
  );
}
