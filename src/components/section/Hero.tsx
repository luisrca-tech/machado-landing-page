import Image from "next/image";
import Link from "next/link";
import LogoTransparent from "public/images/logoTransparent1.png";
import HeroImage from "public/images/rafaelBgTransparent.png";
import WhatsappIcon from "public/icons/wpp.png";
import MachadoAdvogadosPanel from "public/images/machadoAdvogadosEntry.png";

export function HeroSection() {
  return (
    <div className="grid relative grid-cols-1 lg:grid-cols-2 items-center gap-5 justify-center lg:justify-start lg:items-start">
      <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center z-10">
        <div className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-56">
          <Image
            src={LogoTransparent}
            alt="Logo"
            className="w-full h-full object-center"
            priority
          />
        </div>
        <div className="flex flex-col lg:items-start lg:text-start lg:justify-start  text-center justify-center items-center gap-2">
          <h1 className="text-sm md:text-xl font-medium text-amber-100">
            DR. RAFAEL MACHADO NASCIMENTO – ADVOGADO RECOMENDADO
          </h1>
          <span className="text-amber-100 text-sm md:text-xl font-medium">
            Fale com um advogado trabalhista agora.
          </span>
          <span className="text-amber-100 text-sm md:text-xl font-medium">
            Algo errado no seu trabalho? Descubra o que fazer.
          </span>
          {/* This is the desktop button */}
          <Link
            href="https://wa.me/+556284015585"
            className="bg-green-500 text-emerald-50 hidden px-4 py-2 text-lg rounded-md mt-4 lg:flex items-center justify-center gap-2 hover:bg-emerald-300 hover:text-green-500 transition-all duration-300"
            target="_blank"
          >
            <Image
              src={WhatsappIcon}
              alt="Whatsapp"
              width={26}
              height={26}
              className=""
            />
            <span>Fale com um advogado trabalhista agora.</span>
          </Link>
          <span className="text-amber-100 text-sm md:text-xl font-medium">
            Atendimento sigiloso • Resposta rápida • Análise gratuita
          </span>
        </div>
      </div>
      <div className="relative w-full h-full lg:static">
        <Image
          src={MachadoAdvogadosPanel}
          alt="Machado Advogados"
          className="w-full h-full object-cover md:max-h-[80%] lg:min-h-full rounded-md"
        />
        <div className="absolute w-full h-full md:h-[80%] lg:h-full lg:-translate-x-1/2 lg:top-11 top-0 flex items-center justify-center lg:hidden 2xl:block">
          <Image
            src={HeroImage}
            alt="Hero"
            className="w-full h-full object-contain"
          />
          <Link
            href="https://wa.me/+556284015585"
            className="bg-green-500 text-emerald-50 p-2 text-xs rounded-md lg:hidden mt-4 mx-4 absolute bottom-20 md:bottom-50 md:text-base left-0 right-0 flex items-center justify-center gap-2 hover:bg-emerald-300 hover:text-green-500 transition-all duration-300"
            target="_blank"
          >
            <Image
              src={WhatsappIcon}
              alt="Whatsapp"
              width={26}
              height={26}
              className=""
            />
            <span>Fale com um advogado trabalhista agora.</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
