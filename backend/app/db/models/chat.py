from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional, List

class ChatMessage(BaseModel):
    id: Optional[str] = Field(default=None, title="id")
    sender_uid: str
    chat_id: str
    message: str

    class Config:
        from_attributes = True


class Chat(BaseModel):
    id: Optional[str] = Field(default=None, title="id")
    sender_uid : Optional[str] = Field(default=None, title="sender_uid") 
    group_id: str
    messages : Optional[List[str]] = Field(default=[], title="messages") # id_message
    updated_at: Optional[datetime] = Field(default=datetime.now(), title="updated_at")
    created_at: Optional[datetime] = Field(default=datetime.now(), title="created_at")