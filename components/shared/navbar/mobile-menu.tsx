import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";
import {dashboardRoutes} from '../../../constants/routes'
import Link from "next/link";

 
export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant='outline' className="px-2 py-0 bg-white">
        <RxHamburgerMenu size={20} className="text-primary" />
        </Button>      
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col mt-8 gap-4">
          {
            dashboardRoutes.map(route => (
              <Link className="medium-16" href={route.link} key={route.id}>
                {route.title}
              </Link>
            ))
          }
        </div>
      </SheetContent>
    </Sheet>
  )
}