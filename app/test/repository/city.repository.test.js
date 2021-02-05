import {CityRepository} from '../../src/repository/city.repository'

describe('City repository test', () => {
    let repository;
    beforeEach(() => {
        repository = new CityRepository()
    })

    test('Test get city', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback(null, [{data: "data"}], null)
            })
        });
        repository.get(1).then(res => {
            expect(res).toEqual({ data: 'data' })
            done()
        })
    })

    test('Test error get city', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback("Error", null, null)
            })
        });
        repository.get(1).catch(err => {
            expect(err.message).toEqual("Error get city")
            done()
        })
    })

    test('Test create city', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback(null, true, null)
            })
        });
        repository.create("name",1).then(res => {
            expect(res).toEqual(true)
            done()
        })
    })

    test('Test error create city', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback("Error", null, null)
            })
        });
        repository.create("name",1).catch(err => {
            expect(err.message).toEqual("Error insert city")
            done()
        })
    })
})