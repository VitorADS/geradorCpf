class Div{
    _elements = []
    _container = document.querySelector('body');

    constructor(id){
        this._id = id;
    }

    addElement(element){
        this._elements.push(element);
    }

    addClass(className){
        let element = document.getElementById(this._id);

        addClass(element, className);
    }

    removeClass(className){
        let element = document.getElementById(this._id);

        removeClass(element, className);
    }

    addContainer(container){
        this._container = document.querySelector(container);
    }

    render(element){
        let div = document.createElement('div');
        
        div.setAttribute('id', this._id);

        if(document.body.contains(element)){
            element.appendChild(div);
        }else{
            this._container.appendChild(div);
        }

        for(let i in this._elements){
            this._elements[i].render(div);
        }
    }

}

class H{

    constructor(id, content, htype){
        this._id = id;
        this._content = content;
        this._htype = htype;
    }

    addClass(className){
        let element = document.getElementById(this._id);

        addClass(element, className);
    }

    removeClass(className){
        let element = document.getElementById(this._id);

        removeClass(element, className);
    }

    render(element){
        let h = document.createElement('h'+this._htype);

        h.innerHTML = this._content;
        h.setAttribute('id', this._id);

        element.appendChild(h);
    }
}

class Button{
    _type = 'button';

    constructor(id, label, onclick){
        this._id = id;
        this._label = label;
        this._onclick = onclick;
    }

    addClass(className){
        let element = document.getElementById(this._id);

        addClass(element, className);
    }

    removeClass(className){
        let element = document.getElementById(this._id);

        removeClass(element, className);
    }

    render(element){
        let button = document.createElement(this._type);

        button.innerHTML = this._label;
        button.setAttribute('onclick', this._onclick);
        button.setAttribute('id', this._id);

        element.appendChild(button);
    }
}

class Input{
    _type = 'text';

    constructor(id, label){
        this._id = id;
        this._label = label;
    }

    addClass(className){
        let element = document.getElementById(this._id);

        addClass(element, className);
    }

    removeClass(className){
        let element = document.getElementById(this._id);

        removeClass(element, className);
    }

    addAttribute(name, value){
        let element = document.getElementById(this._id);
        console.log(element);

        setAttribute(element, name, value);
    }

    removeAttribute(name){
        let element = document.getElementById(this._id);

        removeAttribute(element, name);
    }

    render(element){
        let input = document.createElement('input');

        input.setAttribute('type', this._type);
        input.setAttribute('placeholder', this._label);
        input.setAttribute('id', this._id);

        element.appendChild(input);
    }
}

function setAttribute(el, name, value){
    if(!document.body.contains(el)){
        throw new Error('Element not found');
    }else{
        if(el.getAttribute(name)){
            throw new Error(`Attribute ${name} is already defined`);
        }else{
            el.setAttribute(name, value);
        }
    }
}

function removeAttribute(el, name){
    if(!document.body.contains(el)){
        throw new Error('Element not found');
    }else{
        if(el.getAttribute(name)){
            el.removeAttribute(name);
        }else{
            throw new Error(`Attribute ${name} is not defined`);
        }
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
    H,
    Button,
    Input
}