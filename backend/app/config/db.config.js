module.exports = {
    HOST: "localhost",
    USER: "stigma",
    PASSWORD: "123456",
    DB: "mysql",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };