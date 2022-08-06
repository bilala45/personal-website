import { useNavigate } from "react-router-dom";

const NavLink = ({ title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${title.toLowerCase()}`);
  };

  return (
    <div className="mt-4 font-medium text-lg w-fit hover:text-indigo-500 hover:underline underline-offset-2 decoration-4 cursor-pointer">
      <div
        onClick={handleClick}
        className={
          window.location.pathname == `/${title.toLowerCase()}`
            ? "text-indigo-500"
            : ""
        }
      >
        {title}
      </div>
    </div>
  );
};

export default NavLink;
