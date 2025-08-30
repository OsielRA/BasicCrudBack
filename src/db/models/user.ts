import {
  DataTypes,
  Model,
  type ModelStatic,
  type Sequelize,
  type CreationOptional
} from 'sequelize'

// 1. Definir los atributos explícitos
export interface UserAttributes {
  id: CreationOptional<number>
  name: string
  lastName: string
  email: string
  password: string
  profileId: number | null
  createdAt: CreationOptional<Date>
  updatedAt: CreationOptional<Date>
}

export interface UserCreationAttributes {
  name: string
  lastName: string
  email: string
  password: string
  profileId?: number | null
}

// 2. Definir la clase User usando UserAttributes
export class User extends Model<UserAttributes, UserCreationAttributes> {
  declare id: CreationOptional<number>
  declare name: string
  declare lastName: string
  declare email: string
  declare password: string
  declare profileId: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  static initModel (sequelize: Sequelize): ModelStatic<User> {
    return User.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
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
          allowNull: false
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        profileId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
          references: {
            model: 'Profiles',
            key: 'id'
          }
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
        modelName: 'User',
        tableName: 'users',
        timestamps: true
      }
    )
  }
}
