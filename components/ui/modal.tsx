import { Container, Grid } from "../layout/gridLayout";
import DecorativeBorder from "./decorativeBorder";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      {/* ------------------------------------- */}
      {/* Backdrop */}
      {/* ------------------------------------- */}
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* ------------------------------------- */}
      {/* Modal */}
      {/* ------------------------------------- */}
      <Container>
        <Grid>
          <div className="relative w-full border-y-2 border-dnd-ink bg-dnd-bg shadow-lg col-span-6 col-start-4">
            <DecorativeBorder />
            <div className="book p-6">
              {title && <h2 className="">{title}</h2>}
              {children}
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Modal;
