import Image from "next/image";
import Link from "next/link";
import WhatsappIcon from "public/icons/wpp.png";

export function Acting() {
  return (
    <div className="bg-[#0f1b2b] relative overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNMzAgMzBoMXYxaC0xeiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=')]"></div>

      <div className="relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Em quais casos um advogado trabalhista pode te ajudar?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            É bem simples saber se sua situação pode ser avaliada por um
            advogado trabalhista. Se você trabalha e desconfia que passa por
            situação ilegal no seu trabalho, fale agora mesmo. Veja alguns casos
            mais comuns:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Case 1 */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="bg-white/20 rounded-full p-3 text-white text-xl flex-shrink-0">
              📌
            </div>
            <p className="text-white">Sua carteira não foi assinada</p>
          </div>

          {/* Case 2 */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="bg-white/20 rounded-full p-3 text-white text-xl flex-shrink-0">
              📌
            </div>
            <p className="text-white">Foi demitido e não recebeu nada</p>
          </div>

          {/* Case 3 */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="bg-white/20 rounded-full p-3 text-white text-xl flex-shrink-0">
              📌
            </div>
            <p className="text-white">Fez horas extras e não recebeu</p>
          </div>

          {/* Case 4 */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="bg-white/20 rounded-full p-3 text-white text-xl flex-shrink-0">
              📌
            </div>
            <p className="text-white">A empresa não deposita o FGTS</p>
          </div>

          {/* Case 5 */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="bg-white/20 rounded-full p-3 text-white text-xl flex-shrink-0">
              📌
            </div>
            <p className="text-white">
              Está trabalhando como PJ e cumprindo horário
            </p>
          </div>

          {/* Case 6 */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="bg-white/20 rounded-full p-3 text-white text-xl flex-shrink-0">
              📌
            </div>
            <p className="text-white">
              A empresa não paga adicional de insalubridade
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white text-lg mb-6">
            Qualquer que seja sua situação, é importante falar com um advogado.
          </p>
          <Link
            href="https://wa.me/+556284015585"
            className="bg-green-500 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 hover:bg-green-600 transition-all duration-300"
            target="_blank"
          >
            <Image
              src={WhatsappIcon}
              alt="Whatsapp"
              width={24}
              height={24}
            />
            <span>
              👉 Clique no botão abaixo e tire sua dúvida agora pelo WhatsApp.
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
