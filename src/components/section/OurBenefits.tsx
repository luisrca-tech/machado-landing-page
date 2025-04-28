import { CheckCircle, MessageCircle, UserCheck } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export function OurBenefits() {
  return (
    <Fade
      triggerOnce
      direction="up"
      cascade
      damping={0.15}
    >
      <div className="flex flex-col gap-5 lg:gap-9">
        <h2 className="text-3xl font-medium text-black text-center mb-12">
          Por que falar com um advogado trabalhista agora?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3 text-center md:text-left">
                Você pode estar perdendo dinheiro e nem sabe.
              </h3>
              <p className="text-gray-700 text-center md:text-left">
                Seus direitos valem dinheiro. Se você não está recebendo, esse
                dinheiro está ficando com a empresa.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-center md:text-left">
                Sem custos iniciais.
              </h3>
              <p className="text-gray-700 text-center md:text-left">
                Você terá seu caso analisado por um advogado especialista que
                vai tirar todas suas dúvidas pelo WhatsApp — sem pagar nada por
                isso.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-4xl mb-4">✋</div>
              <h3 className="text-xl font-semibold mb-3 text-center md:text-left">
                Quem toma a decisão é VOCÊ.
              </h3>
              <p className="text-gray-700 text-center md:text-left">
                Aqui ninguém te pressiona. Você será orientado com clareza e
                decide o que fazer no seu tempo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
