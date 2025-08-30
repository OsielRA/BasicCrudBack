'use strict'
import { QueryInterface, DataTypes, Sequelize } from 'sequelize'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER.UNSIGNED
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        profileId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
          references: {
            model: 'profiles',
            key: 'id'
          }
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      }, { transaction })
    })
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('users', { transaction })
    })
  }
}
