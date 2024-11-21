import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle, // Huruf kecil di awal
} from "@/components/ui/navigation-menu";

import Link from "next/link";

const ProsesPesanan = () => {
  return (
    <div className="h-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/admin/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pesanan Masuk</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/admin/thumbnail" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pesanan Diproses</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/admin/pesanan" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pesanan Selesai</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default ProsesPesanan;
