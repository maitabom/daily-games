export async function getDailyGame() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 314 } }
    );
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
}


export async function getGamesData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=games`,
      { next: { revalidate: 314 } }
    );
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
}