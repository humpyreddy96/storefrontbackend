import {User,UserHub} from '../../models/user'

const store = new UserHub()

describe('User Model',()=>{
    it('should have an index method',()=>{
        expect(store.index).toBeDefined()
    })
})