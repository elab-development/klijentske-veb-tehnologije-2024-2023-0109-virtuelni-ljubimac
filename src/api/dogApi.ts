const BASE = 'https://dog.ceo/api';

export async function fetchBreedsList(): Promise<Record<string, string[]>> {
  const res = await fetch(`${BASE}/breeds/list/all`);
  const j = await res.json();
  return j.message;
}

export async function fetchRandomImage(): Promise<string> {
  const res = await fetch(`${BASE}/breeds/image/random`);
  const j = await res.json();
  return j.message;
}

export async function fetchRandomImageByBreed(breed: string): Promise<string> {
  const res = await fetch(`${BASE}/breed/${breed}/images/random`);
  const j = await res.json();
  return j.message;
}

// Dodaj prazni export da TypeScript vidi modul
export {};
