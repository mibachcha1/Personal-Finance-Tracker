from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated,List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers=['*'],
)

class TransactionBase(BaseModel):
    amount: float
    category: str
    description: str
    is_income: bool
    date: str

class TransactionModel(TransactionBase):
    id: int
    
    class Config:
        orm_mode = True
        
class UserBase(BaseModel):
    starting_balance: float
    goal_balance: float

class UserModel(UserBase):
    id: int
    
    class Config:
        orm_mode = True

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependancy = Annotated[Session, Depends(get_db)]
models.Base.metadata.create_all(bind=engine)

@app.post("/transactions/", response_model=TransactionModel)
def create_transaction(transaction:TransactionBase, db:db_dependancy):
    db_transaction = models.Transaction(**transaction.dict())
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction

@app.get("/transactions/",response_model=List[TransactionModel])
def read_transactions(db:db_dependancy,skip:int=0,limit:int=100):
    transactions = db.query(models.Transaction).offset(skip).limit(limit).all()
    return transactions

@app.delete("/transactions/{transaction_id}")
def delete_transaction(transaction_id: int, db: Session = Depends(get_db)):
    transaction = db.query(models.Transaction).filter(models.Transaction.id == transaction_id).first()
    if not transaction:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Transaction not found")
    
    db.delete(transaction)
    db.commit()
    return transaction

@app.post("/users/")
def create_user(user: UserBase, db:db_dependancy):
    db_transaction = models.User(**user.dict())
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction

@app.get("/users/{userId}", response_model=UserModel)
def read_user(userId: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == userId).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
    
