import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavigationHomePage() {
  return (
    <div>
      <NavigationMenu className="">
        <NavigationMenuList className="h-[120px] flex w-screen gap-28 bg-[#C75000]">
          <NavigationMenuItem>
            <Link href="/" className="text-4xl font-bold ">
              TIMIRI CIFFII
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="mx-auto">
            <div className="flex items-center w-[600px]">
              <Input
                type="text"
                placeholder="Cari Disini Aja"
                className="w-full"
              />
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex gap-2 ">
            <Link href="/login">
              <Button>Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
