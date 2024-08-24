from sqlalchemy import String, Integer, Column, JSON, Date
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass


class Diagnosis(Base):
    __tablename__ = "diagnosis"
    
    id = Column(Integer, primary_key=True, index=True)
    disease = Column(String)
    date = Column(Date)
    symptoms = Column(JSON)
    evolution = Column(JSON)

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)