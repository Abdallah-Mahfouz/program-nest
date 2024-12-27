import { Injectable } from '@nestjs/common';
let users =[
  {name:"abdallah",age: 22},
  {name:"abdallah",age: 22},
  {name:"abdallah",age: 22},
  {name:"abdallah",age: 22},
  {name:"abdallah",age: 22},
]

//Design Pattern -->26 --> 23

// @Injectable()
export class AppService {
  constructor() {}
  getAllUsers(): any {
    return users
  }
}
