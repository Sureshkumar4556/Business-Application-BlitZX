from pydantic import BaseModel

class LeadCreate(BaseModel):
    name: str
    email: str
    phone: str
    service: str
    message: str