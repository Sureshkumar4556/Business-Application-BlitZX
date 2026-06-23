from fastapi import APIRouter, HTTPException
from app.database.schemas.user import UserSignup, UserLogin
from app.database.db import SessionLocal
from app.database.models.user import User
from app.database.utils.hashing import (
    hash_password,
    verify_password
)
from app.database.utils.jwt_handler import create_token

router = APIRouter(prefix="/auth")


@router.post("/signup")
def signup(user: UserSignup):

    db = SessionLocal()

    existing = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing:
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

    return {
        "message": "User created successfully"
    }


@router.post("/login")
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
            detail="Invalid credentials"
        )

    if not verify_password(
        user.password,
        db_user.hashed_password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    token = create_token(
        {
            "user_id": db_user.id,
            "email": db_user.email
        }
    )

    return {
        "access_token": token,
    }