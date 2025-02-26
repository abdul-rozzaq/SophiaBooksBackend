import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Partiya } from 'src/partiya/partiya.model';
import { SaleItem } from 'src/sale-item/sale-item.model';
import { Sale } from 'src/sale/sale.model';

@Table({ tableName: 'sale-parts' })
export class SaleParts extends Model<SaleParts> {
  @ForeignKey(() => Partiya)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  partiya_id: number;

  @ForeignKey(() => SaleItem)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sale_item_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  count: number;

  @BelongsTo(() => Partiya)
  partiya: Partiya;

  @BelongsTo(() => SaleItem)
  saleItem: SaleItem;
}
