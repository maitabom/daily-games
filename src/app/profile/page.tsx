import Image from "next/image";

import Container from "@/components/container";
import userImg from "@/assets/user.png";
import FavoriteCard from "./components/favorites";

import { FaShareAlt } from "react-icons/fa";

export default function Profile() {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="mt-8 mb-6 flex flex-col sm:flex-row items-center justify-between relative gap-3">
          <div className="w-full flex flex-col sm:flex-row items-center gap-4 text-lg justify-center sm:justify-normal">
            <Image
              src={userImg}
              alt="Imagem do usuário"
              className="rounded-full w-56 h-56"
            />
            <h1 className="font-bold text-2xl">Usuário do Sistema</h1>
          </div>
          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center mt-2">
            <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">
              Configurações
            </button>
            <button className="bg-gray-700 px-4 py-3 rounded-lg">
              <FaShareAlt size={24} color="#FFF" />
            </button>
          </div>
        </section>
        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
        </section>
      </Container>
    </main>
  );
}
