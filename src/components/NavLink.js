import { useNavigate } from "react-router-dom";

const NavLink = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/${title.toLowerCase()}`);
      }}
      className="mt-4 font-medium text-lg w-fit hover:underline hover:text-indigo-500 underline-offset-2 decoration-4 cursor-pointer"
    >
      {title}
    </div>
  );
};

export default NavLink;
