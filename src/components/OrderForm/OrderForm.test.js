import { shallow } from 'enzyme';
import React from 'react';
import { OrderForm, mapDispatchToProps } from './OrderForm'
import { addOrder } from '../../actions';
import { getOrders , postOrder } from '../../apiCalls';
import { tsConstructSignatureDeclaration } from '@babel/types';

jest.mock('../../apiCalls');

describe('OrderForm',() => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<OrderForm />)
  })

  it('should match the snapshot',() => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should clear state when clearInputs is called', ()=> {
    const initialState = wrapper.state()
    wrapper.instance().setState({ name:'Susan', ingredients:['Sour Cream', 'meat']})
    expect(wrapper.state()).toEqual({ name:'Susan', ingredients:['Sour Cream', 'meat']})
    wrapper.instance().clearInputs()

    expect(wrapper.state()).toEqual(initialState)
  })

  it('should change state when handleName is called', () => {
    const initialState = wrapper.instance();
    const mockEvent = {
      target:{
        name:'name',
        value:'Susan'
      }
    }
    const mockState = {
      name:'Susan',
      ingredients:[]
    }
    wrapper.instance().handleNameChange(mockEvent)

    expect(wrapper.state()).toEqual(mockState)
  })


  it('should change state when handleName is called', () => {
    const mockEvent = {
      preventDefault:jest.fn(),
      target:{
        name:'Sour Cream',
      }
    }
    const mockState = {
      name:'',
      ingredients:['Sour Cream']
    }
    wrapper.instance().handleIngredientChange(mockEvent)
    
    expect(wrapper.state()).toEqual(mockState)
  })

//tests needed HAPPY path and SAD PATH 2X



  it('should send the order to the api when handleSubmit is called', () => {
    const mockEvent = {
      preventDefault:jest.fn(),
    }
    const mockState = {
      name:'Susan',
      ingredients:['SourCream']
    }

    postOrder.mockImplementation(()=>Promise.resolve())
    wrapper.instance().setState(mockState)

    wrapper.instance().handleSubmit(mockEvent)
    expect(postOrder).toHaveBeenCalledWith(mockState)
  })

  it('should call handleSubmit when the button is clicked',() => {
    const event = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('.formBtn').simulate('click', event);
    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
    expect(wrapper.instance().handleSubmit).toHaveBeenCalledWith(event);
  })

})

describe('App REDUX test', () => {
  let mockOrder;
  beforeEach(() => {
    mockOrder ={
      "name": "Pat",
      "ingredients": [
        "beans",
        "lettuce",
        "carnitas",
        "queso fresco",
        "jalapeno"
      ]
    }
  })
   
  it('calls dispatch with addOrder action when addOrder is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addOrder('ADD_ORDER', mockOrder);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addOrder('ADD_ORDER', mockOrder);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

