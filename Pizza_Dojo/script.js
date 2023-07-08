function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes) {
    var pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        ingredientes: ingredientes
    };

    return pizza;
}

  // Crea una pizza estilo Chicago con corteza tradicional, mozzarella y pepperoni y salchicha
    var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);

  // Crea una pizza lanzada a mano con salsa marinara, mozzarella y feta, y champiñones, aceitunas y cebollas como ingredientes
    var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);

  // Crea dos pizzas adicionales con los ingredientes que desees
    var pizza3 = pizzaOven("estilo New York", "tomate", ["mozzarella", "parmesano"], ["pimientos", "pepperoni", "cebolla"]);
    var pizza4 = pizzaOven("sin gluten", "salsa de pesto", ["mozzarella", "queso de cabra"], ["espinacas", "tomate seco", "aceitunas negras"]);

    console.log(pizza1);
    console.log(pizza2);
    console.log(pizza3);
    console.log(pizza4);
