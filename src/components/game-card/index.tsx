import Image from "next/image";
import Link from "next/link";
import GameCardProperties from "./props";
import { BiRightArrowCircle } from "react-icons/bi";

export default function GameCard({ data }: GameCardProperties) {
  return (
    <Link href={`/game/${data.id}`}>
      <article className="w-full bg-slate-200 rounded-lg p-4 mb-5">
        <figure className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image
            src={data.image_url}
            alt={data.title}
            className="rounded-lg object-cover"
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          />
        </figure>
        <div className="flex items-center mt-4 justify-between">
          <p className="text-sm font-bold px-2 text-ellipsis truncate whitespace-nowrap overflow-hidden">{data.title}</p>
          <BiRightArrowCircle size={24} color="#000" />
        </div>
      </article>
    </Link>
  );
}
