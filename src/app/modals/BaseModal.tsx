import React from "react";
import { copyToClipboard } from "../utils/utilFn"; 

type BaseModalProps = {
  title: string;
  shortDescription: string;
  completeDescription: string;
  type: string;
  tags: string[]; 
  assetLink: string; 
  isOpen: boolean;
  thumbnailUrl: string;
  onClose: () => void;
  footerButtonText?: string;
  onFooterButtonClick?: () => void;
  children: React.ReactNode; // Dynamic content
};

// Base modal to showcase fixed UI header and footer content and type specific content is getting loaded using children props.

export default function BaseModal({
  title,
  shortDescription,
  completeDescription,
  type,
  tags,
  isOpen,
  assetLink,
  thumbnailUrl,
  onClose,
  footerButtonText,
  onFooterButtonClick,
  children,
}: BaseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex flex-col justify-center items-start pt-16">
      <div className="flex flex-col  bg-white rounded-xl shadow-lg w-[80vw] h-[80vh] overflow-y-hidden relative p-6">
        <div className="flex justify-center ">
            <div className="flex flex-col justify-center items-center my-4">
                <img src={thumbnailUrl} alt={title} className="w-20 h-8 object-cover mb-3" />
                <p className="text-xl font-semibold mb-3">{title}
                    <span className="bg-gray-100 align-middle text-gray-400 text-sm ml-2 px-2">{type}</span>
                </p>

                <p className="text-sm text-gray-400 mb-3">{shortDescription}</p>

            </div>
            <div className="flex">
                <button
                onClick={()=> copyToClipboard(assetLink)}
                className="absolute cursor-pointer top-4 right-12 text-gray-400 hover:text-gray-600 text-xl"
                >
                    <i className="fa-solid fa-link"></i>
                </button>
                <button
                onClick={onClose}
                className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
                >
                ✕
                </button>
            </div>
        </div>
        <p className="text-gray-600 mb-4">{completeDescription}</p>
        <div className="flex justify-center mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
        <div className="mb-2">{children}</div>

        {footerButtonText && (
            <div className="absolute bottom-0 left-0 w-full bg-white p-4">
                <button
                onClick={onFooterButtonClick}
                className="w-full bg-black text-white hover:bg-blue-700 px-4 py-2 rounded"
                >
                <i className="fa-solid fa-bookmark mr-2"></i>
                {footerButtonText}
                </button>
            </div>
        )}
      </div>
    </div>
  );
}
