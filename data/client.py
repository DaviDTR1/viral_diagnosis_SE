from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DB_URL = 'sqlite:///VirusDiagnosis.db'
# SQLALCHEMY_DB_URL = "postgresql://user:password@postgresserver/db"

engine = create_engine(SQLALCHEMY_DB_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

#Functions
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()