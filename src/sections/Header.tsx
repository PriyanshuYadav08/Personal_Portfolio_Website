export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3">
      <nav>
        <a href="/home"
           className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold ">
          Home
        </a>
        <a href="/about">
          About
        </a>
        <a href="/projects">
          Projects
        </a>
        <a href="/contact">
          Contact
        </a>
      </nav>
    </div>
  );
};