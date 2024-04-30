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
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>();

  async function onSubmit(dataForm: ContactForm) {
    const dataFormWithKey = {
      ...dataForm,
      access_key: "8dc60974-c226-4f08-8a91-3102ed8269a5"
    };
    const dataFormWithKeyJson = JSON.stringify(dataFormWithKey);
    try {
      setIsLoading(true);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: dataFormWithKeyJson
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
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <form
        className="w-[60%] min-w-80 flex flex-col justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputText
          placeholder="your name"
          id="name"
          {...register("name", {
            required: "name is required",
            maxLength: {
              value: 30,
              message: "max length for name is 30 characters"
            }
          })}
          errors={errors.name?.message}
          label="name"
        ></InputText>
        <InputText
          id="e-mail"
          {...register("email", {
            pattern: {
              value: /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/,
              message: "email must a valid"
            },
            required: "email is required"
          })}
          errors={errors.email?.message}
          label="e-mail"
          placeholder="your email"
        ></InputText>
        <InputTextArea
          id="message"
          placeholder="whats up?"
          {...register("message", { required: "message is required" })}
          label="message"
          errors={errors.message?.message}
          className="min-h-80"
        ></InputTextArea>
        <Button className="mt-3" type="submit" isLoading={isLoading}>
          SUBMIT
        </Button>
      </form>
      <BaseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="p-6 text-center">{modalMessage}</p>
      </BaseModal>
    </>
  );
}
