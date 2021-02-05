import {UserRepository} from '../../src/repository/user.repository'

describe('User repository test', () => {
    let repository;
    beforeEach(() => {
        repository = new UserRepository()
    })

    test('Test get login', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback(null, [{data: "data"}], null)
            })
        });
        repository.getLogin("name", "pass").then(res => {
            expect(res).toEqual({ data: 'data' })
            done()
        })
    })

    test('Test error get login', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback("Error", null, null)
            })
        });
        repository.getLogin("name", "pass").catch(err => {
            expect(err.message).toEqual("Error get login user")
            done()
        })
    })

    test('Test get user', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback(null, [{data: "data"}], null)
            })
        });
        repository.getUser("name").then(res => {
            expect(res).toEqual({ data: 'data' })
            done()
        })
    })

    test('Test error get user', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback("Error", null, null)
            })
        });
        repository.getUser("name").catch(err => {
            expect(err.message).toEqual("Error get user")
            done()
        })
    })

    test('Test create user', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback(null, true, null)
            })
        });
        repository.createUser("name","pass", 1, "site").then(res => {
            expect(res).toEqual(true)
            done()
        })
    })

    test('Test error create user', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback("Error", null, null)
            })
        });
        repository.createUser("name","pass", 1, "site").catch(err => {
            expect(err.message).toEqual("Error insert user")
            done()
        })
    })

    test('Test getUserSiteCity', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback(null, true, null)
            })
        });
        repository.getUserSiteCity(1, "site").then(res => {
            expect(res).toEqual(true)
            done()
        })
    })

    test('Test error getUserSiteCity', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback("Error", null, null)
            })
        });
        repository.getUserSiteCity( 1, "site").catch(err => {
            expect(err.message).toEqual("Error get users")
            done()
        })
    })
})