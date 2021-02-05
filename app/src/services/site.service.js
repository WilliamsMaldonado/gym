import { SiteRepository } from '../repository/site.repository'
export class SiteService {
  constructor() {
    this.repository = new SiteRepository()
  }

  create ({ name, cityCode }) {
    return new Promise((resolve, reject) => {
      this.repository.get(name).then((site) => {
        if (site == null) {
          this.repository.create(name, cityCode).then((res) => {
            return resolve({ message: 'site create' })
          }).catch((err) => {
            console.log('ERROR:', err)
            return reject(new Error('Error site create'))
          })
        } else {
          return reject(new Error('Site alredy exist'))
        }
      }).catch((err) => {
        console.log('ERROR:', err)
        return reject(new Error('Error site create'))
      })
    })
  }
}
