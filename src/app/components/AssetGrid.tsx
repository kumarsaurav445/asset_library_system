'use client';
import { useState } from "react";
import { Asset, mockAssets } from "../data/mockData";
import AssetCard from "./AssetCard";
import KPIModal from "../modals/KPIModal";
import LayoutsModal from "../modals/LayoutsModal";

export default function AssetGrid({ assets }: { assets: Asset[] } ) {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {assets.map((asset: Asset) => (
        <AssetCard key={asset.id} asset={asset} onClick={setSelectedAsset}/>
      ))}
      {/* Currently only 2 type of modal is available, 
          One for KPI and another for Layout and Story_Board due to lack of design or attribute details for modals. 
      */}
      {selectedAsset?.type === "KPI" && (
        <KPIModal asset={selectedAsset} isOpen={true} onClose={() => setSelectedAsset(null)} />
        )}

        {(selectedAsset?.type === "Layout" || selectedAsset?.type === "Story_Board") && (
        <LayoutsModal asset={selectedAsset} isOpen={true} onClose={() => setSelectedAsset(null)} />
        )}

        {/* {selectedAsset?.type === "Data_Viz" && (
        <DataVizModal asset={selectedAsset} isOpen={true} onClose={() => setSelectedAsset(null)} />
        )} */}

        {/* {selectedAsset?.type === "Story_Board" && (
        <StoryBoardModal asset={selectedAsset} isOpen={true} onClose={() => setSelectedAsset(null)} />
        )} } */}
    </div>
  );
}
