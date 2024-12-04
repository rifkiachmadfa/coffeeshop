
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,

  navigationMenuTriggerStyle, // Huruf kecil di awal
} from "@/components/ui/navigation-menu";

import Link from "next/link";

const NavigasiAdmin = () => {
  return (
    <div className="m-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/admin/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Daftar Pesanan</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/admin/tambahMenu" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Menu</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/admin/thumbnail" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Thumbnail</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/admin/voucher" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Tambah Voucher</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigasiAdmin;
