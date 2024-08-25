export async function getData(title: string) {
  try {
    const decodeTitle = decodeURI(title);
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`
    );
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data.");
  }
}
