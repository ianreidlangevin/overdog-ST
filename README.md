
# Overdog - A scaffolding project for Craft CMS 3

_Following documentation is only in French for the moment_

#### Version
0.9.7
Project under development - do not use it before a stable version

#### Author
Ian Reid Langevin (3e joueur) • ian@3ejoueur.com

# Table des matières
<!-- TOC -->

- [Prérequis](#prérequis)
- [Configurations de départ (Get the party started!)](#configurations-de-départ-get-the-party-started)
- [Installation de Craft](#installation-de-craft)
- [Webpack et compilation](#webpack-et-compilation)
- [Utilitaires](#utilitaires)
- [Roadmap](#roadmap)

<!-- /TOC -->



# Prérequis

### Pour installation

- [Composer installé sur votre ordinateur / serveur de développement](https://getcomposer.org)
- [PHP installé sur votre ordinateur / serveur de développement]( https://www.php.net/manual/fr/install.php)


### Pour les _builds_

- [Node.js installé sur votre ordinateur / serveur de développement](https://nodejs.org/en/)
- Node en mode "development" ( Sous mac, dans le terminal : export NODE_ENV=development - Sous Windows avec powershell
$env:NODE_ENV="production" )
- [Yarn installé sur votre ordinateur](https://yarnpkg.com/lang/en/docs/install)


### Pour les déploiements _(pas nécessaire pour installation)_

- Clé SSH pour votre ordinateur de development - [Marche à suivre via Gitlab](https://docs.gitlab.com/ee/ssh/)
- Git installé



# Configurations de départ (Get the party started!)

### Base de données et dossier de projet
1. Créez un host sur votre serveur local, un dossier vide de projet (Composer fonctionne uniquement si le dossier est vide, donc ne pas utiliser un repo Git existant).
2. Créez une base de données MySQL (PostgreSQL est aussi supporté, mais utilisez MySQL).

### Téléchargez les paquets via Composer create
1. Allez dans le dossier créé via le terminal et faire :
```
composer create-project 3ejoueur/overdog .
```

2. Si vous ne souhaitez pas créer de dossier préalablement, faire composer create-project 3ejoueur/overdog sans le point. Un dossier sera créé, vous pourrez ensuite le renommer.

### Bon, pas trop vite ! Allez éditer votre fichier .env et faire pointer votre serveur sur le dossier web.

Dans votre fichier _.env_, allez inscrire votre url de développement, les infos de la base de données, etc.

> Ça y est! On va pouvoir installer. Wouuuut!



# Installation

### Installez Craft CMS

1. Dans votre dossier de projet, faire dans le terminal :
```
./craft setup/welcome
```
2. Inscrire les renseignements de votre base de données, host, etc.
3. Cela va aussi générer une SECURITY_KEY dans votre fichier .env. Cette clé sera la même pour tous, donc à garder dans votre app trousseau (LastPass, 1password, etc.).

> Pour le nom du site, faitez seulement _Enter_. Votre installation va se synchroniser avec les paramètres de Overdog par la suite.



### Installez les modules Node

Encore dans le dossier de projet ? Faites :
```
yarn install
```

- Cela va installer toutes les dépendances pour les _builds_ du projet. Webpack, Browsersync, etc.
- C'est aussi via cet outil que vous pourrez installer des plugins ou librairies Javascript.

> Les instructions pour utiliser Yarn se trouvent dans la section Utilitaires de ce document.



# Webpack et compilation

## En développement

Pour commencer à développer, allez dans le dossier du projet et faites dans votre terminal :

```
yarn start
```


Cela va démarrer la surveillance de vos fichiers, fusionner votre scss et JS.

> Pour afficher les changements sans page reload, utilisez http://localhost:3000 Cela va prendre dans votre fichier .env la variable SITE_URL

Pour arrêter le live watch, Browsersync et le proxy, faire :

```
CTRL + C
```


## Créer un build de production

AVANT TOUT DÉPLOIEMENT EN LIGNE, que ce soit staging ou prod, faites :

```
yarn build
```

### Cela va :
1. Ajouter un hash devant les fichiers compilés pour le _cache busting_
1. Minifier et créer les _chunks_ du code du projet, en séparant les vendors dans un fichier distinct
2. Appliquer les _polyfills_ selon notre config Babel
3. Générer un _Critical CSS_ pour la page d'accueil, le site doit être en mode Staging ou Production pour qu'il soit ajouté dans le head
4. Supprimer tout le contenu du dossier web/dist avant d'y mettre les nouveaux fichiers compilés



# Utilitaires


### SVGO - création du sprite SVG

Faire à la racine du projet :

```
yarn svg
```

> Cela va prendre tous les Svg dans le dossier src/svg et créer des versions optimisées dans src/svg/temp-optimized. Ces fichiers seront ensuite combinéS en _symbol_ dans un sprite disponible dans web/img. Le ID de chaque _symbol_ est le nom du fichier svg.

ATTENTION : les versions optimisées sont supprimées lors de chaque commande yarn svg. Il s'agit de fichiers temporaires qui sont joints au sprite et ne sont pas _commités_. Cela peut être aussi utile si vous souhaitez copier un code svg optimisé pour le joindre de manière Inline dans votre code. Ne jamais pointer sur ces fichiers directement de votre code.


### Stylelint

Pour _linter_ et _autofixer_ le Scss du projet :

```
yarn lint:fix
```


### Ajouter ou supprimer un paquet Node


1. Si un paquet pour le projet (Bootstrap, Flickity, etc.) :

```
yarn add [package]
```

2. Si un paquet pour le développement (Webpack, etc.) :

```
yarn add [package] -D
```

Pour enlever un paquet, faire yarn remove [package]

>[Cliquez ici pour la documentation officielle](https://yarnpkg.com/en/packages)

---

#### À noter

1. Votre fichier _.env_ ne doit jamais être dans un _commit_. Les infos s'y trouvant doivent être ajoutées dans un trousseau (LastPass, 1password, etc.).
2. Si vous ajoutez des variables au fichier env (exemple, une clé API, un token, etc.), n'oubliez pas de modifier le fichier .env.example pour faciliter le partage du projet.



# Roadmap

### To do
- Linter avec un hook pre-commit via Husky et lint-staged
- Ajouter Eslint pour le Javascript
- Enlever les styles de base et JS et les mettre dans une librairie externe. Plus facile pour la maintenance future. Overdog sera la structure fonctionnelle du projet, la librairie sera l'habillage.
- Créer une librairie de composantes html/twig.
