module.exports = function (sequelize, DataTypes) {
    var TriviaUser = sequelize.define("TriviaUser", {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [2, 25]
                }
            },
            lastName: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [2, 35]
                }
            },
            email: {
                type: DataTypes.TEXT,
                validate: {
                    isEmail: true
                }
            },
            userName: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [5, 20]
                }
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    isAlphanumeric: true,
                    len: [5, 15]
                }
            },
            photo: {
                type: DataTypes.TEXT,
                allowNull: true,
            }
        })




        // TriviaUser.associate = function (models) {
        //     // We're saying that a TriviaUser should belong to an Author
        //     // A TriviaUser can't be created without an Author due to the foreign key constraint
        //     TriviaUser.belongsTo(models.TriviaUser, {
        //         foreignKey: {
        //             allowNull: false
        //         }
        //     });
        // }
    return TriviaUser;
};
