# Url Shortener

[![License](https://img.shields.io/github/license/ermesonsampaio/url-shortener?style=for-the-badge)](https://github.com/ermesonsampaio/url-shortener/blob/main/LICENSE)

## Installation

```bash
git clone https://github.com/Ermeso/url-shortener.git

cd url-shortener

# Open Project in Your Code Editor
# In my case, Visual Studio Code
code .

# Create ormconfig.json
touch ormconfig.json

# Install dependencies
# npm: npm install
yarn

# Run project
yarn dev
```

## ormconfig.json

An example of the ormconfig.json file

```json
  {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "url-shortener",
    "synchronize": true,
    "logging": false,
    "entities": [
      "src/database/models/*.ts"
    ],
    "migrations": [
      "src/database/migrations/*.ts"
    ]
  }
```

## Using insomnia to test this API

- Open **Preferences > Data > Import Data > From File**
- Then navigate to the project folder and select the file inside the insomnia folder.
