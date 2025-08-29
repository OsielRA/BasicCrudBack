import {
  DataTypes,
  Model,
  type ModelStatic,
  type Sequelize,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional
} from 'sequelize'

export class UserTypes extends Model<
InferAttributes<UserTypes>,
InferCreationAttributes<UserTypes>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  static initModel (sequelize: Sequelize): ModelStatic<UserTypes> {
    return UserTypes.init(
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
        modelName: 'UserTypes', // ← clave en sequelize.models
        tableName: 'userTypes', // ← tabla física (migración)
        timestamps: true
      }
    )
  }
}
