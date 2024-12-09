import { Link, NavLink } from "react-router";
import LogoChart from "../../assets/logo.svg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <div className='idmChart-header flex items-center gap-x-6 p-4 bg-gray-200'>
      <div className='logo w-[125px]'>
        <Link to='/'>
          <img className='max-w-full' src={LogoChart} alt='Logo' />
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList className='font-medium text-lg'>
          <NavigationMenuItem>
            <NavLink to='/' className='hover:text-blue-500'>
              Dashboard
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Header;
