import Image from "next/image";
import { redirect } from "next/navigation";
import { generateMetadata, getData, getGameRamdom } from "./functions";
import GameProperties from "./props";
import Label from "./components/label";
import Game from "@/models/game";
import Container from "@/components/container";
import GameCard from "@/components/game-card";

export {generateMetadata};

export default async function GamePage({ params }: GameProperties) {
  const data: Game = await getData(params.id);
  const sorted: Game = await getGameRamdom();

  if (!data) redirect("/");

  return (
    <main className="w-full text-black">
      <figure className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          src={data.image_url}
          alt={data.title}
          priority={true}
          quality={100}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          className="object-cover w-full h-80 sm:h-96 opacity-70"
        />
      </figure>
      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <p>{data.description}</p>
        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
        <div className="flex gap-2 flex-wrap">
          {data.platforms.map((item) => (
            <Label key={item} name={item} />
          ))}
        </div>
        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {data.categories.map((item) => (
            <Label key={item} name={item} />
          ))}
        </div>
        <p className="mt-7 mb-2">
          <strong>Data de lançamento:</strong> {data.release}
        </p>
        <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado</h2>
        <div className="flex">
          <div className="flex-grow">
            <GameCard data={sorted}/>
          </div>
        </div>
      </Container>
    </main>
  );
}
