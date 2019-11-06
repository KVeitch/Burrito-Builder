import React from 'react';
import { shallow } from 'enzyme';
import { Orders, mapDispatchToProps, mapStateToProps } from './Orders';
import * as actions from '../../actions'
import { getOrders } from '../../apiCalls';


jest.mock('../../apiCalls');

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
  }
]
getOrders.mockImplementation(() => Promise.resolve(mockOrders))

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('Orders', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<Orders orders={mockOrders} setOrders={actions.setOrders}/>)
  })

  it('should match the snapshot',() => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run getOrders after mounting', ()=>{
    expect(getOrders).toHaveBeenCalled()
  })



})

describe('Orders mapDispatchToProps', () => {
  it('should call dispatch with setOrder action when setOrders is called', () => {
       const mockDispatch = jest.fn();

       const actionToDispatch = actions.setOrders('SET_ORDERS',mockOrders);
       const mappedProps = mapDispatchToProps(mockDispatch);
       mappedProps.setOrders('SET_ORDERS',mockOrders);
       expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
       });
    });

  describe('Orders mapStateToProps', () => {
    it('mapStateToProps give all the needed data from state', () => {
        const mockState = {
          orders:mockOrders,
          odd:'NOthing else goes in state'
        };
  
        const expected = {
            orders:mockOrders
        };

        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps).toEqual(expected);
    });
});