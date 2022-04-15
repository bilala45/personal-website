import Link from "./Link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    // add padding above and below links and center
    <div className="py-12 flex justify-center">
      <Link icon={faGithub} />
      <Link icon={faLinkedin} />
      <Link icon={faEnvelope} />
    </div>
  );
};

export default Contact;
