function calcularPrecio() {
    // Precios base según prenda
    const preciosPrenda = {
        camiseta: 5,
        gorra: 3,
        chaqueta: 10,
        bolsa: 4
    };

    // Multiplicadores según tamaño del bordado
    const multiplicadoresTamano = {
        pequeno: 1,
        mediano: 1.5,
        grande: 2.5
    };

    // Multiplicadores según complejidad
    const multiplicadoresComplejidad = {
        baja: 1,
        media: 1.5,
        alta: 2
    };

    // Obtener valores seleccionados
    const prenda = document.getElementById('prenda').value;
    const tamano = document.getElementById('tamano').value;
    const complejidad = document.getElementById('complejidad').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const comprobante = document.getElementById('comprobante').value;

    // Calcular precio base
    const precioBase = preciosPrenda[prenda];
    const multiplicadorTamano = multiplicadoresTamano[tamano];
    const multiplicadorComplejidad = multiplicadoresComplejidad[complejidad];

    let precioFinal = precioBase * multiplicadorTamano * multiplicadorComplejidad * cantidad;

    // Aplicar IVA si es factura
    if (comprobante === 'factura') {
        precioFinal *= 1.16; // Se agrega 16% de IVA
    }

    // Mostrar resultado
    document.getElementById('resultado').innerText = `Precio total: $${precioFinal.toFixed(2)} USD`;
}