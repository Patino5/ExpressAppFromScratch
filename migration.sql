-- Create the table
DROP TABLE IF EXISTS owners;
CREATE TABLE owners (
    id serial PRIMARY KEY,
    firstName varchar(20),
    lastName varchar(20),
    gender varchar(6)
);
INSERT INTO owners (firstName, lastName, gender)
VALUES ('Rubeus', 'Hagrid', 'male');
INSERT INTO owners (firstName, lastName, gender)
VALUES ('Harry', 'Potter', 'male');
INSERT INTO owners (firstName, lastName, gender)
VALUES ('Hermoine', 'Granger', 'female');
INSERT INTO owners (firstName, lastName, gender)
VALUES ('Ronald', 'Weasley', 'male');
INSERT INTO owners (firstName, lastName, gender)
VALUES ('Albus', 'Dumbledore', 'male');
INSERT INTO owners (firstName, lastName, gender)
VALUES ('Nevil', 'Longbottom', 'male');
INSERT INTO owners (firstName, lastName, gender)
VALUES ('Tom', 'Riddle', 'male');
DROP TABLE IF EXISTS pets;
CREATE TABLE pets (
    id serial PRIMARY KEY,
    name varchar(20),
    kind varchar(20),
    age integer,
    ownerid integer REFERENCES owners(id) ON DELETE CASCADE
);
INSERT INTO pets (name, kind, age, ownerid)
VALUES ('Fang', 'Dog', 10, 1);
INSERT INTO pets (name, kind, age, ownerid)
VALUES ('Hedwig', 'Owl', 2, 2);
INSERT INTO pets (name, kind, age, ownerid)
VALUES ('Crookshanks', 'Cat', 8, 3);
INSERT INTO pets (name, kind, age, ownerid)
VALUES ('Scabbers', 'Rat', 43, 4);
INSERT INTO pets (name, kind, age, ownerid)
VALUES ('Fawkes', 'Phoenix', 10, 5);
INSERT INTO pets (name, kind, age, ownerid)
VALUES ('Buckbeak', 'Hippogriff', 2, 1);
INSERT INTO pets (name, kind, age, ownerid)
VALUES ('Trevor', 'Toad', 8, 6);
INSERT INTO pets (name, kind, age, ownerid)
VALUES ('Nagini', 'Snake', 3, 7);