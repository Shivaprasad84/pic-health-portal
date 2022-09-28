import numbers
from typing import Optional
from pydantic import BaseModel

class User(BaseModel):
    email: str
    password: str
    age: Optional[int]
    gender: Optional[str]

class CustomResponse(BaseModel):
    status_code: int = 200
    message: Optional[str]

class UserCreatedResponse(BaseModel):
    email: str
    userId: str
