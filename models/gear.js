require 

module.exports = function (sequelize, DataTypes) {
    var userProfile = sequelize.define("userProfile", {
        gear : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    userProfile.associate = function (models) {
        // We're saying that a userProfile should belong to User
        // A userProfile can't be created without a User due to the foreign key constraint
        userProfile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return userProfile;
};