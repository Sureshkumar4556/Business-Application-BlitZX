from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.schemas.lead import LeadCreate
from app.database.models.lead import Lead
from app.database.db import SessionLocal
from app.database.routes.auth import router as auth_router
from app.database.db import engine
from app.database.models.user import User
from fastapi import FastAPI, HTTPException
from app.database.schemas.user import UserSignup, UserLogin
from app.database.utils.hashing import hash_password, verify_password
from app.database.utils.jwt_handler import create_token

User.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(auth_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/auth/signup")
def signup(user: UserSignup):

    print(user.password)
    print(type(user.password))

    db = SessionLocal()

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    new_user = User(
        name=user.name,
        email=user.email,
        hashed_password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "Account created successfully"
    }


@app.post("/auth/login")
def login(user: UserLogin):

    db = SessionLocal()

    db_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if not verify_password(
        user.password,
        db_user.hashed_password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    token = create_token({
        "user_id": db_user.id,
        "email": db_user.email
    })

    return {
        "message": "Login successful",
        "access_token": token
    }


@app.post("/leads")
def create_lead(lead: LeadCreate):

    db = SessionLocal()

    new_lead = Lead(
        name=lead.name,
        email=lead.email,
        phone=lead.phone,
        service=lead.service,
        message=lead.message
    )

    db.add(new_lead)
    db.commit()
    db.refresh(new_lead)

    return {"message": "Data saved successfully"}