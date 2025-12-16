# Example de Docker-Compose

## Idée du projet

Ce projet est un projet présenté par *Celtak* (*Nicely Dev* sur youtube) dans la vidéo suivante :

[![Watch the video](https://i.ytimg.com/vi/8rDMTf73jnk/hqdefault.jpg)](https://youtu.be/8rDMTf73jnk?si=_IVU9WYFQz2rXoPg)

Ressources : 
- URL de la video : [https://www.youtube.com/embed/8rDMTf73jnk?si=BJzk1VoysDmD3gJv](https://www.youtube.com/embed/8rDMTf73jnk?si=BJzk1VoysDmD3gJv)
- Lien GitHub du projet vide : [https://github.com/Celtak/compose-yml-php-node-go](https://github.com/Celtak/compose-yml-php-node-go)
- Site web présentant le projet : [https://www.nicelydev.com/docker/compose-go-node-php](https://www.nicelydev.com/docker/compose-go-node-php)

## Présentation du projet

C'est un projet qui permet de comprendre comment utiliser un fichier `compose.yml` pour lancer trois sites web : 
- Un site en `Golang`
- Un site en `NodeJs`
- Un site en `PHP`

Ces trois sites sont lancés dans des conteneurs définis dans des fichiers `Dockerfile` respectifs.

Un conteneur `Nginx` est aussi lancé pour faire office de proxy et redirige les requêtes vers les bons conteneurs en fonction du chemin de la requête. Il est configuré via le fichier `nginx.conf` et permet surtout de faire la liaison entre le port 80 utilisé et les ports des différents conteneurs.

## Utiliser le projet

*Remarque: généralement il faut être en root pour faire les commandes `docker compose`*

Pour lancer le docker compose, on peut faire la commande : 
```bash
docker compose up --build
```
Cela va lancer les conteneurs et les construire si besoin. Il est possible que la première fois cela prenne un peu de temps pour télécharger les images de base et construire les différents conteneurs.

Pour l'arrêter on peut faire la commande : 
```bash
docker compose stop
```

Pour supprimer les conteneurs on peut faire la commande : 
```bash
docker compose rm
```