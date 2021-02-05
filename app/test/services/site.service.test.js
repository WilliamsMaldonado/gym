import { SiteService } from "../../src/services/site.service"

describe('Site service test', () => {
    let service

    beforeEach(() => {
        service = new SiteService()
    })

    test('Test create site', (done) => {
        jest.spyOn(service.repository, 'get').mockReturnValue(Promise.resolve(null));
        jest.spyOn(service.repository, 'create').mockReturnValue(Promise.resolve("ok"));
        service.create({name: "name", code: 1}).then((res) => {
            expect(res.message).toEqual('site create')
            done()
        })
    });

    test('Test create site error create', (done) => {
        jest.spyOn(service.repository, 'get').mockReturnValue(Promise.resolve(null));
        jest.spyOn(service.repository, 'create').mockReturnValue(Promise.reject("ERROR"));
        service.create({name: "name", code: 1}).catch((err) => {
            expect(err.message).toEqual('Error site create')
            done()
        })
    });

    test('Test create site error site exist', (done) => {
        jest.spyOn(service.repository, 'get').mockReturnValue(Promise.resolve("site"));
        service.create({name: "name", code: 1}).catch((err) => {
            expect(err.message).toEqual('Site alredy exist')
            done()
        })
    });

    test('Test create site error create get', (done) => {
        jest.spyOn(service.repository, 'get').mockReturnValue(Promise.reject("ERROR"));
        service.create({name: "name", code: 1}).catch((err) => {
            expect(err.message).toEqual('Error site create')
            done()
        })
    });
})