"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const store = new user_1.UserHub();
describe('User Model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have show method', () => {
        expect(store.show).toBeDefined();
    });
    it('should have create method', () => {
        expect(store.create).toBeDefined();
    });
    it('create method should add one user', async () => {
        const result = await store.create({
            first_name: 'John',
            last_name: 'Smith',
            password: 'password123'
        });
        expect(result).toEqual({
            first_name: 'John',
            last_name: 'Smith'
        });
    });
    it('show method should return list', async () => {
        const result = await store.show('1');
        expect(result).toEqual({
            first_name: 'John',
            last_name: 'Smith'
        });
    });
    it('index method should return list', async () => {
        const result = await store.index();
        expect(result).toEqual([{
                first_name: 'John',
                last_name: 'Smith'
            }]);
    });
});
