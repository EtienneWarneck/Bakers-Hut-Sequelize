module.exports = function (sequelize, DataTypes) {
    var Pastry2 = sequelize.define("Pastry2", {
        pastry_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        pastry_name: {
            type: DataTypes.STRING,
             allowNull: false, 
             defaultValue: true
        }
    });
    return Pastry2;
}


// //CREATE TABLE pastries (
//     id int AUTO_INCREMENT NOT NULL,
//     pastry_name varchar(255) NOT NULL,
//     devoured BOOLEAN DEFAULT FALSE,
//     PRIMARY KEY (id)
//   );

// AcademyModule = sequelize.define('academy_module', {
//     academy_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true
//     },
//     module_id: DataTypes.INTEGER,
//     module_module_type_id: DataTypes.INTEGER,
//     sort_number: DataTypes.INTEGER,
//     requirements_id: DataTypes.INTEGER
// }, {
//     freezeTableName: true
// });


// type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true