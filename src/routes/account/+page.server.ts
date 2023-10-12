import { deleteAccount, register } from '$lib/server/database/account.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  register: async ({ request }) => {
    const data = await request.formData();

    const name = data.get('name')?.toString();
    if (!name) {
      return fail(400, { name, missing: true });
    }

    register(name);

    throw redirect(307, '/');
  },
  quit: async () => {
    deleteAccount();

    throw redirect(307, '/');
  },
};
