import { CityService } from "../../src/services/city.service"

describe('City service test', () => {
    let service

    beforeEach(() => {
        service = new CityService()
    })

    test('Test create city', (done) => {
        jest.spyOn(service.repository, 'get').mockReturnValue(Promise.resolve(null));
        jest.spyOn(service.repository, 'create').mockReturnValue(Promise.resolve("ok"));
        service.create({name: "name", code: 1}).then((res) => {
            expect(res.message).toEqual('city create')
            done()
        })
    });

    test('Test create city error create', (done) => {
        jest.spyOn(service.repository, 'get').mockReturnValue(Promise.resolve(null));
        jest.spyOn(service.repository, 'create').mockReturnValue(Promise.reject("ERROR"));
        service.create({name: "name", code: 1}).catch((err) => {
            expect(err.message).toEqual('Error city create')
            done()
        })
    });

    test('Test create city error city exist', (done) => {
        jest.spyOn(service.repository, 'get').mockReturnValue(Promise.resolve("city"));
        service.create({name: "name", code: 1}).catch((err) => {
            expect(err.message).toEqual('City alredy exist')
            done()
        })
    });

    test('Test create city error create get', (done) => {
        jest.spyOn(service.repository, 'get').mockReturnValue(Promise.reject("ERROR"));
        service.create({name: "name", code: 1}).catch((err) => {
            expect(err.message).toEqual('Error city create')
            done()
        })
    });
})