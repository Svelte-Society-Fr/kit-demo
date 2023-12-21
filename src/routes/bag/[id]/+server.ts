import { addPokemonToBag } from '$lib/server/bag';
import { json } from '@sveltejs/kit';

export function POST({ params }) {
	const id = Number(params.id);

	addPokemonToBag(id);

	return json({});
}
