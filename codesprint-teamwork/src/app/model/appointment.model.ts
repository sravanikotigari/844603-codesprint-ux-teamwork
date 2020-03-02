export class Appoint {
    id: number;
    name: string;
    address: string;
    city: string;
    packagetype: string;
    trainerpreference: string;
    phone: string;

    constructor(name: string,
                address: string,
                packagetype: string,
                city: string,
                trainerpreference: string,
                phone: string) {
            this.address = address;
            this.city = city;
            this.name = name;
            this.packagetype = packagetype;
            this.trainerpreference = trainerpreference;
            this.phone = phone;



    }
}
