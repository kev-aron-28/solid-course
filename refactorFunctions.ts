(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela']
        return redFruits.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): any {
        const fruitColors:Record<string, string[]> = {
            "red": ['manzana', 'fresa'],
            "yellow":['piña','banana'],
            "purple": ['moras','uvas']
        } 
        return fruitColors[color] 
    }

    // Simplificar esta función
    let isFirstStepWorking  = false;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = false;
    let isFourthStepWorking = true;

    function workingSteps() {
        if(!isFirstStepWorking) return 'First step not working';

        if(!isSecondStepWorking) return 'Second step not working';

        if(!isThirdStepWorking) return 'Third step not working';

        if(!isFourthStepWorking) return 'Fourth step not working';

        return 'Everything is working'
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
