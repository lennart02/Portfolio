import { Link } from "react-router-dom";

export default HoverLink;

function HoverLink(props: { to: string; text: string }) {
  return (
    <Link
      to={props.to}
      className="group relative inline-block overflow-hidden rounded px-5 py-3 m-1 hover:bg-indigo-950 focus:outline-none focus:ring active:bg-indigo-500 active:text-white"
    >
      <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-200 transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-200 transition-all duration-200 group-hover:h-full"></span>
      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-200 transition-all duration-200 group-hover:w-full"></span>
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-200 transition-all duration-200 group-hover:h-full"></span>
      {props.text}
    </Link>
  );
}
