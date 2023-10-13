export const load = ({ fetch, depends }) => {
  depends('pokedex:seen');

  console.log('LOAD SEEN');

  return {
    seen: fetch('/pokedex', {
      headers: {
        accept: 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(seen => seen as number[]),
  };
};
