// src/api/dogFactsApi.ts
export const getDogFacts = async (count: number = 5): Promise<string[]> => {
    try {
      const response = await fetch(`https://dog-api.kinduff.com/api/facts?number=${count}`);
      const data = await response.json();
      return data.facts; // niz činjenica
    } catch (error) {
      console.error("Greška pri učitavanju činjenica:", error);
      return [];
    }
  };
  