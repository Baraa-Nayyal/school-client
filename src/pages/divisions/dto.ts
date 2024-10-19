export class DivisionDto {
  name: string
  _id?: string;
}

export class ClassDto {
  _id?: string;
  name: string
  divisionsIds: string[]
}
