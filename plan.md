100 min

- connaissances JS, HTML, CSS
- pas de préquis Svelte

- Introduction Svelte (10 min max)
  - D'où ça vient ?
  - C'est quoi SvelteKit ?
  - Qui s'en sert ?
    - New York Times
    - RadioFrance
    - Decathlon
    - Apple
    - ...
  - Pourquoi on utilise Svelte ?

- Atelier
  - routing
    - pages statiques (FAQ)
    - menu (`+layout.svelte`) (à l'oral sous layouts)
  - page de pokedex
    - chargement des pokemons => `+page.server.ts`
    - page d'un pokemon `[id]`
  - page d'accueil
    - chargement des pokemons dans le `+layout.server.ts`
    - ajoute les Prey
    - création de l'API bag (`+server.ts`)
    - ne pas oublier de maj `seen`
    - nb attrapés dans le header (`+layout.server.ts` + `depends`) (à l'oral `+layout.ts`, `+page.ts`)
    - chargement asynchrone
  - page du sac
    - liste
    - libération des pokémons
    - changer le nom d'un pokémon => form actions
  - déploiement
