// this should probably match the styling that the scroll indicator has (fixed position, z-index)

const Nav = () => {
  return (
    <div className="py-6 h-2 z-10 fixed">
      <div>about</div>
      <div>project</div>
      <div>resources</div>
    </div>
  );
};

export default Nav;
