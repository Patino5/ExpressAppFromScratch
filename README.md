# ExpressAppFromScratch

# Hogwarts Database

Welcome to the magical world of Hogwarts! This database stores information about pets and owners within the Wizarding World.

## Table of Contents
- [Database Overview](#database-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Frontend Integration](#frontend-integration)
- [Contributing](#contributing)
- [License](#license)

## Database Overview

The Hogwarts Database consists of two main tables:

### Owners Table
- `id`: Primary key, unique identifier for each owner.
- `firstName`: First name of the owner.
- `lastName`: Last name of the owner.
- `gender`: Gender of the owner.

### Pets Table
- `id`: Primary key, unique identifier for each pet.
- `name`: Name of the pet.
- `kind`: Type or species of the pet.
- `age`: Age of the pet.
- `ownerId`: Foreign key referencing the `id` in the Owners table, indicating the owner of the pet.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Patino5/ExpressAppFromScratch.git
Install dependencies:

bash
Copy code
npm install
Set up your PostgreSQL database and configure the connection details in server.js.

Run the application:

bash
Copy code
node server.js
Usage
Access the API at http://localhost:3050 to interact with the Hogwarts Database.

Endpoints
Get All Owners
Endpoint: /api/owners
Method: GET
Description: Retrieve information about all owners.
Get One Owner
Endpoint: /api/owners/:id
Method: GET
Description: Retrieve information about a specific owner based on the provided id.
Get All Pets
Endpoint: /api/pets
Method: GET
Description: Retrieve information about all pets.
Get One Pet
Endpoint: /api/pets/:id
Method: GET
Description: Retrieve information about a specific pet based on the provided id.
Create Owner
Endpoint: /api/owners
Method: POST
Description: Create a new owner. Requires firstname, lastname, and gender in the request body.
Create Pet
Endpoint: /api/pets
Method: POST
Description: Create a new pet. Requires name, kind, age, and ownerid in the request body.
Update Owner
Endpoint: /api/owners/:id
Method: PUT
Description: Update an existing owner based on the provided id. Requires firstname, lastname, and gender in the request body.
Update Pet
Endpoint: /api/pets/:id
Method: PUT
Description: Update an existing pet based on the provided id. Requires name, kind, age, and ownerid in the request body.
Delete Owner
Endpoint: /api/owners/:id
Method: DELETE
Description: Delete an existing owner based on the provided id.
Delete Pet
Endpoint: /api/pets/:id
Method: DELETE
Description: Delete an existing pet based on the provided id.
Frontend Integration
The frontend of the Hogwarts Database is available in the public directory. It provides a user interface to interact with the API endpoints.

To view the frontend, open http://localhost:3050 in your browser after running the server.



Entity Relational Diagram
![image](https://github.com/Patino5/ExpressAppFromScratch/assets/106916823/cd3c4c55-b137-45a3-9c4d-1cc57389329c)
