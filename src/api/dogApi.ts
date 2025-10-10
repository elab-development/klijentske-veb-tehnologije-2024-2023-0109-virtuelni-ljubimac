// src/api/dogApi.ts
export const fetchRandomDog = async (): Promise<string> => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return data.message; // vraća URL slike psa
};

// Funkcija za više pasa
export const getMultipleDogs = async (count: number): Promise<string[]> => {
  const promises = Array.from({ length: count }, () =>
    fetch("https://dog.ceo/api/breeds/image/random").then((res) => res.json())
  );
  const results = await Promise.all(promises);
  return results.map((r) => r.message);
};


