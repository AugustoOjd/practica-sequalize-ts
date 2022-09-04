import { Sequelize } from 'sequelize'


const db = new Sequelize('practica-node-ts', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    // logging: false
})


export default db