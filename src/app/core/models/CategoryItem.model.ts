import { CardItemModel } from "./CardItem.model";

export interface CategoryItemModel extends CardItemModel {
    items: Array<CardItemModel>
}
