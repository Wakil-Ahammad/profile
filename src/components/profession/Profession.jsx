import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "⚙️ Backend Development (Spring Boot)",
    description:
      "I develop secure, scalable, and modular backend systems using Spring Boot and Spring Cloud.\n" +
        "By leveraging microservices architecture, I ensure flexibility, maintainability, and easy integration between services — enabling high performance and smooth deployment.",
  },
  {
    id: 2,
    title: "💻 Frontend Development (Angular)",
    description:
      "I build dynamic, responsive, and user-friendly interfaces using Angular.\n" +
        "My focus is on component-based architecture, clean UI design, and efficient state management to deliver engaging and performant user experiences across all devices.",
  },
  {
    id: 3,
    title: "🔗 Full-Stack Integration",
    description:
      "I ensure seamless communication between frontend and backend through well-structured RESTful APIs and real-time data synchronization.\n" +
        "I integrate secure authentication and authorization, error handling, and data validation across the stack to ensure reliability and performance.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
              I specialize in building scalable, full-stack web applications using Spring Boot, Angular, and microservice architecture. My work focuses on delivering seamless user experiences, robust backend systems, and efficient integrations that drive performance and reliability.

              My approach combines clean architecture, creative design thinking, and strong technical expertise to deliver solutions that are both visually engaging and technically solid.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
