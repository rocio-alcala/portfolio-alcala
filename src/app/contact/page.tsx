import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="mb-6 flex flex-1 animate-fade-in flex-col items-center justify-center p-10 font-inconsolata font-semibold">
      <h1 className="font-bolder mb-5 text-start text-xl md:text-2xl">
        What do you want to tell me?
      </h1>
      <ContactForm />
    </section>
  );
}
