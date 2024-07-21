"use client";

import { useRouter } from "next/navigation";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

interface BaseModalProps {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  hasCloseBtn?: boolean;
}

export default function BaseModal({
  isOpen,
  title,
  hasCloseBtn,
  onClose,
  children,
}: PropsWithChildren<BaseModalProps>) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  // defining router here to use in server component and fetch the data in the server
  const router = useRouter();

  // for parallel and intercepting route
  // if none onClose prop close the modal(intercepting route) going back in router
  const newOnClose = useMemo(() => {
    return (
      onClose ||
      function () {
        router.back();
      }
    );
  }, [onClose, router]);
  function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") {
      newOnClose();
    }
  }

  const closeMenu = useCallback(
    (event: MouseEvent) => {
      // since the <dialog> element takes the whole screen
      // target inside the dialog will be one of <dialog> children
      // only close when target is dialog (outside <dialog>)
      if (modalRef.current && modalRef.current === event.target) {
        newOnClose();
      }
    },
    [newOnClose],
  );

  // add event listener for close on click outside
  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [closeMenu]);

  // used to sync with dialog API
  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog
      className="rounded-md backdrop:bg-black/50"
      ref={modalRef}
      onKeyDown={handleKeyDown}
    >
      {/*  header */}
      {title && (
        <div className="border-grey6 flex items-start justify-between rounded-t border-b border-solid p-5">
          <h3>{title}</h3>
          {/* close button */}
          {hasCloseBtn && (
            <button onClick={newOnClose}>
              <span>x</span>
            </button>
          )}
        </div>
      )}
      {/* body */}
      <div>{children}</div>
    </dialog>
  );
}
