import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
    {
        id: 1,
        image: card1,
        category: "FullStack Development",
        title: "E-Commerce FullStack Application",
        description:
            "A scalable E-Commerce platform built with a Spring Boot microservice architecture on the backend and Angular for a dynamic, responsive frontend. It ensures seamless integration, secure transactions, and efficient product management.",
        link: "https://gitlab.com/wakil545/ecommerce-microservice"
    },
    {
        id: 2,
        image: card2,
        category: "FullStack Development",
        title: "Book Sharing Application",
        description:
            "Built a Book Sharing platform using Spring Boot for the backend and Angular for the frontend, allowing users to share, borrow, and manage books with secure login, smooth interactions, and a responsive UI.",
        link: "https://github.com/Wakil-Ahammad/Book-Social-Network-"
    },
    {
        id: 3,
        image: card3,
        category: "FullStack Development",
        title: "Mess Management System",
        description:
            "Developed a Mess Management System using PHP for the backend and HTML, CSS, and JavaScript for the frontend, enabling efficient meal tracking, expense management, and member coordination through a simple and user-friendly interface.",
        link: "https://github.com/Wakil-Ahammad/Massier"
    },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/Wakil-Ahammad"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
