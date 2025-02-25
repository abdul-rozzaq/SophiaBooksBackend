import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'sale-parts'})

export class SaleParts extends Model<SaleParts>{
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    partiya_id: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    saleItem_id: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    count: number
}