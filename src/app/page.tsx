import Image from "next/image";
import Link from "next/link";

import Game from "@/models/game";
import Container from "@/components/container";

import { getDailyGame } from "./functions";
import { BsArrowRightSquare } from "react-icons/bs";

export default async function Home() {
  const dailyGame: Game = await getDailyGame();

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo para você
        </h1>
        <Link href={`/game/${dailyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <figure className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                <p className="font-bold text-xl text-white">
                  {dailyGame.title}
                </p>
                <BsArrowRightSquare size={24} color="#FFF" />
              </div>
              <Image
                src={dailyGame.image_url}
                alt={dailyGame.title}
                priority={true}
                quality={100}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
              />
            </figure>
          </section>
        </Link>
      </Container>
    </main>
  );
}
