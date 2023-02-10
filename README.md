# README

## Description

Ce projet est un exemple de projet utilisant le framework [Ruby on Rails](http://rubyonrails.org/) et la bibliothèque
[Javascript Blockly de Google](https://developers.google.com/blockly/guides/overview?hl=fr) pour fournir un environnement visuel de programmation facile à utiliser.  
La coloration syntaxique est gérée par Highlight.js.

<br />

Le fichier app/views/pages/blocky.html.erb définit la vue qui contient le conteneur Blockly et un bouton pour exécuter le code généré.  
Le fichier app/javascript/controllers/blocky_controller.js est un contrôleur Stimulus qui se connecte à la vue et gère les fonctionnalités de Blockly.   Il permet d'injecter Blockly dans le conteneur, de définir les variables disponibles et de générer du code JavaScript à partir des blocs de Blockly.  
Le code généré peut être exécuté en cliquant sur le bouton "Exécuter le code".  

<br />

## Remerciements

Ce projet est basé sur le projet venant de [Dean DeHart](https://github.com/Deanout).
