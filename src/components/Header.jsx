import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-black text-white p-4 flex items-baseline justify-between">
      <h1 className="text-2xl">Redux Slice</h1>
      <nav>
        <NavLink to={"/add-employee"}>Add </NavLink>
      </nav>
    </div>
  )
}
