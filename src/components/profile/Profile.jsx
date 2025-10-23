import person from "../../assets/wakil6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
              Beyond the Code: My Philosophy
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
              <p>
                  I believe an effective solution is the synergy of well-structured back-end services and a seamless user experience.
                  With expertise in Java-based application(Spring Boot) and microservices, I build applications that are robust, scalable, and resilient, while my skills in Angular bring them to life with dynamic, intuitive front ends.
              </p>

              <p>
                  This blend enables me to serve as a bridge between front end and back end, ensuring harmony across all components.
                  For me, it’s about creating systems with efficiency and elegance—software that is both functional and a joy to use.
              </p>

          </div>
          {/*<div className="mt-8 flex max-md:justify-center">*/}
          {/*  <a*/}
          {/*    className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"*/}
          {/*    href="#!"*/}
          {/*  >*/}
          {/*    My Projects*/}
          {/*  </a>*/}
          {/*  <a*/}
          {/*    className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}*/}
          {/*    href="#!"*/}
          {/*  >*/}
          {/*    <FontAwesomeIcon icon={faDownload} /> Download CV*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default Profile;
