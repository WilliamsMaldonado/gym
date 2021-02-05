import { UserService } from "../../src/services/user.service"

describe('City service test', () => {
    let service

    beforeEach(() => {
        service = new UserService()
    })

    test('Test create user', (done) => {
        jest.spyOn(service.repository, 'getUser').mockReturnValue(Promise.resolve(null));
        jest.spyOn(service.repository, 'createUser').mockReturnValue(Promise.resolve("ok"));
        service.create({name: "name", code: 1, admin: 1, site: "site"}).then((res) => {
            expect(res.message).toEqual('user create')
            done()
        })
    });

    test('Test create user error create', (done) => {
        jest.spyOn(service.repository, 'getUser').mockReturnValue(Promise.resolve(null));
        jest.spyOn(service.repository, 'createUser').mockReturnValue(Promise.reject("ERROR"));
        service.create({name: "name", code: 1, admin: 1, site: "site"}).catch((err) => {
            expect(err.message).toEqual('Error user create')
            done()
        })
    });

    test('Test create user error user exist', (done) => {
        jest.spyOn(service.repository, 'getUser').mockReturnValue(Promise.resolve("user"));
        service.create({name: "name", code: 1, admin: 1, site: "site"}).catch((err) => {
            expect(err.message).toEqual('User alredy exist')
            done()
        })
    });

    test('Test create user error create getUser', (done) => {
        jest.spyOn(service.repository, 'getUser').mockReturnValue(Promise.reject("ERROR"));
        service.create({name: "name", code: 1, admin: 1, site: "site"}).catch((err) => {
            expect(err.message).toEqual('Error user create')
            done()
        })
    });

    test('Test authenticate ok token', (done) => {
        jest.spyOn(service.repository, "getLogin").mockReturnValue(Promise.resolve({email: "blabla", admin: 1}))
        service.authenticate({username: "user", password: "pass"}).then(res => {
            expect(res.token).toBeDefined()
            done()
        })
    })

    test('Test authenticate fail token', (done) => {
        jest.spyOn(service.repository, "getLogin").mockReturnValue(Promise.reject("ERROR"))
        service.authenticate({username: "user", password: "pass"}).catch(err => {
            expect(err.message).toEqual('Username or password is incorrect')
            done()
        })
    })

    test('Test get user by city and site', (done) => {
        jest.spyOn(service.repository, "getUserSiteCity").mockReturnValue(Promise.resolve("users"))
        service.getUsersSiteCity({codeCity: 1, nameSite: "site"}).then((res) => {
            expect(res.users).toEqual('users')
            done()
        })
    })

    test('Test error get user by city and site', (done) => {
        jest.spyOn(service.repository, "getUserSiteCity").mockReturnValue(Promise.reject("ERROR"))
        service.getUsersSiteCity({codeCity: 1, nameSite: "site"}).catch((err) => {
            expect(err.message).toEqual('Error get users')
            done()
        })
    })
})