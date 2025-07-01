'use client';
import { AssetType, AssetTypeLabel } from "../data/mockData";

interface Props {
  selectedType: string;
  setSelectedTypeLabel: (assetTypeLabel: AssetTypeLabel) => void;
}

// UI labels shown to users
const assetTypeLabels = ["Featured", "KPI", "Layouts", "Storyboards"];

// Maps UI labels to internal data values
const FILTER_LABEL_TO_TYPE_MAP: Record<string, "Featured" | AssetType> = {
  Featured: "Featured",
  KPI: "KPI",
  Layouts: "Layout",
  Storyboards: "Story_Board"
};

// This component is used to showcase different asset type filter section.

export default function SearchByType({ selectedType, setSelectedTypeLabel }: Props) {

  return (
    <div className="rounded-md p-1 mb-4 flex justify-between bg-gray-200">
      {assetTypeLabels.map((label) => {
        const mappedValue = FILTER_LABEL_TO_TYPE_MAP[label];

        return (
          <p
            key={label}
            className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition 
              ${selectedType === mappedValue ? 'bg-white text-black shadow-sm' : 'bg-transparent text-gray-700 hover:bg-white/70'}`}
              onClick={() => setSelectedTypeLabel({ label, value: mappedValue })}
          >
            {label}
          </p>
        );
      })}
    </div>
  );
}
