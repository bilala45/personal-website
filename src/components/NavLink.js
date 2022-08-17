import { useNavigate } from "react-router-dom";

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
          window.location.pathname === `/${title.toLowerCase()}`
            ? "bg-sky-500 text-white rounded-lg px-2.5 font-normal"
            : "px-2.5"
        }
      >
        {title}
      </div>
    </div>
  );
};

export default NavLink;

// hover:underline underline-offset-4 decoration-4
