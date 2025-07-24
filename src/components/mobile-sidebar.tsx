"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MobileSidebar() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="p-2">
          <Menu className="h-8 w-8" />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-64 bg-transparent p-4 text-white"
        >
          <SheetHeader>
            <SheetTitle className="text-lg font-bold">
              Menu de navegação
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-4 flex flex-col gap-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              Sobre
            </a>
            <a href="#projects" className="hover:underline">
              Projetos
            </a>
            <a href="#contact" className="hover:underline">
              Contato
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
