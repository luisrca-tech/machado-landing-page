import Image from "next/image";
import HeroImage from "public/images/rafaelBgTransparent.png";
import { Fade } from "react-awesome-reveal";

import OfficePhoto from "public/images/officePhoto.jpg";
import { WppButton } from "../ui/WppButton";

export function HeroSection() {
  return (
    <Fade
      triggerOnce
      direction="down"
      cascade
      damping={0.15}
      className="flex flex-col justify-between"
    >
      <div className="w-fit transform rounded-md bg-[#C4A35A] p-4 lg:p-6 mb-5 uppercase transition-transform duration-300 hover:scale-105 ml-4">
        <h1 className="font-bold text-sm lg:text-2xl text-white">
          Machado Advogados
        </h1>
      </div>

      <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="z-10 flex flex-col gap-6 px-4">
          <div className="flex flex-col gap-4">
            <strong className="font-medium text-[#C4A35A] text-sm uppercase tracking-wider">
              DR. RAFAEL MACHADO NASCIMENTO – ADVOGADO RECOMENDADO
            </strong>
            <span className="font-bold text-2xl text-white md:text-5xl lg:text-6xl">
              Proteção jurídica para seus direitos trabalhistas
            </span>
            <span className="text-lg text-white/90 md:text-xl">
              Se você enfrenta problemas no trabalho, não espere para buscar
              seus direitos. Converse agora com um especialista.
            </span>
          </div>

          <div className="flex-col gap-3 hidden lg:flex">
            <WppButton className="mt-8" />

            <span className="text-base text-white/70">
              Atendimento sigiloso • Resposta rápida • Análise gratuita
            </span>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-[600px] lg:px-4">
          <Image
            src={OfficePhoto}
            alt="Machado Advogados"
            className="h-full w-full rounded-md object-cover md:max-h-[80%] lg:min-h-full blur-xs lg:blur-none"
          />
          <div className="lg:-left-1/2 absolute -bottom-0.5 flex h-full w-full items-center justify-center md:h-[80%] lg:h-full lg:bottom-0">
            <Image
              src={HeroImage}
              alt="Hero"
              className="absolute h-full w-full object-contain"
            />
            <div className="absolute flex flex-col gap-1 items-center justify-center right-0 bottom-10 left-0 lg:hidden z-10">
              <WppButton className="text-xs" />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
