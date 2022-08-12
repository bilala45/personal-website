import { useNavigate } from "react-router-dom";

const NavLink = ({ title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${title.toLowerCase()}`);
  };

  return (
    <div className="mt-4 font-medium text-lg w-fit hover:text-sky-600 hover:underline underline-offset-4 decoration-4 cursor-pointer">
      <div
        onClick={handleClick}
        className={
          window.location.pathname === `/${title.toLowerCase()}`
            ? "text-sky-600"
            : ""
        }
      >
        {title}
      </div>
    </div>
  );
};

export default NavLink;
