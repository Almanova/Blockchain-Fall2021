export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}
  
export const products = [
    {
      id: 1,
      name: 'Ethiopian Coffee',
      price: 799,
      description: '"Ethiopia Genika" is a type of Arabica coffee of single origin grown exclusively in the Bench Maji Zone of Ethiopia.'
    },
    {
      id: 2,
      name: 'Colombian coffee',
      price: 699,
      description: 'Colombia is famous for growing some of the best coffee beans in the world; the plants thrive under the shade of banana trees in the tropical climate.'
    },
    {
      id: 3,
      name: 'Standard Coffee Beans',
      price: 299,
      description: ''
    }
];  