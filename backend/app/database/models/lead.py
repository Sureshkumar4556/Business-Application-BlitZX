from sqlalchemy import Column, Integer, String, Text
from app.database.db import Base

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100))
    phone = Column(String(20))
    service = Column(String(100))
    message = Column(Text)