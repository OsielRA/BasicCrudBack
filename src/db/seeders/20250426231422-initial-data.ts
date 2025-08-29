'use strict'
import { QueryInterface } from 'sequelize'
import { UserTypes } from '../models/usertypes'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      // Insertar tipos de usuario
      await UserTypes.bulkCreate([
        { id: 1, name: 'Maestro' }
      ], { transaction })
    })
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      // Eliminar datos en orden inverso al de la inserción
      await UserTypes.destroy({ where: {}, transaction })
    })
  }
}
