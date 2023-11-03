import { rename } from '$lib/server/database/bag';
import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const name = data.get('name')?.toString();
    const uuid = data.get('id')?.toString();

    if (!name) {
      return fail(400, { uuid, missing: true });
    }
    if (!uuid) {
      return fail(400, { uuid, missing: true });
    }

    rename(uuid, name);
  },
};
