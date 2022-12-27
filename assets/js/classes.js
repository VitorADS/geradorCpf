class Div{
    _elements = []
    _container = document.querySelector('body');

    addElement(element){
        this._elements.push(element);
    }

    addClass(className){
        let element = this._container;

        addClass(element, className);
    }

    removeClass(className){
        let element = this._container;

        removeClass(element, className);
    }

    addContainer(container){
        this._container = document.querySelector(container);
    }

    render(){
        let div = document.createElement('div');

        for(let i in this._elements){
            this._elements[i].render(div);
        }

        this._container.appendChild(div);
    }

}

class H1{

    constructor(content){
        this._content = content;
    }

    addClass(className){
        let element = this._container;

        addClass(element, className);
    }

    removeClass(className){
        let element = this._container;

        removeClass(element, className);
    }

    render(element){
        let h1 = document.createElement('h1');

        h1.innerHTML = this._content;

        element.appendChild(h1);
    }
}

class Button{
    _type = 'button';

    constructor(label, onclick){
        this.label = label;
        this.onclick = onclick;
    }

    addClass(className){
        let element = this._container;

        addClass(element, className);
    }

    removeClass(className){
        let element = this._container;

        removeClass(element, className);
    }

    render(element){
        let button = document.createElement(this._type);

        button.innerHTML = this.label;
        button.setAttribute('onclick', this.onclick);

        element.appendChild(button);
    }
}

function addClass(el, className){
    if(!document.body.contains(el)){
        throw new Error('Element not found');
    }else{
        if(el.classList.contains(className)){
            throw new Error(`Class ${className} is already defined`);
        }else{
            el.classList.add(className);
        }
    }
}

function removeClass(el, className){
    if(!document.body.contains(el)){
        throw new Error('Element not found');
    }else{
        if(el.classList.contains(className)){
            el.classList.remove(className);
        }else{
            throw new Error(`Class ${className} not found`);
        }
    }
}

export {
    Div,
    H1,
    Button
}