"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Barber Link",
    description: "App de agendamento com Next.js, Tailwind e API externa.",
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
    tech: ["JavaScript, Html e CSS"],
  },
];

export default function ProjectCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  return (
    <div className="relative mx-auto w-full max-w-6xl scroll-smooth px-4">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2"
        onClick={() => instanceRef.current?.prev()}
      >
        <ArrowLeft />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2"
        onClick={() => instanceRef.current?.next()}
      >
        <ArrowRight />
      </Button>

      <div ref={sliderRef} className="keen-slider">
        {projects.map((project, i) => (
          <div
            className="keen-slider__slide flex items-center justify-center px-4 py-8"
            key={i}
          >
            <Card className="w-full max-w-md rounded-2xl bg-violet-500 p-4 shadow-lg hover:bg-violet-600">
              <CardContent className="space-y-4 p-4">
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
                  <Button>Ver projeto</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
