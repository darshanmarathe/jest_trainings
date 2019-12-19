import Todo from '../Car'
import React from "react";
import Enzyme, { ShallowWrapper } from "enzyme";
import { shallow  , mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { delay  , resp} from "../Helpers/TestHelpers";

const expect = require('expect')


import {saveTodo , SaveValue} from "../Car";
import * as axios from 'axios'
jest.mock('axios')
Enzyme.configure({ adapter: new Adapter() });

describe('Can test react compoent', () => {
   
    beforeAll(() => {
        // axios.get.mockResolvedValue(resp);
        // axios.post.mockResolvedValue({
        //     id : 201
        // });
        // axios.put.mockResolvedValue({
        //     id : 201
        // });

        axios.put.mockImplementation(() => Promise.resolve({ data: {id : 201} }));
        axios.post.mockImplementation(() => Promise.resolve({ data: {id : 201} }));
      
        axios.get.mockImplementation(() => Promise.resolve(resp));
      
        
        
    })
    
    it('test that component can mount', () => {
        const component = shallow(<Todo userid={2} />);
        expect(component.find("h2").text()).toBe('Todos');
        expect(axios.get).toHaveBeenCalled()
    });
    
    
    it('test that component Get Todos when api return values', async () => {
        const component = shallow(<Todo />);
        await delay()
        expect(component.find(".todoItem").length).toBe(3);
        expect(axios.get).toHaveBeenCalled()
    });
    
    it('should able to submit form', async () => {
        const component = shallow(<Todo />);
        
        const instance = component.instance()
        const handleChangeSpy = jest.spyOn(instance, "SaveValue");
       
        const event = {target: {name: "title", value: "Do Something fancy"}};
        const eventcheck = {target: {name: "completed", value:true , checked : 'checked'} };
      
        component.find('#title').simulate('change' , event);
        component.find('#completed').simulate('change' , eventcheck);
        await delay();

        expect(handleChangeSpy).toHaveBeenCalledTimes(1)
        let todo = component.state().todo;
        expect(todo.title).toBe('Do Something fancy')

        component.find('#form').simulate('submit',  {

            preventDefault: () => {}
        });

         await delay(2000)
         expect(axios.post).toHaveBeenCalled();   
    });


     
    it('should able to Select a todo', async () => {
        const component = shallow(<Todo userid={2} />);
        await      delay(2000)
        const todo1title = component.find(".todoItem").at(1).text();
        component.find(".todoItem").at(1).simulate('click');
        const todo  = component.state().todo;
        expect(todo.title).toBe(todo1title);   
    });

    
    it('should able to Select a todo', async () => {
        const component = shallow(<Todo userid={2} />);
        await      delay(2000)
        const todo  = component.state().todo;
        expect(todo.userId).toBe(2);   
    });

    
    it('should able to Select called when TodoSelected function is passed', async () => {
        const todoSelected  = jest.fn();
        const component = shallow(<Todo userid={2} TodoSelected={todoSelected} />);
        await      delay(1000)
        expect(component.props().TodoSelected).not.toBe(null)   
        component.find(".todoItem").at(1).simulate('click');
        const todo  = component.state().todo;
        expect(todoSelected).toBeCalledWith(todo);   
    });


});