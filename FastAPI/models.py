from sqlalchemy import Column, Integer, String, Boolean, Float, Date
from database import Base

class Transaction(Base):
    __tablename__ = 'Transactions'
    
    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Float)
    category = Column(String)
    description = Column(String)
    is_income = Column(Boolean)
    date = Column(String)

class User(Base):
    __tablename__ = 'Users'
    
    id = Column(Integer, primary_key=True, index=True)
    starting_balance = Column(Float)
    goal_balance = Column(Float)
    
