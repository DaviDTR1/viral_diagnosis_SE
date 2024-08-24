from pydantic import BaseModel
from typing import Optional, List

class User(BaseModel):
    name: str
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str
    
class TokenData(BaseModel):
    email: Optional[str] = None
    
class UserLogin(BaseModel):
    email: str
    password: str
    class Config:
        from_attributes = True