import { FavoritePokemons, PokemonGrid } from "@/pokemons";

export const metadata = {
  title: 'Favoritos',
  description: 'Descripción de favoritos'
};

export default async function PokemonsFavoritosPage() {
  
  return (
    <div className="flex flex-col">
      <span className="text text-5xl my-2">
        Pokémons Favoritos <small className="text-blue-500">Global State</small>
      </span>

      <FavoritePokemons />
    </div>
  );
}