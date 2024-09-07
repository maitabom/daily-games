import { Metadata } from "next";
import { MetadataGameProperties } from "./props";
import Game from "@/models/game";

export async function getData(id: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 600 } }
    );
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
}

export async function getGameRamdom() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
}

export async function generateMetadata({
  params,
}: MetadataGameProperties): Promise<Metadata> {
  const data: Game = await getData(params.id);

  if (data) {
    return {
      title: data.title,
      description: data.description.slice(0, 100),
      openGraph: {
        title: data.title,
        images: [data.image_url]
      }
    }
  } else {
    return {
      title: "Erro!"
    }
  }
}
