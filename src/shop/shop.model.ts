import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table({
    tableName: "shop",
    timestamps: true
})
export class Shop extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;


    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    owner_id: number;


    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    balance: number;
}
