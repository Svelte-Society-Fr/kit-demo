import { toggleFromTeam } from '$lib/server/database/bag';

export function PATCH({ params: { uuid } }) {
	const updatedBag = toggleFromTeam(uuid);

	return new Response(JSON.stringify(updatedBag));
}
