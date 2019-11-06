import { setOrders, addOrder } from './index';


describe('Action Creators', () => {
  it('setOrder should return the correct object', () => {
    const mockOrders = [
      {
        id: 1,
        name: 'Pat',
        ingredients: [
          'beans',
          'lettuce',
          'carnitas',
          'queso fresco',
          'jalapeno'
        ]
      },
      {
        id: 2,
        name: 'Sam',
        ingredients: [
          'steak',
          'pico de gallo',
          'lettuce',
          'carnitas',
          'queso fresco',
          'jalapeno'
        ]
      },
      {
        id: 3,
        name: 'Alex',
        ingredients: [
          'sofritas',
          'beans',
          'sour cream',
          'carnitas',
          'queso fresco'
        ]
      },
      {
        name: 'Bob',
        ingredients: [
          'steak',
          'carnitas'
        ],
        id: 4
      }
    ];
    const expected = {
      type: 'SET_ORDERS',
      orders:mockOrders
    };
    const results = setOrders(mockOrders);
    expect(results).toEqual(expected);
  });

  it('addOrder should return the coorect object',()=>{
    const mockOrder = {
        id: 1,
        name: 'Pat',
        ingredients: [
          'beans',
          'lettuce',
          'carnitas',
          'queso fresco',
          'jalapeno'
        ]
      }
    const expected ={
      type: 'ADD_ORDER',
      order:mockOrder
    }
    const results = addOrder(mockOrder)
    expect(results).toEqual(expected)
  })
})