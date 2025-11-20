import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageLightbox = ({ isOpen, onClose, imageSrc, imageAlt }: ImageLightboxProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-transparent overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
