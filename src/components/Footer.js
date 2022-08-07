import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    // elements placed in flex container to place at both ends
    <div className="flex justify-between py-2 px-4">
      <span>Bilal Ali &copy; 2022</span>
      <a
        href="https://github.com/bilala45/personal-website"
        className="hover:underline decoration-4 underline-offset-2 decoration-indigo-500"
      >
        source code <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default Footer;
