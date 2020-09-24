console.log('DBROUTE: ', process.env.DBROUTE);

module.exports = {
  "name": "default",
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": process.env.TYPEORM_PASSWORD,
  "database": process.env.TYPEORM_DATABASE,
  "synchronize": true,
  "logging": true,
  "entities": [
    "src/entity/*.*"
  ]
}