import NavLink from "./NavLink";

// this should probably match the styling that the scroll indicator has (fixed position, z-index)

const Navigation = () => {
  return (
    <div className="py-6 h-2 z-10 fixed">
      <NavLink title="about" />
      <NavLink title="experience" />
      <NavLink title="resources" />
    </div>
  );
};

export default Navigation;
