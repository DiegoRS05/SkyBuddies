from pydantic import BaseModel
from typing import Optional, Text 

class ChatDTO(BaseModel):
    sender_uid: Text
    group_id: Text

class ChatMessageDTO(BaseModel):
    id: Optional[Text] = None
    sender_uid: Text 
    message: Text
    chat_id: Text