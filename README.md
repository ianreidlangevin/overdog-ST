
# Overdog - A scaffolding project for Craft CMS 3

## Version
0.9.1
Project under development - do not use it before a stable version

## Author
- Ian Reid Langevin (3e joueur)
ian@3ejoueur.com


## Pré-requis

### Pour installation

- Composer installé sur votre ordinateur - https://getcomposer.org
- PHP installé sur votre ordinateur - https://www.php.net/manual/fr/install.php

### Pour les build

- Node.js installé sur votre ordinateur - https://nodejs.org/en/
- Yarn installé sur votre ordinateur - https://yarnpkg.com/lang/en/docs/install
- Prepros.io pour compiler le SASS et les fichiers JS - https://prepros.io/


## Installation

- Créez un host sur votre serveur local, un dossier vide de projet (composer fonctionne uniquement si le dossier est vide).
- Créez une base de données MySQL (PostgreSQL est aussi supporté, mais utilisez MySQL)
- Aller dans le dossier créé via le terminal et faire : composer create-project 3ejoueur/overdog .
- Si vous souhaitez ne pas créer de dossier préalablement, faire composer create-project 3ejoueur/overdog sans le point. Un dossier sera créé, vous pourrez ensuite le renommer.
- Suivre les étapes et entrez vos informations de base de données.
- Vidéo explicative et de démonstration de l'installation : https://www.dropbox.com/s/tcihrvagpd5d9ti/craft_overdog-install.mov?dl=0


## Une fois installé

### Installer les paquets.
- Ouvrir le Terminal (ou Console).
- Naviguer jusque dans le dossier src/lib.
- Une fois dans le dossier, faire yarn install - info: https://yarnpkg.com/en/docs/cli/
- Les dernières versions des paquets (Bootstrap, AOS, Flickity, GSAP tween, etc.) seront maintenant installées.
- Vous pouvez choisir ou non de les joindre à votre projet. Via le prepros.js et prepros.scss (voir arbres des fichers plus bas), supprimez ou ajoutez les appels aux paquets.

### Ajouter un paquet

- Aller dans le dossier lib via le terminal. Faire yarn add [package]. Remplacer package par le paquet à installer. Pour enlever un paquet, faire yarn remove [package]. Voir : https://yarnpkg.com/en/packages

## SASS and JS compilation

- Utilisez Prepros.io
- Ajoutez le dossier du projet dans Prepros.
- Le fichier prepros.config situé dans le projet sera chargé par défaut, avec les bons settings.
- Changez le localserver si vous travaillez en local via Mamp pour activer le live reload.
