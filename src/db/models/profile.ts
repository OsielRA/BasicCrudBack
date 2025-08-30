import {
  DataTypes,
  Model,
  type ModelStatic,
  type Sequelize,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional
} from 'sequelize'

export class Profile extends Model<
InferAttributes<Profile>,
InferCreationAttributes<Profile>
> {
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
