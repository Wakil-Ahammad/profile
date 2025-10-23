import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Gulshan, Dhaka, Bangladesh",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "ahmedwakil545@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "+8801316747440",
  },
];

const Contact = () => {
  return (
      <div className="flex items-center justify-center min-h-screen px-2 bg-gray-50">
          <div
              className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
              id="contact"
          >
              <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
                  <div>
                      <div>
                          <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-[#132238] text-center">
                              Let’s discuss your Project
                          </p>
                          <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg text-center pt-4 font-normal text-soft-dark">
                              I'm available for freelance work. Drop me a line if you have a
                              project you think I'd be a good fit for.
                          </p>
                      </div>
                      <div className="my-8.75 sm:max-lg:flex justify-center items-center flex-col gap-5">
                          {addressData.map((item, index) => (
                              <Address item={item} key={index} />
                          ))}
                      </div>
                      <div className="w-full text-center mt-6">
                          <SocialMedia />
                      </div>
                  </div>
              </div>
          </div>
      </div>

  );
};

export default Contact;
