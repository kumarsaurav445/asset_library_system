import BaseModal from "./BaseModal";
import { Asset } from "../data/mockData";

// Component to load KPI asset type Modal

export default function KPIModal({
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
    <div className="flex justify-center items-center">
        <div className="pr-4 border-r border-gray-300">
            <p className="text-sm">Metric Id</p>
            <p className="text-md">{asset.metricId || "N/A"}</p>
        </div>
    <div className="pl-4">
        <p className="text-sm">Calculation</p>
        <p className="text-md">{asset.calculation || "N/A"}</p>
    </div>
    </div>
      <div className="flex items-center justify-center h-30 w-full bg-gray-100">
        <p className="text-lg font-semibold text-blue-800">Visual Content will come here</p>
      </div>
      <div className="text-sm space-y-3">
        <div>
          <h4 className="font-semibold my-2">Business Questions</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {asset.businessQuestions?.map((businessQuestion, index) => (
              <div className="bg-gray-100 rounded-md shadow-sm px-3 py-2" key={index}>
                <p className="font-semibold truncate">{businessQuestion.question}</p>
                <p className="text-gray-600 line-clamp-2">{businessQuestion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseModal>
  );
}
