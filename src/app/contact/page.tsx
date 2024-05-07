import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="flex-1 animate-fade-in font-inconsolata font-semibold p-10 mb-6 flex flex-col justify-center items-center">
      <h1 className="font-bolder text-xl md:text-2xl text-start mb-5">
        What do you want to tell me?
      </h1>
      <ContactForm></ContactForm>
    </section>
  );
}
