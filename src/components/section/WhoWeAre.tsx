import Image from "next/image";
import RafaelMachado from "public/images/rafaelMachadoAboutUs.jpg";
import { Fade } from "react-awesome-reveal";

export function WhoWeAre() {
  return (
    <Fade
      triggerOnce
      direction="up"
      cascade
      damping={0.15}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 min-h-[400px]">
        {/* Foto do Rafael */}
        <div className="flex justify-center lg:justify-end w-full lg:w-2/5">
          <div className="w-40 h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
            <Image
              src={RafaelMachado}
              alt="Dr. Rafael Machado Nascimento"
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        {/* Texto */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-6 text-amber-100">
            Quem está por trás do atendimento?
          </h2>
          <p className="text-lg text-black mb-4 font-medium">
            Quem cuidará pessoalmente do seu atendimento será o{" "}
            <span className="font-bold text-black">
              Dr. Rafael Machado Nascimento
            </span>
            ,
            <br />
            advogado formado pela PUC/GO, pós-graduando em Direito do Trabalho e
            Processo do Trabalho pelo IGD,
            <br />e atual Presidente da Comissão de Direito do Trabalho da OAB
            Senador Canedo/GO (2025–2027).
          </p>
          <p className="text-lg text-black font-medium">
            Você será atendido diretamente por ele, com orientação clara, humana
            e sigilosa.
            <br />
            Nada de atendente. Nada de enrolação. Aqui é direto com o
            especialista.
          </p>
        </div>
      </div>
    </Fade>
  );
}
