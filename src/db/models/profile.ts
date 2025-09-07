import {
  DataTypes,
  Model,
  type ModelStatic,
  type Sequelize,
  type CreationOptional
} from 'sequelize'

// 1. Definir los atributos explícitos
export interface ProfileAttributes {
  id: CreationOptional<number>
  name: string
  description: string
  rol: string
  createdAt: CreationOptional<Date>
  updatedAt: CreationOptional<Date>
}
// 2. Definir los atributos para la creación
export interface ProfileCreationAttributes {
  name: string
  description: string
  rol: string
}
// 3. Definir la clase Profile usando ProfileAttributes
export class Profile extends Model<ProfileAttributes, ProfileCreationAttributes> {
  declare id: CreationOptional<number>
  declare name: string
  declare description: string
  declare rol: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  static initModel (sequelize: Sequelize): ModelStatic<Profile> {
    return Profile.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        description: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        rol: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
        }
      },
      {
        sequelize,
        modelName: 'Profile',
        tableName: 'Profile',
        timestamps: true
      }
    )
  }
}
