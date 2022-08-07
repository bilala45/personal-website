import ContactLink from "./ContactLink";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const github = "https://github.com/bilala45";
  const linkedin = "https://www.linkedin.com/in/bilal-ali1/";
  const email = "mailto: bilalali@seas.upenn.edu";

  return (
    // add padding above and below links and center
    <div className="mt-10 py-1 px-1.5 rounded-full max-w-fit bg-sky-600">
      <ContactLink icon={faGithub} link={github} />
      <ContactLink icon={faLinkedinIn} link={linkedin} />
      <ContactLink icon={faEnvelope} link={email} />
    </div>
  );
};

export default Contact;
