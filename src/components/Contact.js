import Link from "./Link";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const github = "https://github.com/bilala45";
  const linkedin = "https://www.linkedin.com/in/bilal-ali1/";
  const email = "mailto: bilalal495@outlook.com";

  return (
    // add padding above and below links and center
    <div className="my-12 py-2 px-2 rounded-full max-w-fit bg-gradient-to-r from-sky-500 to-indigo-500">
      <Link icon={faGithub} link={github} />
      <Link icon={faLinkedinIn} link={linkedin} />
      <Link icon={faEnvelope} link={email} />
    </div>
  );
};

export default Contact;
