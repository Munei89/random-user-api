export class RandomUser {
  constructor(
    public photoUrl: string,
    public name: string,
    public email: string,
    public address: string,
    public city: string,
    public phone: string,
    public birthDate: Date
  ) {}
}
