import { Controller, Inject, Optional } from "@nestjs/common";
import { UsersStore } from "./store/users.store";


@Controller('/users')
export class UsersController{

    // yha hum dekhenge ki hmne kis class ko inject krna hai 

    // now jab hmne constructor me UsersStore injection token ko pass krdia hai to ab nest js check kregi app module me ki Kya providers ke ander koi is naam ka provider hai jiksa naam UsersStore hai?  

    // to nestjs ne dekha ki hn, provider me ek provider hai 
    // so nest js will go to IOC Container, or khegi ki UsersStore class ka instance dedo mujhe (and we know that IOC container ke pass classes ke instances hote hain )

    // and this how class ka instance hmare pass yha inject ho jayega 

    // constructor(private store: UsersStore){
    //     console.log(this.store)
    // }


    // abhi uper wale me hmne  ek method dekha hai ki nestjs : Constructor ke signature ko dekhke apne app smjhgi ki kya injection token hai 

    // Another mehtod : Inject naam ka decorator use krke , jisme hum dependency ko resolve kra skte hain 

    // ye thodi redundant approach hai but iska bhi use hota hai 
    // constructor(@Inject(UsersStore) private store: UsersStore){}


    // Note:
    // Agr hmne proviers me UserStore ko provide ni kya to error ata hai but still agr us error ko overcome krna ho 
    // then we can use optional decorator 
    // Now agr UsersStore provides me provide nhi kua hua to bhi error nhi ayega 
    // constructor(@Optional() private store: UsersStore){

    // }


    // agr hmne injection token ka name kuch apna dia hua hai to hmne inject wale method ka use krna padta hai  
    // constructor(@Inject('HARSH') private store: UsersStore){
    //     console.log(this.store)
    // }


    // Is example me hmne token jo hai vo userstore ka use kia hua hai provider me and class jo hai vo hne goel store ki use ki hui hai 
    constructor(private store: UsersStore){
        console.log(this.store)
    }
}