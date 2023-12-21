## Fight !

Faire une app de baston de Pokemon avec base de données JSON. On utilise le fichier `pokemons.json` pour les données.

### Page de création de personnage

- Formulaire pour choisir id de pokemon (avec un radio bouton), et un nom (par défaut, le nom du pokemon, mais vous pouvez choisir de mettre autre chose) et un
- Sur le serveur, lorsque vous créez le combattant, lui donner aléatoirement un nombre de PV (entre 50 et 200) et une force (entre 20 et 50)
- Ajouter le combattant créé en base sous la forme `{ uuid, name, id, points, pv, force }`

### Page d'accueil

- Afficher les combattants en base, et un lien inactif vers la page de combat
- Sélection de 2 combattants (et pas plus) parmi ceux en base
- Lorsque les 2 combattants sont choisis, activer le lien pour qu'il soit cliquable

### Page de combat

- Utiliser une URL avec en queryString (`/blabla?uuid1=...&uuid2=...`) le uuid de chaque combattant
- Afficher les images et PV de chaque combattant de part et d'autre de l'écran
- Lancer le combat au `onMount`. Le déroulé du combat n'est que côté client, le résultat sera ensuite envoyé au serveur.
- Le combat se déroule comme suit:
  - toutes les 2s (`setInterval`)
    - pour le pokemon 1, choisir aléatoirement un nombre entre 0 et sa force, représentant la puissance de son coup actuel
    - retrancher la puissance du coup du pokemon 1 a la vie du pokemon 2
    - faire la même chose dans l'autre sens (le pokemon 2 frappe le pokemon 1)
    - mettre a jour visuellement les PV de chaque pokemon
    - après les 2 coups, vérifier si l'un des deux pokemons (ou les 2) est tombé à zéro PV
      - si oui, alors arrêter le combat (donc arrêter l'intervalle).
      - si non, continuer
    - si le combat est fini, afficher le nom du vainqueur (ou "match nul" si les deux pokemons sont KO en même temps), et envoyer le résultat au serveur
      - mettre à jour le nb de points pour chaque combattant: 3 points pour le vainqueur, 0 pour le perdant, 1 point pour les matchs nuls
      - mettre à jour l'historique de combats (un historique unique de tous les combats sous forme de liste `[{ uuid1, uuid2, winner }]`)
    - une fois la récompense fournie, proposer de faire un nouveau combat (lien vers la page d'accueil)

### Page liste combattants

- afficher tous les combattants, avec leur nom, leur image et leur nombre de points
- classer les combattants par nombre de points décroissant

### Page de combattant

- afficher les infos du combattant (nom, image et nb de points)
- afficher l'historique de combats de ce combattant
  - une liste de ses opposants, avec "Victoire", "Défaite" ou "Match nul" affiché à côté

### Menu

- Afficher les liens vers les différentes pages
- Afficher le nom, l'image et le nb de points du champion actuel, s'il existe
