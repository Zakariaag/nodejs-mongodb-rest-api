# ⚙️ Node.js & MongoDB REST API

Conception et développement d'une **API REST backend** robuste, scalable et performante construite avec l'environnement d'exécution **Node.js** et le framework **Express**, utilisant **MongoDB** comme base de données NoSQL via l'ODM Mongoose.

## 🚀 Fonctionnalités & Architecture

* **🏗️ Architecture MVC** : Séparation stricte des responsabilités (Modèles, Vues/Routes, Contrôleurs) pour garantir la maintenabilité du code source.
* **🔌 Opérations CRUD Complètes** : Implémentation complète des méthodes HTTP (`GET`, `POST`, `PUT`, `DELETE`) pour la gestion dynamique des ressources en base de données.
* **🔒 Sécurisation des Données** : Centralisation et masquage des données sensibles (Chaîne de connexion de la base de données, ports de l'application) à l'aide de variables d'environnement (`.env`).
* **🧪 Tests d'Intégration** : Validation systématique de l'ensemble des points d'accès (Endpoints) de l'API à travers des collections de tests automatisées sur **Postman**.

## 🛠️ Stack Technique

* **Runtime :** Node.js
* **Framework Backend :** Express.js
* **Base de Données :** MongoDB (NoSQL)
* **Modélisation de Données :** Mongoose ODM
* **Gestion des Configurations :** Dotenv
* **Outil de Test :** Postman API Platform

## 📁 Structure Globale du Projet

```text
├── config/          # Configurations (Connexion MongoDB)
├── controllers/     # Logique métier et fonctions de contrôle
├── models/          # Schémas et structures de données Mongoose
├── routes/          # Définition des points d'accès (Endpoints) HTTP
├── .env.example     # Modèle de configuration des variables d'environnement
├── server.js        # Point d'entrée de l'application
└── package.json     # Gestion des dépendances et scripts npm
```
