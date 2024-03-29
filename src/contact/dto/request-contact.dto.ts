export class RequestContactDto {
  id?: string = null;

  email?: string;

  phoneNumber?: string;

  constructor(init: Partial<RequestContactDto>) {
    return Object.assign(this, init);
  }
}
