import { CardItemModel } from "./CardItem.model";
import { MessageItemModel } from "./MessageItem.model";

export interface RequestModel {
    _id?: String,
    username?: String,
    item: CardItemModel,
    quantity: number,
    date: Date,
    description: String,
    status: boolean,
    messages?: Array<MessageItemModel>,
    datetimeStart?: Date, // Fecha de inicio de uso del equipo
    datetimeEnd?: Date,   // Fecha de finalización de uso del equipo

}  