import { MessageItemModel } from "./MessageItem.model";

export interface MessageModel {
    _id?: String,
    userName: String,
    messages: Array<MessageItemModel>
}  