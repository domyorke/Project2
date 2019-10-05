module.exports = function (sequelize, DataTypes) {
    var userProfile = sequelize.define("userProfile", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //length property has a minimum of 1 character
                len: [1, ]
            }
        },
        forDemo: {
            type: DataTypes.STRING,
        },
        forRent: {
            type: DataTypes.STRING
        },
        forSale: {
            type: DataTypes.STRING
        }
    });

    userProfile.associate = function (models) {
        // We're saying that a userProfile should belong to an User
        // A userProfile can't be created without an User due to the foreign key constraint
        userProfile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return userProfile;
};