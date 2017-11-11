<<<<<<< HEAD
module.exports = function (sequelize, DataTypes) {
    var triviaUser = sequelize.define("Post", {
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
=======
module.exports = function(sequelize, DataTypes) {

  var triviaUser = sequelize.define("Post", {
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
      len: [2, 35]
    }
    },
    email: {
      type: DataTypes.TEXT,
      isEmail: true
    }
    },
    userName: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [5, 20]
    }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      isAlphanumeric: true
      len: [5, 15]
    }
  },
  
>>>>>>> c23279e4f988d0ac754d9eb0622ce8cb6aa51130




        Post.associate = function (models) {
            // We're saying that a Post should belong to an Author
            // A Post can't be created without an Author due to the foreign key constraint
            Post.belongsTo(models.triviaUser, {
                foreignKey: {
                    allowNull: false
                }
            });
        }
    return Post;
};
