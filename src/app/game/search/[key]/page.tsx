import Game from "@/models/game";
import Container from "@/components/container";
import InputGames from "@/components/input";
import GameCard from "@/components/game-card";

import SearchProperties from "./props";
import { getData } from "./functions";

export default async function Search({ params }: SearchProperties) {
  const games: Game[] = await getData(params.key);

  return (
    <main className="w-full text-black">
      <Container>
        <InputGames />

        {!games && <p>Nenhum item encontrado!</p>}

        {games && games.length > 0 && (
          <>
            <h1 className="font-bold text-xl mt-8 mb-5">
              Veja o que encontramos na nossa base
            </h1>
            <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {games.map((item) => (
                <GameCard key={item.id} data={item} />
              ))}
            </section>
          </>
        )}
      </Container>
    </main>
  );
}
