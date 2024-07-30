import { Field, Struct} from 'o1js';

export class Pair extends Struct ({
  first: Field,
  second: Field,
}) {
  constructor(first: Field, second: Field) {
    super({ first, second });
    this.first = first;
    this.second = second;
  }
};