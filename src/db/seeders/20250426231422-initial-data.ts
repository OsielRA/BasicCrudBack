'use strict'
import { QueryInterface } from 'sequelize'
import { db } from '../models'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      // Insertar tipos de usuario
      await db.Profile.bulkCreate([
        { name: 'Admin', description: 'Administrador del sistema', rol: 'admin' }
      ], { transaction })
    })
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      // Eliminar datos en orden inverso al de la inserción
      await db.Profile.destroy({ where: {}, transaction })
    })
  }
}
