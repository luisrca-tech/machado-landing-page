import { Fade } from "react-awesome-reveal";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";
import GoogleIcon from "public/icons/google.jpeg";

const testimonials = [
  {
    id: 1,
    name: "João S.",
    text: "Fui muito bem atendido. Em pouco tempo já estava com tudo resolvido. Recomendo!",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria F.",
    text: "Tive todas as minhas dúvidas respondidas com clareza. Atendimento humanizado de verdade.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos A.",
    text: "Falei no WhatsApp e recebi orientação no mesmo dia. Nota 10!",
    rating: 5,
  },
];

export function WhatTheySay() {
  return (
    <Fade
      triggerOnce
      direction="up"
      cascade
      damping={0.15}
    >
      <section className="py-16 bg-[#0f1b2b] relative overflow-hidden">
        {/* Background texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNMzAgMzBoMXYxaC0xeiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=')]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              O que dizem sobre nós?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              O Dr. Rafael Machado é sócio da Machado Advogados, que possui
              excelência em atendimento, estando aberto há mais de 5 anos no
              mercado, com atuação em mais de 1.000 processos e clientes
              satisfeitos em todo país.
            </p>
          </div>

          <Marquee
            className="py-4"
            pauseOnHover={true}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="mx-4 bg-white p-6 rounded-lg w-96 shadow-lg flex flex-col justify-between"
              >
                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="text-[#4285F4]"
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={GoogleIcon}
                      alt="Google Review"
                      width={20}
                      height={20}
                      className="mr-1"
                    />
                    <span className="text-sm text-gray-600">Google</span>
                  </div>
                </div>
                <p className="text-gray-800 mb-4">"{testimonial.text}"</p>
                <p className="text-[#4285F4] font-medium">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </Fade>
  );
}
