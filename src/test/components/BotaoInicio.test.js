// import { Button} from '@material-ui/core';
import {shallow} from 'jest-enzyme';

describe("Botão de inicio", ()=>{
    test('deve ter um botao', ()=>{
      const componente =  shallow(Button); 
        expect(componente.find('Button').length).toBe(1);
    });
});