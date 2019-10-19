module.exports = function (sequelize, DataTypes) {
    var Gear = sequelize.define("Gear", {
        gear : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Gear.associate = function (models) {
        // We're saying that a userProfile should belong to User
        // A userProfile can't be created without a User due to the foreign key constraint
        Gear.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    };
    return Gear;
};