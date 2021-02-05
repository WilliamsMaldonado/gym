import {SiteRepository} from '../../src/repository/site.repository'

describe('Site repository test', () => {
    let repository;
    beforeEach(() => {
        repository = new SiteRepository()
    })

    test('Test get site', (done) => {
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

    test('Test error get site', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback("Error", null, null)
            })
        });
        repository.get(1).catch(err => {
            expect(err.message).toEqual("Error get site")
            done()
        })
    })

    test('Test create site', (done) => {
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

    test('Test error create site', (done) => {
        jest.spyOn(repository.connection, 'getConnection').mockReturnValue({
            execute: ((sql, values, callback) => {
                return callback("Error", null, null)
            })
        });
        repository.create("name",1).catch(err => {
            expect(err.message).toEqual("Error insert site")
            done()
        })
    })
})