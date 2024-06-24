import CardExperience from "./CardExperience";

const mockExperience = [
  {
    name: "Crediab",
    description:
      "In my current role as a React developer, I am responsible for both maintaining and developing internal software used for managing debts in a call center. The technology stack I work with includes Next.js, TypeScript, Redux Toolkit, and Redux Toolkit Query. What I enjoy the most is the field of interface design and animations. I want to continue growing by focusing on bringing designers' designs to life through coding.",
    startDate: "02-2023",
    endDate: "Today",
  },
];

export default function Experience() {
  return (
    <div className="m-5 flex flex-col items-center py-10">
      <h1 className="mb-8 items-start py-2 text-start font-poppins text-4xl font-bold md:text-4xl">
        Experience
      </h1>
      {mockExperience.map((experience) => (
        <CardExperience key={experience.name} {...experience} />
      ))}
    </div>
  );
}
