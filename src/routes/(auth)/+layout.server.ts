import { redirect } from '@sveltejs/kit';

export const load = ({ cookies }) => {
  const sessionId = cookies.get('sessionId');

  console.log('session', sessionId);

  if (!sessionId) {
    throw redirect(301, '/connexion');
  }
};
