import { CardItemModel } from "./CardItem.model";
import { CategoryItemModel } from "./CategoryItem.model";

export interface AreaItemModel extends CardItemModel {
    categories: Array<CategoryItemModel>
}
