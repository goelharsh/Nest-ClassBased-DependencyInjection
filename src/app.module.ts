import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersStore } from './store/users.store';
import { GoelStore } from './store/goel.store';

@Module({
  imports: [],
  controllers: [UsersController],

  // Jo bhi chij as a dependency ke torr pe use ho skti hai use hum provider hi bolte hain 

  // in this provider, first paramter is the injection token 

  // ie ki kis naam se bulana hai hmne injectiio token ko 

  // and the second one is class, mtlb ki konsi class ka instance bnake rkhna hai 
  // providers: [{ provide: UsersStore, useClass: UsersStore}]


  // we can use shorthand syntax as well when the name of token and class is same [agr token or class ka naam alag hai to hme uper wala metod hi use krna padta hai ] 
  // this will work same as above 
  // providers: [UsersStore]


  // bs itna krne se hi nestjs framework isko register krdega and class ka instace bnake apne pass rkh kega



  // note 
  // also we can write give any name of injection token as well 
  // providers: [{provide: 'HARSH', useClass: UsersStore}]


  // let's understand that if we want to use class as GoelStore but injection token hmne Users stroe ka rkhana hai then 

  providers: [{ provide: UsersStore, useClass: GoelStore }]
})
export class AppModule {}
