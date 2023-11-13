-- Create the table
DROP TABLE IF EXISTS pets;

DROP TABLE IF EXISTS owners;

CREATE TABLE owners (
    id serial PRIMARY KEY,
    first_name varchar(20),
    last_name varchar(20)
    gender varchar(6)
)

CREATE TABLE pets (
    id serial PRIMARY KEY,
    name varchar(20),
    kind varchar(20),
    age integer,
    owner_id integer FOREIGN KEY REFERENCES owners(id)
);

INSERT INTO owners (first_name, last_name, gender) VALUES ('Rubius', 'Hagrid', 'male');
INSERT INTO owners (first_name, last_name, gender) VALUES ('Harry', 'Potter', 'male');
INSERT INTO owners (first_name, last_name, gender) VALUES ('Hermoine', 'Granger', 'female');
INSERT INTO owners (first_name, last_name, gender) VALUES ('Ronald', 'Weasley', 'male');
INSERT INTO owners (first_name, last_name, gender) VALUES ('Albus', 'Dumbledore', 'male');
INSERT INTO owners (first_name, last_name, gender) VALUES ('Nevil', 'Longbottom', 'male');
INSERT INTO owners (first_name, last_name, gender) VALUES ('Tom', 'Riddle', 'male');


INSERT INTO pets (name, kind, age, owner_id) VALUES ('Fang', 'Dog', 10);
INSERT INTO pets (name, kind, age, owner_id) VALUES ('Hedwig', 'Owl', 2);
INSERT INTO pets (name, kind, age, owner_id) VALUES ('Crookshanks', 'Cat', 8);
INSERT INTO pets (name, kind, age, owner_id) VALUES ('Scabbers', 'Rat', 43);
INSERT INTO pets (name, kind, age, owner_id) VALUES ('Fawkes', 'Phoenix', 10);
INSERT INTO pets (name, kind, age, owner_id) VALUES ('Buckbeak', 'Hippogriff', 2);
INSERT INTO pets (name, kind, age, owner_id) VALUES ('Trevor', 'Toad', 8);
INSERT INTO pets (name, kind, age, owner_id) VALUES ('Nagini', 'Snake', 3);
