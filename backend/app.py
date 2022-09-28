from ast import List
from http.client import HTTPException
from typing import Dict

import uvicorn
from core import create_app
from fastapi import status
from schemas import User, CustomResponse

app = create_app()
images = dict()

users: Dict[str, User] = dict()


@app.get('/users')
def getUsers() -> List:
  return users.items()


@app.post('/login', status_code=status.HTTP_200_OK)
def loginUser(user: User) -> CustomResponse:
  if user.email not in users:
    return CustomResponse(status_code=404, message=f"User with {user.email} not found.")

  return CustomResponse(status_code=200, message='Successfully logged in')


@app.post('/signup', status_code=status.HTTP_201_CREATED)
def signupUser(user: User) -> CustomResponse:
  users[user.email] = user
  return CustomResponse(status_code=200, message=f'User {user.email} Created')

def main():
    uvicorn.run('app:app', host='localhost', port=5010, reload=True)

if __name__ == '__main__':
    main()
