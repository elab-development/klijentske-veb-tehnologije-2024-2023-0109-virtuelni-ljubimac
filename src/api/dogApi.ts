// src/api/dogApi.ts
export interface DogImage {
  message: string;
  status: string;
}

export async function getRandomDog(): Promise<DogImage> {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  if (!res.ok) throw new Error("Greška pri preuzimanju slike psa");
  return res.json();
}

export async function getMultipleDogs(count: number = 6): Promise<DogImage[]> {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
  if (!res.ok) throw new Error("Greška pri preuzimanju više slika pasa");
  const data = await res.json();
  return data.message.map((url: string) => ({ message: url, status: "success" }));
}

export {}; // 🔴 dodaj ovo da izbegneš TS1208 grešku


