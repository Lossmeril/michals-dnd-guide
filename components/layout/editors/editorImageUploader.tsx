// =============================================================================
// A FIELD COMPONENT TO WRAP EACH CONTROL IN THE EDITORS WITH A LABEL, HINT, ERROR MESSAGE, AND CONSISTENT SPACING
// =============================================================================

"use client";

import { UploadImageButton } from "@/components/uploadImageButton";
import { SupabaseBucket } from "@/lib/storage/images";
import { IMAGE_PLACEHOLDER } from "@/lib/webGlobals";
import React from "react";

type ImageUploaderProps = {
  image: string | null;
  className?: string;
  onChange: (patch: { image: string | null }) => void;

  entityId: string;
  bucket?: SupabaseBucket;
};

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

// -------------------------------------
// Field wrapper: label + control + hint/error
// -------------------------------------

const ImageUploader: React.FC<ImageUploaderProps> = ({
  image,
  className,
  onChange,
  bucket,
  entityId,
}) => {
  const [hasError, setError] = React.useState(false);

  return (
    <div
      className={cx("col-span-12 flex flex-row flex-nowrap gap-4", className)}
    >
      <div className="aspect-square w-40 rounded-md overflow-hidden flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image ?? IMAGE_PLACEHOLDER}
          alt="Current"
          className={`w-full h-full object-cover ${hasError ? "border-dnd-red border-2" : ""}`}
        />
      </div>
      <UploadImageButton
        id={entityId}
        image={image}
        onChange={onChange}
        setIsError={setError}
        bucket={bucket}
        mode="vertical"
      />
    </div>
  );
};

export default ImageUploader;
