"use client";

import { useForm } from "react-hook-form";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import Button from "./Button";
import { useState } from "react";
import BaseModal from "./BaseModal";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>();

  async function onSubmit(dataForm: ContactForm) {
    const dataFormWithKey = {
      ...dataForm,
      access_key: "8dc60974-c226-4f08-8a91-3102ed8269a5",
    };
    const dataFormWithKeyJson = JSON.stringify(dataFormWithKey);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: dataFormWithKeyJson,
      }).then((res) => res.json());
      setIsModalOpen(true);
      setModalMessage(res.message);
      if (res.success) {
        reset();
      }
    } catch (error) {
      console.error(error);
      setIsModalOpen(true);
      setModalMessage("Error sending message, try again");
    }
  }

  return (
    <>
      <form
        className="flex w-[60%] min-w-64 flex-col justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputText
          placeholder="your name"
          id="name"
          {...register("name", {
            required: "name is required",
            maxLength: {
              value: 30,
              message: "max length for name is 30 characters",
            },
          })}
          errors={errors.name?.message}
          label="name"
        />
        <InputText
          id="e-mail"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "email must be valid",
            },
            required: "email is required",
          })}
          errors={errors.email?.message}
          label="e-mail"
          placeholder="your email"
        />
        <InputTextArea
          id="message"
          placeholder="whats up?"
          {...register("message", { required: "message is required" })}
          label="message"
          errors={errors.message?.message}
          className="min-h-80"
        />
        <Button className="mt-3" type="submit" isLoading={isSubmitting}>
          SUBMIT
        </Button>
      </form>
      <BaseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="p-6 text-center">{modalMessage}</p>
      </BaseModal>
    </>
  );
}
