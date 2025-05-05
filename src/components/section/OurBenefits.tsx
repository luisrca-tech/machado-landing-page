import { CheckCircle, MessageCircle, UserCheck } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { WppButton } from "../ui/WppButton";

export function OurBenefits() {
  return (
    <Fade
      triggerOnce
      direction="up"
      cascade
      damping={0.15}
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center font-bold text-3xl text-primary">
          Por que falar com um advogado trabalhista agora?
        </h2>
        <div className="mx-auto mb-10 h-1.5 w-20 bg-[#c4a35a]" />

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="card-hover rounded-lg bg-white p-8 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 flex justify-center text-4xl text-secondary">
              <i className="fas fa-money-bill-wave text-[#c4a35a]" />
            </div>
            <h3 className="mb-4 font-bold text-xl">
              Você pode estar perdendo dinheiro
            </h3>
            <p className="text-gray-700">
              Seus direitos valem dinheiro. Se você não está recebendo, esse
              dinheiro está ficando com a empresa.
            </p>
          </div>

          <div className="card-hover rounded-lg bg-white p-8 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 flex justify-center text-4xl text-secondary">
              <i className="fas fa-comments text-[#c4a35a]" />
            </div>
            <h3 className="mb-4 font-bold text-xl">Sem custos iniciais</h3>
            <p className="text-gray-700">
              Você terá seu casado analisado por um advogado especialista que
              vai tirar todas suas dúvidas e você não pagará nada por isso.
            </p>
          </div>

          <div className="card-hover rounded-lg bg-white p-8 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mb-4 flex justify-center text-4xl text-secondary">
              <i className="fas fa-hand-paper text-[#c4a35a]" />
            </div>
            <h3 className="mb-4 font-bold text-xl">
              Quem toma a decisão é VOCÊ
            </h3>
            <p className="text-gray-700">
              Aqui ninguém te pressiona. Você será orientado com clareza e
              decide o que fazer no seu tempo.
            </p>
          </div>
        </div>

        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
          <p className="mb-6 font-bold text-gray-700 text-lg">
            O melhor que você pode fazer agora é falar com um advogado
            especializado. Muitas pessoas deixam para depois e perdem prazos
            importantes ou até mesmo o direito de receber o que é seu por lei.
          </p>

          <WppButton
            text="Deixar pra depois pode custar caro. Fale agora com um advogado e garanta seus direitos."
            className="text-sm py-4"
          />
        </div>
      </div>
    </Fade>
  );
}
