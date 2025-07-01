import BaseModal from "./BaseModal";
import { Asset } from "../data/mockData";

// Component to load Layout asset type Modal

export default function LayoutsModal({
  asset,
  isOpen,
  onClose,
}: {
  asset: Asset;
  isOpen: boolean;
  onClose: () => void;
}) {

  const defaultMetricId = "N/A"; // Default value if metricId is not provided
  return (
    <BaseModal
      title={asset.title}
      type={asset.type}
      tags={asset.tags || []}
      shortDescription={asset.shortDescription}
      completeDescription={asset.completeDescription}
      isOpen={isOpen}
      assetLink={asset.assetLink || ""}
      thumbnailUrl={asset.thumbnailUrl}
      onClose={onClose}
      footerButtonText={asset.isFavorite ? "Remove Favourite Item" : "Favourite Item"}
      onFooterButtonClick={() => {
        asset.isFavorite = !asset.isFavorite;
        alert(asset.isFavorite ? 'Added to Favourite Item':'Removed from Favourite Item')
        onClose();
    }}
    >
    <div className="flex justify-center items-center mb-4">
        <div className="px-5 border-r border-gray-300">
            <p className="text-md text-semi-bold">{asset.kpiUsed || "N/A"}</p>
            <p className="text-sm text-gray-500">Used <i className="fa-solid fa-circle-info"></i></p>
        </div>
        <div className="px-5 border-r border-gray-300">
            <p className="text-md text-semi-bold">{asset.kpiType || "N/A"}</p>
            <p className="text-sm text-gray-500">Type</p>
        </div>
        <div className="px-5 border-r border-gray-300">
            <p className="text-md text-semi-bold">{asset.pageNo || "N/A"}</p>
            <p className="text-sm text-gray-500">Page No.</p>
        </div>
        <div className="px-5">
            <p className="text-md text-semi-bold">{asset.lastUpdated || "N/A"}</p>
            <p className="text-sm text-gray-500">Last Updated</p>
        </div>
    </div>
      <div className="flex items-center justify-center h-45 w-full bg-gray-100">
        <p className="text-lg font-semibold text-blue-800">Visual Content will come here</p>
      </div>
    </BaseModal>
  );
}
