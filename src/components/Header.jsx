import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="p-5 flex items-center justify-between bg-[#032541] text-white sticky top-0 z-1 text-[12px] sm:text-base">

       <NavLink to={"/"}> <img className=" sm:w-[150px] sm:h-auto w-[100px]" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" /> </NavLink>

        <nav className="space-x-4">
            <NavLink to={"/popular-movie"} className={({isActive}) => isActive ? 'text-[#12B6DD]' : 'text-white'} >Popular</NavLink>
            <NavLink to={"/top-movie"} className={({isActive}) => isActive ? 'text-[#12B6DD]' : 'text-white'} >Top Rated</NavLink>
            <NavLink to={"/upcoming-movie"} className={({isActive}) => isActive ? 'text-[#12B6DD]' : 'text-white'} >Upcoming</NavLink>
        </nav>
      
    </div>
  )
}
