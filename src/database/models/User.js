module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define(`User`, {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER,
    },
    name: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    lastname: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: dataTypes.STRING(61),
      allowNull: false
    }
  }, {
    tableName: `users`,
    timestamps: false,
  });
  User.associate = function (models) {
    User.hasMany(models.Task, {
      as: "tasks",
      foreignKey: "users_id"
    });
  }

  return User;
};