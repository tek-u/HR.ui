// export class PeriodicElement {
//   name: string
//   position: number
//   weight: number
//   symbol: string
//   description: string
//   constructor() {
//     this.name = ''
//     this.position = 0
//     this.weight = 0
//     this.symbol = ''
//     this.description = ''
//   }
// }

export class user {
  id: number
  fname: string
  lname: string
  phone: string
  email: string
  isActive: boolean
  created: Date

  constructor()
  constructor(i?:number,fn?:string,ln?:string,ph?:string,em?:string,isA?:boolean) {
    this.id = i ?? 0
    this.fname = fn ?? ''
    this.lname = ln ?? ''
    this.phone = ph ?? ''
    this.email = em ?? ''
    this.isActive = isA ?? false
    this.created = new Date()
  }
  // public constructor(init?: Partial<user>) {
  //   Object.assign(this, init);
  // }
//   constructor(initialValues: Partial<user> = {}) {
//     if (initialValues) {
//       for (const key in initialValues) {
//         if (initialValues.hasOwnProperty(key)) {
//            this[key] = initialValues[key];
//         }
//       }
//     }
//   }
}
