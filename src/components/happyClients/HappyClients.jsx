import Marquee from "react-fast-marquee";

// Import images

import java from "/src/assets/images/java.png";
import spring from "/src/assets/images/spring.png";
import angular from "/src/assets/images/angular.png";
import postgres from "/src/assets/images/postgresql.png";
import mysql from "/src/assets/images/mysql.png";
import redis from "/src/assets/images/redis.png";
import rabbitMq from "/src/assets/images/rabbitMq.png";
import kafka from "/src/assets/images/kafka.png";
import cicd from "/src/assets/images/ci-cd.png";
import git from "/src/assets/images/git.png";


// import other logos as needed

const commonImageClass = "h-10 sm:h-14 md:h-16 object-contain";

const brandLogos = [
    java,
    spring,
    angular,
    postgres,
    mysql,
    redis,
    rabbitMq,
    kafka,
    git,
    cicd,
];

const HappyClients = () => {
    return (
        <div className="content py-10 md:py-25 flex flex-col items-center px-2">
            <div className="max-w-144.25 text-center">
                <p className="section-title mb-6">Tech Stack</p>
                <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
                    Expertise in modern technologies including Java ecosystem, databases, message brokers, and DevOps tools for building enterprise-grade applications.
                </p>
            </div>

            <Marquee pauseOnHover={true} speed={100}>
                <p className="flex items-center pt-4 md:pt-10">
                    {brandLogos.map((src, index) => (
                        <span className="ps-5 sm:ps-10 md:ps-20" key={index}>
                            <img src={src} alt="" className={commonImageClass} />
                        </span>
                    ))}
                </p>
            </Marquee>
        </div>
    );
};

export default HappyClients;
