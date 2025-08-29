import {
  DataTypes,
  Model,
  type ModelStatic,
  type Sequelize,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional
} from 'sequelize'

export class User extends Model<
InferAttributes<User>,
InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare lastName: string
  declare email: string
  declare password: string
  declare userTypeId: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  /** Solo atributos; sin asociaciones aquí. */
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
          // unique: true  // (lo ideal es definirlo en migración)
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        userTypeId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true
          // Las FK se definen en migración; aquí no es obligatorio `references`
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
        modelName: 'User', // ← clave en sequelize.models
        tableName: 'users', // ← tabla física (migración)
        timestamps: true
      }
    )
  }
}
