import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="mb-6 flex flex-1 animate-fade-in flex-col items-center justify-center p-10 font-inconsolata font-semibold">
      <h1 className="mb-2 items-start py-2 text-start font-poppins text-4xl font-bold md:text-4xl">
        What do you want to tell me?
      </h1>
      <ContactForm />
    </section>
  );
}
