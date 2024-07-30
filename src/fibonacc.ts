console.log("hello JS")
/*
import { Field, Struct, ZkProgram, SelfProof} from 'o1js';


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
export const FibonacciSequence = ZkProgram({
  name: "fibonacci-sequence",
  publicOutput: Pair,
  
  methods: {
    baseCase: {
      privateInputs: [],
      
      async method() {
        return new Pair(Field(1), Field(1));
      },
    },
    
    step: {
      privateInputs: [SelfProof],
      
      async method(earlierProof: SelfProof<Pair, Pair>) {
        earlierProof.verify();
        
        const numbers = earlierProof.publicOutput;
        
        return new Pair(numbers.second, numbers.first.add(numbers.second));
      },
    },
  },
  });
  */