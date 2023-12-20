import { addExp } from '$lib/server/database/bag';

export function PATCH({ params: { uuid, exp } }) {
	const updatedBag = addExp(uuid, Number(exp));

	return new Response(JSON.stringify(updatedBag));
}
