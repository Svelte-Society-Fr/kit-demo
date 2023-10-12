import { addToBag, readBag } from '$lib/server/database/bag';

export function GET() {
  const bag = readBag();

  console.log('Bag', bag);
  return new Response(JSON.stringify(bag));
}

export function POST({ params: { id } }) {
  const updatedBag = addToBag(parseInt(id));

  return new Response(JSON.stringify(updatedBag));
}
