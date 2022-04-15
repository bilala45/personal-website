import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="flex justify-between py-2">
      <NavLink title="about" />
      <NavLink title="experience" />
      <NavLink title="resources" />
      <span className="text-2xl">
        <FontAwesomeIcon icon={faNoteSticky} />
      </span>
    </div>
  );
};

export default Navigation;
