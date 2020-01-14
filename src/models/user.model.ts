export class User {
    firstName: string;
    lastName: string;
    email: string;
    uid: string;
    courses: Array<string>;

    getFullName() {
        return this.firstName + this.lastName
    }
}