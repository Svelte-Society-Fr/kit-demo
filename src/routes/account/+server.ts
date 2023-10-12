import { login } from '$lib/server/database/account';

export function GET() {
  const account = login();

  return new Response(JSON.stringify(account));
}
