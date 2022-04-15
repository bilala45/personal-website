import Link from "./Link";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const github = "https://github.com/bilala45";
  const linkedin = "https://www.linkedin.com/in/bilal-ali1/";
  const email = "mailto: bilalali2@hotmail.com";

  return (
    // add padding above and below links and center
    <div className="py-12 flex justify-center">
      <Link icon={faGithub} link={github} />
      <Link icon={faLinkedinIn} link={linkedin} />
      <Link icon={faEnvelope} link={email} />
    </div>
  );
};

export default Contact;
