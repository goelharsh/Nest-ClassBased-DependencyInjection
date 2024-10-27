import { Injectable } from "@nestjs/common";

interface User{
    name: string;
    age: number;
    id: number;
}

// We are going to see that how can we use this class as a DEPENDENCY 

// to make it dependency 
// First of all 

// - decorate the class as injectable 
// - register this class in module (bcoz : UsersStore class ka instance tab tak ni bnega jab tak hum is class ko kisi module me register na krde ) 

@Injectable()
export class UsersStore{
    private store = new Map<number, User>();

    addUser(user: User){
        this.store.set(user.id, user);
    }

    getUser(id: number){
        return this.store.get(id);
    }

    getUsers(){
        return Array.from(this.store).map((_,user)=> user);
    }

    updateUser(id:number, user: User){
        this.store.set(id,user);
    }

    deleteUser(id: number){
        this.store.delete(id);
    }
}