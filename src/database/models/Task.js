module.exports = (sequelize, dataTypes) => {
  const Task = sequelize.define(`Task`, {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER,
    },
    priority: {
      type: dataTypes.STRING(30),
      allowNull: false
    },
    info_task: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    status: {
      type: dataTypes.TINYINT(10),
      allowNull: false
    }
  }, {
    tableName: `tasks`,
    timeStamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
  });
  Task.associate = function (models) {
    Task.belongsTo(models.User, {
      as: "users",
      foreignKey: "users_id"
    });
  }

  return Task;
};