import { CityRepository } from '../repository/city.repository'
export class CityService {
  create ({ name, code }) {
    return new Promise((resolve, reject) => {
      const repository = new CityRepository()
      repository.get(code).then((city) => {
        if (city == null) {
          repository.create(name, code).then((res) => {
            return resolve({ message: 'city create' })
          }).catch((err) => {
            console.log('ERROR:', err)
            return reject(new Error('Error city create'))
          })
        } else {
          return reject(new Error('City alredy exist'))
        }
      }).catch((err) => {
        console.log('ERROR:', err)
        return reject(new Error('Error city create'))
      })
    })
  }
}
