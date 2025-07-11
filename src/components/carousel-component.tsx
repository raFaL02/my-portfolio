"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Barber Link",
    description:
      "App de agendamento de barbearia desenvolvido com Next.js, Tailwind e API externa",
    image: "/projects/barberLink.png",
    link: "https://barber-app-omega.vercel.app/",
    tech: ["Next.js + TypeScript", "Responsivo", "Integração com API externa"],
  },
  {
    title: "Dev Link",
    description:
      "Uma landing para redirecionar para redes sociais, com botão de light ou dark mode.",
    image: "/projects/devLink.png",
    link: "https://dev-link-dark-mode-light-mode.vercel.app/",
    tech: ["JavaScript", "html + CSS"],
  },
];

export default function CarouselComponent() {
  return (
    <div className="mt-10 flex w-full justify-center px-4">
      <Carousel className="w-full max-w-4xl">
        <CarouselContent>
          {projects.map((project, i) => (
            <CarouselItem key={i}>
              <div className="flex justify-center p-1">
                <Card className="flex w-full max-w-sm flex-col rounded-2xl bg-violet-500 p-4 shadow-lg hover:bg-violet-600">
                  <CardContent className="space-y-4 p-1">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={400}
                      className="rounded-md object-cover"
                    />
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="list-inside list-disc text-sm">
                      {project.tech.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button className="cursor-pointer">Ver projeto</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
