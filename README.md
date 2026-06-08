# 📦 Test Unitaire Débutant - Jest

## 🎯 Objectif du projet

Ce projet a pour objectif de découvrir les tests unitaires en JavaScript avec **Jest**, en créant une fonction simple et en vérifiant son bon fonctionnement à l’aide de tests automatisés.

---

## 🛠️ Technologies utilisées

- Node.js
- Jest
- JavaScript (CommonJS)
- Git / GitHub

---

## 📁 Structure du projet

```
test-unitaire-debutant/
│
├── math.js
├── math.test.js
├── package.json
├── node_modules/
└── images/
    ├── capture1.png
    ├── capture2.png
    ├── capture3.png
    ├── capture4.png
    ├── capture5.png
    └── capture6.png
```

---

## 🚀 Étapes du projet

---

## 1️⃣ Initialisation du projet Node.js

Commande :

```bash
npm init -y
```

📸 Capture :

![Initialisation Node](images/capture1.png)

---

## 2️⃣ Installation de Jest

Commande :

```bash
npm install --save-dev jest
```

📸 Capture :

![Installation Jest](images/capture2.png)

---

## 3️⃣ Création de la fonction

Fichier : `math.js`

```javascript
function addition(a, b) {
  return a + b;
}

module.exports = { addition };
```

📸 Capture :

![Fonction addition](images/capture3.png)

---

## 4️⃣ Création des tests unitaires

Fichier : `math.test.js`

```javascript
const { addition } = require("./math.js");

describe("Opérations mathématiques de base", () => {
  test("additionne 2 et 3 pour obtenir 5", () => {
    expect(addition(2, 3)).toBe(5);
  });

  test("additionne un nombre positif et un nombre négatif", () => {
    expect(addition(5, -2)).toBe(3);
  });
});
```

📸 Capture :

![Tests Jest](images/capture4.png)

---

## 5️⃣ Exécution des tests

Commande :

```bash
npm test
```

📸 Capture :

![Tests réussis](images/capture5.png)

---

## 6️⃣ Test en erreur puis correction

- Modification volontaire de la fonction
- Vérification de l’échec des tests
- Correction du code
- Retour au vert (PASS)

📸 Capture :

![Cycle test erreur correction](images/capture6.png)

---

## 🧠 Compétences acquises

- Initialisation d’un projet Node.js
- Installation et configuration de Jest
- Création de fonctions JavaScript simples
- Écriture de tests unitaires
- Compréhension des erreurs et correction
- Utilisation de Git et documentation Markdown

---

## ✅ Conclusion

Ce projet m’a permis de comprendre le rôle des tests unitaires et leur importance dans la qualité du code. Jest permet de vérifier automatiquement le bon fonctionnement des fonctions et d’éviter les régressions.
