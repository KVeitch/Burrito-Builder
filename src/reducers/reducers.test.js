import { orders } from './orders';


describe('orders reducer', ()=>{

  it('should return the default state as an empty array', () => {
    const mockAction = {
      type: 'WRONG_TYPE',
      orders:[]
    }
    const result = orders(undefined, mockAction);
    expect(result).toEqual([]);
  });

  it('should return initial State if there is no type match', ()=> {
    const mockState = [
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
        }
    ]
    const mockAction = {
      type: 'WRONG_TYPE',
      orders:[]
    }
    const results = orders(mockState, mockAction)
    expect(results).toEqual(mockState)
  })

  it('should return new state when action.type is "SET_ORDERS" ',() => {
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
      }
  ]
  const mockAction = {
    type: 'SET_ORDERS',
    orders:mockOrders
  }


  const expected = mockAction.orders
  const results = orders([], mockAction)

  expect(results).toEqual(expected)
  })

  it('should return new state when action.type is "ADD_ORDER" ',() => {
    const mockState = [
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
      }
  ]
    const mockOrder = {
      id: 3,
      name: 'Alex',
      ingredients: [
        'sofritas',
        'beans',
        'sour cream',
        'carnitas',
        'queso fresco'
      ]
    }
    const mockAction = {
      type: 'ADD_ORDER',
      order:mockOrder
    }

    const expected = [...mockState, mockOrder]
    const results = orders(mockState, mockAction)

    expect(results).toEqual(expected)
  })

})