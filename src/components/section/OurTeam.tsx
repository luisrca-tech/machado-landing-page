import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { WppButton } from "../ui/WppButton";

const teamMembers = [
  {
    name: "José Gabriel Machado Nascimento",
    role: "Advogado",
    description:
      "Advogado formado pela PUC-GO. Presidente da OAB de Senador Canedo (2022–2024 / 2025–atual). Pós-graduando em Direito Previdenciário (IGD).",
    srText: "Advogado em Senador Canedo",
    image: "/images/rafaelMachado.jpg",
  },
  {
    name: "Rafael Machado Nascimento",
    role: "Advogado Trabalhista",
    description:
      "Advogado formado pela PUC-GO. Especialista em Direito do Trabalho. Presidente da Comissão de Direito do Trabalho da OAB de Senador Canedo (2025 – atual). Pós-graduando em Direito do Trabalho e Processo do Trabalho (IGD).",
    srText: "Advogado trabalhista em Senador Canedo",
    image: "/images/rafaelMachadoAboutUs.jpg",
  },
  {
    name: "Jeffrey Renan Ribeiro de Sousa",
    role: "Advogado",
    description:
      "Advogado formado pela UniEvangélica-GO. Presidente da Comissão de Acompanhamento Forense da OAB de Senador Canedo (2025-atual).",
    srText: "Advogado criminalista em Senador Canedo",
    image: "/images/rafaelMachado.jpg",
  },
];

export function OurTeam() {
  return (
    <Fade
      triggerOnce
      direction="up"
      cascade
      damping={0.15}
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center font-bold text-3xl text-primary">
          Nossa Equipe
        </h2>
        <div className="mx-auto mb-10 h-1.5 w-20 bg-[#c4a35a]" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="card-hover rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-[#c4a35a]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-1 text-center font-bold text-primary text-xl">
                {member.name}
              </h3>
              <p className="mb-4 text-center font-medium text-[#c4a35a]">
                {member.role}
              </p>
              <p className="text-center text-gray-700">{member.description}</p>
              <span className="sr-only">{member.srText}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-700">
            Além de seus advogados líderes, o Machado Advogados conta com uma
            equipe de apoio jurídico qualificada e comprometida com cada caso.
            Do atendimento inicial à finalização do processo, você estará
            acompanhado por um time experiente, preparado para entregar
            resultados.
          </p>
          <div className="flex items-center justify-center">
            <WppButton text="Fale com um advogado agora" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
