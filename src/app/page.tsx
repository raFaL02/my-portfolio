import CarouselComponent from "@/components/carousel-component";
import { ContactTab } from "@/components/contact-tabs";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Reveal>
        <section
          id="about"
          className="mt-30 flex w-full flex-col items-center justify-center border-b px-6"
        >
          <Image
            src="/profile.png"
            alt="Avatar do Rafael"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
            priority
          />

          <h1 className="mt-6 text-4xl font-bold">Olá, eu sou Rafael 👋</h1>

          <div className="mt-10 mb-6 flex w-full max-w-6xl flex-col gap-20 text-xl md:flex-row md:items-start">
            <div className="space-y-6 md:w-1/2">
              <Card className="bg-violet-500 p-4 shadow-lg">
                <CardContent className="grid gap-6">
                  <p>
                    Tenho 30 anos e estou em transição de carreira para a área
                    de desenvolvimento web, com forte interesse e dedicação ao
                    back-end.
                  </p>
                  <p>
                    Atualmente estudo Node.js e desenvolvo projetos full stack
                    com foco em Next.js, fortalecendo minhas habilidades tanto
                    no front-end quanto no back-end. Possuo conhecimentos
                    prévios em Java e venho evoluindo constantemente no
                    ecossistema JavaScript.
                  </p>
                  <p>
                    Apesar de ainda estar construindo algumas hard skills
                    técnicas, trago comigo uma sólida bagagem de soft skills,
                    adquiridas em experiências profissionais anteriores,
                    inclusive em empresas multinacionais. Falo inglês, me
                    comunico com facilidade e valorizo o trabalho em equipe.
                  </p>
                  <p>
                    Sou movido pela paixão por programar, resolver problemas com
                    código e buscar soluções que facilitem o dia a dia das
                    pessoas. Estou em busca da minha primeira oportunidade
                    profissional na área de desenvolvimento, sempre estudando,
                    acompanhando tendências e me atualizando com as novidades do
                    setor para entregar soluções modernas e eficientes.
                  </p>
                </CardContent>
              </Card>
              {/* <p>
                Tenho 30 anos e estou em transição de carreira para a área de
                desenvolvimento web, com forte interesse e dedicação ao
                back-end.
              </p>
              <p>
                Atualmente estudo Node.js e desenvolvo projetos full stack com
                foco em Next.js, fortalecendo minhas habilidades tanto no
                front-end quanto no back-end. Possuo conhecimentos prévios em
                Java e venho evoluindo constantemente no ecossistema JavaScript.
              </p>
              <p>
                Apesar de ainda estar construindo algumas hard skills técnicas,
                trago comigo uma sólida bagagem de soft skills, adquiridas em
                experiências profissionais anteriores, inclusive em empresas
                multinacionais. Falo inglês, me comunico com facilidade e
                valorizo o trabalho em equipe.
              </p>
              <p>
                Sou movido pela paixão por programar, resolver problemas com
                código e buscar soluções que facilitem o dia a dia das pessoas.
                Estou em busca da minha primeira oportunidade profissional na
                área de desenvolvimento, sempre estudando, acompanhando
                tendências e me atualizando com as novidades do setor para
                entregar soluções modernas e eficientes.
              </p> */}
            </div>

            <div className="flex justify-center">
              <Image
                src="/meDev.jpeg"
                alt="Rafael programando"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="projects" className="w-full border-b">
          <h1 className="mt-10 text-center text-4xl font-bold">Projetos 👨‍💻</h1>

          <CarouselComponent />
        </section>
      </Reveal>
      <Reveal>
        <section
          id="contact"
          className="mt-10 flex w-full flex-col items-center justify-center border-b px-6"
        >
          <h1 className="text-4xl font-bold">Contato📱</h1>

          <div className="mt-10 mb-6 flex w-full max-w-6xl flex-col gap-30 text-xl md:flex-row md:items-start">
            <div className="space-y-6 md:w-1/2">
              <ContactTab />
            </div>

            <div className="flex justify-center md:w-1/2">
              <Image
                src="/test1.png"
                alt="Avatar entregador cartas"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </Reveal>
      <div className="flex w-full flex-col items-center justify-center gap-4 p-8">
        <div className="flex items-center justify-center gap-6">
          <Link href="https://www.linkedin.com/in/orafaellima/" target="_blank">
            <LinkedinIcon className="size-6 transition-colors hover:text-blue-600" />
          </Link>
          <Link href="https://github.com/raFaL02" target="_blank">
            <GithubIcon className="size-6 transition-colors hover:text-black" />
          </Link>
          <Link href="https://x.com/devlilrafa" target="_blank">
            <X className="size-6 transition-colors hover:text-zinc-700" />
          </Link>
          <Link href="https://dev.to/rafadev" target="_blank">
            <Image
              src="/devto.svg"
              alt="devto logo"
              width={400}
              height={300}
              className="size-7 transition-colors hover:text-zinc-700"
            />
          </Link>
        </div>

        <footer>
          Feito com <span className="text-red-500">♥</span> pelo{" "}
          <Link
            href="https://github.com/raFaL02"
            target="_blank"
            className="underline transition-colors hover:text-zinc-800"
          >
            Rafa Cruz Developer
          </Link>
        </footer>
      </div>
    </div>
  );
}
