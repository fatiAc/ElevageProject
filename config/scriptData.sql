INSERT INTO elevageDB.dbo.T_Ingredient (id, nom) VALUES (1, 'ingredient1');
INSERT INTO elevageDB.dbo.T_Ingredient (id, nom) VALUES (2, 'ingredient2');
INSERT INTO elevageDB.dbo.T_Ingredient (id, nom) VALUES (3, 'ingredient3');
INSERT INTO elevageDB.dbo.T_Ingredient (id, nom) VALUES (4, 'ingredient4');
INSERT INTO elevageDB.dbo.T_Ingredient (id, nom) VALUES (5, 'ingredient5');
INSERT INTO elevageDB.dbo.T_Ingredient (id, nom) VALUES (6, 'ingredient6');

INSERT INTO elevageDB.dbo.T_Machine (id, capacite, name) VALUES (1, 100, 'Machine1');
INSERT INTO elevageDB.dbo.T_Machine (id, capacite, name) VALUES (2, 50, 'Machine2');
INSERT INTO elevageDB.dbo.T_Machine (id, capacite, name) VALUES (3, 60, 'Machine3');
INSERT INTO elevageDB.dbo.T_Machine (id, capacite, name) VALUES (4, 70, 'Machine4');
INSERT INTO elevageDB.dbo.T_Machine (id, capacite, name) VALUES (5, 150, 'Machine5');

INSERT INTO elevageDB.dbo.T_Nourriture (id, nom) VALUES (1, 'ration1');
INSERT INTO elevageDB.dbo.T_Nourriture (id, nom) VALUES (2, 'ration2');
INSERT INTO elevageDB.dbo.T_Nourriture (id, nom) VALUES (3, 'ration3');
INSERT INTO elevageDB.dbo.T_Nourriture (id, nom) VALUES (4, 'ration4');
INSERT INTO elevageDB.dbo.T_Nourriture (id, nom) VALUES (5, 'ration5');

INSERT INTO elevageDB.dbo.T_Formule (pourcentage, nourriture_ID, ingredient_ID, id) VALUES (10, 1, 2, 1);
INSERT INTO elevageDB.dbo.T_Formule (pourcentage, nourriture_ID, ingredient_ID, id) VALUES (20, 1, 1, 2);
INSERT INTO elevageDB.dbo.T_Formule (pourcentage, nourriture_ID, ingredient_ID, id) VALUES (50, 1, 5, 3);
INSERT INTO elevageDB.dbo.T_Formule (pourcentage, nourriture_ID, ingredient_ID, id) VALUES (15, 1, 3, 4);
INSERT INTO elevageDB.dbo.T_Formule (pourcentage, nourriture_ID, ingredient_ID, id) VALUES (5, 1, 6, 5);


INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (1, 1, 1);
INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (2, 1, 2);
INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (3, 1, 3);
INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (4, 1, 5);
INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (5, 2, 3);
INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (6, 2, 4);
INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (7, 2, 5);
INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (8, 3, 1);
INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (9, 4, 4);
INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (10, 4, 5);
INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (11, 5, 3);
INSERT INTO elevageDB.dbo.T_Machine_specialite (id, nourriture_ID, machine_ID) VALUES (12, 5, 5);


INSERT INTO elevageDB.dbo.T_TypePaddock (id, type) VALUES (1, 'laitiere');
INSERT INTO elevageDB.dbo.T_TypePaddock (id, type) VALUES (2, 'nouveau');


INSERT INTO elevageDB.dbo.T_Paddock (id, nom, typePaddock) VALUES (1, 'paddock1', 2);
INSERT INTO elevageDB.dbo.T_Paddock (id, nom, typePaddock) VALUES (2, 'paddock2', 1);
INSERT INTO elevageDB.dbo.T_Paddock (id, nom, typePaddock) VALUES (3, 'paddock3', 2);
INSERT INTO elevageDB.dbo.T_Paddock (id, nom, typePaddock) VALUES (4, 'paddock4', 1);


INSERT INTO elevageDB.dbo.T_Animal (snit, paddock_ID) VALUES (100, 3);
INSERT INTO elevageDB.dbo.T_Animal (snit, paddock_ID) VALUES (110, 4);
INSERT INTO elevageDB.dbo.T_Animal (snit, paddock_ID) VALUES (111, 3);
INSERT INTO elevageDB.dbo.T_Animal (snit, paddock_ID) VALUES (222, 3);
INSERT INTO elevageDB.dbo.T_Animal (snit, paddock_ID) VALUES (333, 3);
INSERT INTO elevageDB.dbo.T_Animal (snit, paddock_ID) VALUES (444, 2);
INSERT INTO elevageDB.dbo.T_Animal (snit, paddock_ID) VALUES (555, 2);
INSERT INTO elevageDB.dbo.T_Animal (snit, paddock_ID) VALUES (666, 2);
INSERT INTO elevageDB.dbo.T_Animal (snit, paddock_ID) VALUES (777, 3);
INSERT INTO elevageDB.dbo.T_Animal (snit, paddock_ID) VALUES (888, 3);
INSERT INTO elevageDB.dbo.T_Animal (snit, paddock_ID) VALUES (999, 3);



INSERT INTO elevageDB.dbo.T_Periode_alimentation (id, periode) VALUES (1, 'PM1');
INSERT INTO elevageDB.dbo.T_Periode_alimentation (id, periode) VALUES (2, 'PM2');
INSERT INTO elevageDB.dbo.T_Periode_alimentation (id, periode) VALUES (3, 'PR1');
INSERT INTO elevageDB.dbo.T_Periode_alimentation (id, periode) VALUES (4, 'PR2');


INSERT INTO elevageDB.dbo.T_User (login, password) VALUES ('admin', '123');
INSERT INTO elevageDB.dbo.T_User (login, password) VALUES ('root', '123');
