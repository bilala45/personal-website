import { useNavigate, useLocation } from "react-router-dom";

const NavLink = ({ title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${title.toLowerCase()}`);
  };

  return (
    <div className="mt-4 font-normal text-base w-fit hover:bg-slate-200 rounded-lg cursor-pointer">
      <div
        onClick={handleClick}
        className={
          useLocation().pathname === `/${title.toLowerCase()}`
            ? "bg-sky-500 text-white rounded-lg px-2.5 font-normal"
            : "px-2.5"
        }
      >
        {title || "About"}
      </div>
    </div>
  );
};

export default NavLink;

// hover:underline underline-offset-4 decoration-4
