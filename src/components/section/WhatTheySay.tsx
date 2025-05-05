"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { testimonialsItems } from "~/constants/testimonialsItems";
import { Marquee } from "../magicui/marquee";
import { WppButton } from "../ui/WppButton";

export function WhatTheySay() {
  return (
    <Fade
      triggerOnce
      direction="up"
      cascade
      damping={0.15}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-3xl text-black">
            O que dizem sobre nós?
            <div className="mx-auto h-1.5 mt-2 w-20 bg-[#c4a35a]" />
          </h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-gray-700 text-lg">
              Com mais de{" "}
              <span className="font-bold text-[#c4a35a]">
                7 anos de atuação
              </span>{" "}
              no mercado jurídico e{" "}
              <span className="font-bold text-[#c4a35a]">+1.000 processos</span>{" "}
              judiciais conduzidos com sucesso, a Machado Advogados se
              consolidou como referência em direito trabalhista.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[87.5rem]">
          <Marquee pauseOnHover>
            {testimonialsItems.map((review) => (
              <div
                key={review.id}
                className="group hover:-translate-y-1 relative mx-4 h-full w-[350px] max-w-[360px] rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="-right-2 -top-2 absolute flex h-8 w-8 items-center justify-center rounded-full bg-[#4285F4] shadow-md">
                  <i className="fab fa-google text-lg text-white" />
                </div>
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-gray-100">
                    <Image
                      src={review.profileImage}
                      alt={review.author}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.author}</h4>
                    <div className="flex text-yellow-400">
                      {Array.from({
                        length: review.rating,
                      }).map((_, i) => (
                        <Star
                          key={`${review.id}-${i}`}
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mb-4 line-clamp-4 text-gray-600">{review.text}</p>
                <div className="flex items-center text-gray-400 text-sm">
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </Marquee>

          <div className="mt-12 flex flex-col items-center justify-center text-center">
            <h3 className="mb-6 font-bold text-2xl text-black">
              Trilhe o mesmo caminho que diversos clientes satisfeitos
            </h3>
            <WppButton text="Fale conosco agora!" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
