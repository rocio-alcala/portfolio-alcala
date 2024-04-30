import ContactForm from "@/components/ContactForm";
import InputText from "@/components/InputText";
import { useForm } from "react-hook-form";

export default function Contact() {
  return (
    <section className="animate-fade-in font-inconsolata font-semibold p-6 mb-6 flex flex-col justify-center items-center">
      <h1 className="font-bolder text-2xl text-start mb-5">
        What do you want to tell me?
      </h1>
      <ContactForm></ContactForm>
    </section>
  );
}
