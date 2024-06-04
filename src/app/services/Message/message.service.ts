import { Injectable } from '@angular/core';

/**Models */
import { MessageModel } from '@core/models/Message.model';
import { MessageItemModel } from '@core/models/MessageItem.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  /**Variables */
  messages: Array<MessageModel> = [
    {
      _id: '1290381290a',
      userName: 'Administrador',
      messages: [
        {
          _id: '127389a908',
          messageAuthor: 'Administrador',
          message: 'Buen día, desde este medio podremos comunicarnos de forma directa, cualquier tema favor de mandar por aquí, sim más por el momento, un saludo.'
        },
        {
          _id: '127389a900',
          messageAuthor: 'Jair Diaz',
          message: 'Muchas gracias por el aviso, enterado, cualquier tema sobre mis solicitudes las tratare por este medio.'
        }
      ]
    }
  ]

  getMessages(): Array<MessageModel> {
    return this.messages;
  }
  
  sendMessage(messageSelected: MessageModel, message: MessageItemModel): boolean {
    messageSelected.messages.push(message);
    return true;
  }
}
