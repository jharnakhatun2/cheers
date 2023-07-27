export interface ComType {
  id: number | string;
  image: string;
  title: string;
  price: string;
}

export async function getProducts():Promise<ComType[]> {
  let res = await fetch("/data.json");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data:ComType[] = await res.json();
  return data;
}


