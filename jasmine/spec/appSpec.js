describe("App", function () {

    it("renders the result", function () {
        start();
        expect(document.getElementById('result').innerHTML).toEqual("");           //primero compruebo que el div donde voy a pintar el resultado de la comparación esté vacío.

        document.getElementById('randNumberInput').value = 20;                    //relleno el input artificialmente.
        document.getElementById("compare-numbers-button").click();               //simulo el click.
        expect(document.getElementById('result').innerHTML).not.toEqual("");    //compruebo que el div ya no esté vacío.
    });

    it("generates a random number between 1 and 100", function () {
        expect(getRandom()).toBeGreaterThanOrEqual(1); //Espero que el número random que me genera la función getRandom sea mayor o igual que 1.
        expect(getRandom()).toBeLessThanOrEqual(100); //Espero que el número random que me genera la función getRandom sea menor o igual que 100.
    });

    describe("compares the random number with the input number", function () {
        beforeEach(function () {
            document.getElementById('randNumberInput').value = 50; //Quiero comprobar que la comparación funciona. Para ello me creo un número aleatorio constante con el que voy a comprobar cada caso.
        });

        ịt("should render the number is bigger", function () {
            compareNumbers(100); //le digo que el random number es 100, que es mayor que el input number
            expect(document.getElementById('result').innerHTML).toEqual("The random is bigger");
        });

        it("should render the number is smaller", function () {
            compareNumbers(20); //le digo que el random number es 20, que es menor que el input number
            expect(document.getElementById('result').innerHTML).toEqual("The random is smaller");
        });

        it("should render you win", function () {
            compareNumbers(50); //le digo que el random number es 50, que es el input number
            expect(document.getElementById('result').innerHTML).toEqual("YOU WIN!!!");
        });
    });

    describe("compares a string with random number expecting error function", function () {
        beforeEach(function () {
            document.getElementById('randNumberInput').value = "hola"; //fuerzo que el contenido del input sea un string.
        });

        it("renders error when input is a string", function () {
            compareNumbers(30);
            expect(document.getElementById('result').innerHTML).toEqual("Text is not allowed. Try a number");
        });
    });
});