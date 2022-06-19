(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes  {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents  {
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputElementPropierties {
        id:string;
        type: HtmlType;
        value: string;
        placeholder:string;
    }

    class InputElement {
        public inputEvents: InputEvents;
        public InputAttributes: InputAttributes;
        public htmlElement: HtmlElement;

        constructor({ 
            id,
            type,
            value,
            placeholder
        }: InputElementPropierties) {
            this.inputEvents = new InputEvents();
            this.htmlElement = new HtmlElement(id, type);
            this.InputAttributes = new InputAttributes(value, placeholder);
        }
    }

    //? Idea para la nueva clase InputElement

    const nameField = new InputElement({
        id: '1',
        type: 'input',
        value: 'Value',
        placeholder: 'Placeholder'
    });

    console.log({ nameField });

})()