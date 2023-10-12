import { readSeen } from '$lib/server/database/seen';

export function GET() {
  const seen = readSeen();

  console.log('Seen', seen);
  return new Response(JSON.stringify(seen));
}
