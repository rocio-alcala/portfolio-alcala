import BaseModal from "@/components/BaseModal";
import LoadingBar from "@/components/LoadingBar";
import React from "react";

export default function loading() {
  return (
    <BaseModal isOpen={true}>
      <LoadingBar />
    </BaseModal>
  );
}
