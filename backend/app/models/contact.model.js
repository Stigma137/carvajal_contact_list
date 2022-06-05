module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
      name: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mainTel: {
        type: Sequelize.STRING
      },
      secondTel: {
        type: Sequelize.STRING
      },
      cellularNumber: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      jobTittle: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      },
    });
    return Contact;
  };