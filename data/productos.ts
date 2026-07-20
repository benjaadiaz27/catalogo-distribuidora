export type Producto = {
  id: number;
  nombre: string;
  marca: string;
  categoria: string;
  precio: number;
  imagen: string;
};

export const productos: Producto[] = [
  // LÁCTEOS Y FIAMBRES
  { id: 1, nombre: "Leche Entera 1L Caja x12", marca: "Manfrey", categoria: "Lácteos", precio: 26770, imagen: "/productos/lechemanfreyentra.png" },
  { id: 2, nombre: "Leche Descremada 1L Caja x12", marca: "Manfrey", categoria: "Lácteos", precio: 26770, imagen: "/productos/lechemanfreydescremada.png" },
  { id: 3, nombre: "Leche Chocolatada 1L Caja x12", marca: "Ilolay", categoria: "Lácteos", precio: 30440, imagen: "/productos/lecheilolaychoco.png" },
  { id: 4, nombre: "Mortadela (Precio por kg)", marca: "Paladini", categoria: "Fiambres", precio: 9820, imagen: "/productos/mortpaladini.png" },
  { id: 5, nombre: "Jamón Cocido (Precio por kg)", marca: "Paladini", categoria: "Fiambres", precio: 14360, imagen: "/productos/jamoncocidopal.png" },
  { id: 6, nombre: "Salchicha Caja x24u", marca: "Paladini", categoria: "Fiambres", precio: 49000, imagen: "/productos/salchichaspal.png" },
  { id: 7, nombre: "Jamón Cocido (Precio por kg)", marca: "El Colonial", categoria: "Fiambres", precio: 9400, imagen: "/productos/jamoncocidoelcolonial.png" },
  { id: 8, nombre: "Bondiola (Precio por kg)", marca: "El Colonial", categoria: "Fiambres", precio: 20520, imagen: "/productos/bondiolaelcolonial.png" },
  { id: 9, nombre: "Queso Azul (Precio por kg)", marca: "Lucrecia", categoria: "Quesos", precio: 11950, imagen: "/productos/quesoazullucrecia.png" },
  { id: 10, nombre: "Queso Azul (Precio por kg)", marca: "La Quesera", categoria: "Quesos", precio: 13980, imagen: "/productos/quesoazullaquesera.png" },
  { id: 11, nombre: "Queso Rallado x40g Caja x20u", marca: "La Quesera", categoria: "Quesos", precio: 13250, imagen: "/productos/quesorallado.png" },
  { id: 12, nombre: "Barra Cheddar (Precio por kg)", marca: "Spalen", categoria: "Quesos", precio: 8360, imagen: "/productos/quesocheddar.png" },
  { id: 13, nombre: "Azúcar Común Tipo A x 10kg", marca: "Sideral", categoria: "Almacén", precio: 12060, imagen: "/productos/azucar.png" },
  { id: 14, nombre: "Jamón Crudo (Precio por kg)", marca: "Tacural", categoria: "Fiambres", precio: 20200, imagen: "/productos/jamoncrudotacural.png" },
  { id: 15, nombre: "Paleta Sandwichera (Precio por kg)", marca: "Jamonada", categoria: "Fiambres", precio: 4630, imagen: "/productos/paletasandwicheralatiro.png" },
  { id: 16, nombre: "Jamón Cocido (Precio por kg)", marca: "La Tirolesa", categoria: "Fiambres", precio: 7530, imagen: "/productos/placeholder.png" },
  { id: 17, nombre: "Salame de Milán Picado Fino (Precio por kg)", marca: "La Tirolesa", categoria: "Fiambres", precio: 10570, imagen: "/productos/placeholder.png" },
  { id: 18, nombre: "Salame de Milán Picado Grueso (Precio por kg)", marca: "La Tirolesa", categoria: "Fiambres", precio: 10570, imagen: "/productos/placeholder.png" },
  { id: 19, nombre: "Mortadela (Precio por kg)", marca: "La Tirolesa", categoria: "Fiambres", precio: 4610, imagen: "/productos/placeholder.png" },
  { id: 20, nombre: "Queso de Cerdo (Precio por kg)", marca: "La Tirolesa", categoria: "Fiambres", precio: 4530, imagen: "/productos/placeholder.png" },
  { id: 21, nombre: "Panceta Ahumada (Precio por kg)", marca: "La Tirolesa", categoria: "Fiambres", precio: 11580, imagen: "/productos/placeholder.png" },
  { id: 22, nombre: "Maní Pelado Salado x1 Kg", marca: "Gremy's", categoria: "Snacks", precio: 3150, imagen: "/productos/placeholder.png" },
  { id: 23, nombre: "Salame Metro Corto (Precio por kg)", marca: "Trocecor", categoria: "Fiambres", precio: 18550, imagen: "/productos/placeholder.png" },
{ id: 24, nombre: "Salamín Seco (Precio por kg)", marca: "Trocecor", categoria: "Fiambres", precio: 18550, imagen: "/productos/placeholder.png" },
{ id: 25, nombre: "Bondiola Envasado al Vacío (Precio por kg)", marca: "Trocecor", categoria: "Fiambres", precio: 23580, imagen: "/productos/placeholder.png" },
  { id: 26, nombre: "Panceta Arrollada Envasado al Vacío (Precio por kg)", marca: "Trocecor", categoria: "Fiambres", precio: 22920, imagen: "/productos/placeholder.png" },
  { id: 27, nombre: "Yerba Agroecológica x500g", marca: "Picada Vieja", categoria: "Almacén", precio: 3150, imagen: "/productos/placeholder.png" },

  // ADEREZOS Y ACEITES
  { id: 28, nombre: "Mayonesa x2750g", marca: "BQB", categoria: "Aderezos", precio: 4890, imagen: "/productos/placeholder.png" },
  { id: 29, nombre: "Mayonesa x500g Caja x12u", marca: "Natura", categoria: "Aderezos", precio: 34550, imagen: "/productos/placeholder.png" },
  { id: 30, nombre: "Mayonesa x250g Caja x12u", marca: "Natura", categoria: "Aderezos", precio: 18080, imagen: "/productos/placeholder.png" },
  { id: 31, nombre: "Mayonesa x125g Caja x20u", marca: "Natura", categoria: "Aderezos", precio: 12270, imagen: "/productos/placeholder.png" },
  { id: 32, nombre: "Mostaza x250g Caja x12u", marca: "Natura", categoria: "Aderezos", precio: 9960, imagen: "/productos/placeholder.png" },
  { id: 33, nombre: "Salsa Golf x250g Caja x12u", marca: "Natura", categoria: "Aderezos", precio: 13070, imagen: "/productos/placeholder.png" },
  { id: 34, nombre: "Ketchup x250g Caja x12u", marca: "Natura", categoria: "Aderezos", precio: 18480, imagen: "/productos/placeholder.png" },
  { id: 35, nombre: "Aceite Girasol x1.5L", marca: "Natura", categoria: "Aceites", precio: 6150, imagen: "/productos/placeholder.png" },
  { id: 36, nombre: "Aceite Girasol x900ml", marca: "Natura", categoria: "Aceites", precio: 3870, imagen: "/productos/placeholder.png" },

  // ALMACÉN
  { id: 37, nombre: "Fideos Secos Codito x500g", marca: "Favorita", categoria: "Almacén", precio: 910, imagen: "/productos/placeholder.png" },
  { id: 38, nombre: "Fideos Secos Spaghetti x500g", marca: "Favorita", categoria: "Almacén", precio: 910, imagen: "/productos/placeholder.png" },
  { id: 39, nombre: "Arroz Largo Fino x1 Kg", marca: "Dos Hermanos", categoria: "Almacén", precio: 1770, imagen: "/productos/placeholder.png" },
  { id: 40, nombre: "Dulce de Leche x400g", marca: "AYS", categoria: "Dulces", precio: 1900, imagen: "/productos/placeholder.png" },
  { id: 41, nombre: "Dulce de Leche x1000g", marca: "Estilo Real", categoria: "Dulces", precio: 4380, imagen: "/productos/placeholder.png" },
  { id: 42, nombre: "Dulce Batata Cajón x5Kg", marca: "Profesia", categoria: "Dulces", precio: 11580, imagen: "/productos/placeholder.png" },
  { id: 43, nombre: "Dulce Membrillo Cajón x5Kg", marca: "Profesia", categoria: "Dulces", precio: 12700, imagen: "/productos/placeholder.png" },
  { id: 44, nombre: "Durazno Natural x800g", marca: "Río Salado", categoria: "Conservas", precio: 2250, imagen: "/productos/placeholder.png" },
  { id: 45, nombre: "Choclo Grano x300g", marca: "Cumana", categoria: "Conservas", precio: 1210, imagen: "/productos/placeholder.png" },
  { id: 46, nombre: "Arveja x300g", marca: "Cumana", categoria: "Conservas", precio: 840, imagen: "/productos/placeholder.png" },
  { id: 47, nombre: "Atún Desmenuzado en Aceite y Agua x170g", marca: "Bahía", categoria: "Conservas", precio: 1330, imagen: "/productos/placeholder.png" },
  { id: 48, nombre: "Tomate Triturado Botella Pack x8u", marca: "Gallardo", categoria: "Conservas", precio: 10320, imagen: "/productos/placeholder.png" },
  { id: 49, nombre: "Puré de Tomate x520g", marca: "Arcor", categoria: "Conservas", precio: 840, imagen: "/productos/placeholder.png" },
  { id: 50, nombre: "Puré de Tomate x520g", marca: "Caroyense", categoria: "Conservas", precio: 650, imagen: "/productos/placeholder.png" },
  { id: 51, nombre: "Tomate Triturado Pouch Caja x4u x2Kg", marca: "Finca de Santiago", categoria: "Conservas", precio: 7760, imagen: "/productos/placeholder.png" },
  { id: 52, nombre: "Champiñón Laminado x800g", marca: "Finca de Santiago", categoria: "Conservas", precio: 5200, imagen: "/productos/placeholder.png" },
  { id: 53, nombre: "Morrón x800g", marca: "Finca de Santiago", categoria: "Conservas", precio: 3850, imagen: "/productos/placeholder.png" },
  { id: 54, nombre: "Jardinera Lata x300g", marca: "Inalpa", categoria: "Conservas", precio: 830, imagen: "/productos/placeholder.png" },
  { id: 55, nombre: "Tomate Perita Lata x400g", marca: "Inalpa", categoria: "Conservas", precio: 930, imagen: "/productos/placeholder.png" },
  { id: 56, nombre: "Choclo Amarillo Cremoso Lata x300g", marca: "Inalpa", categoria: "Conservas", precio: 660, imagen: "/productos/placeholder.png" },
  { id: 57, nombre: "Choclo Amarillo Grano Lata x300g", marca: "Inalpa", categoria: "Conservas", precio: 1180, imagen: "/productos/placeholder.png" },
  { id: 58, nombre: "Lenteja Lata x300g", marca: "Inalpa", categoria: "Conservas", precio: 830, imagen: "/productos/placeholder.png" },

  // ACEITUNAS Y VINAGRES
  { id: 59, nombre: "Aceitunas Nº2 x5Kg", marca: "Sol de Arauco", categoria: "Conservas", precio: 17160, imagen: "/productos/placeholder.png" },
  { id: 60, nombre: "Aceitunas Nº00 x5Kg", marca: "Sol de Arauco", categoria: "Conservas", precio: 32195, imagen: "/productos/placeholder.png" },
  { id: 61, nombre: "Aceitunas Nº0 x2Kg", marca: "Sol de Arauco", categoria: "Conservas", precio: 11090, imagen: "/productos/placeholder.png" },
  { id: 62, nombre: "Aceitunas Nº0 x1Kg", marca: "Sol de Arauco", categoria: "Conservas", precio: 6280, imagen: "/productos/placeholder.png" },
  { id: 63, nombre: "Pickles x2Kg", marca: "Sol de Arauco", categoria: "Conservas", precio: 8390, imagen: "/productos/placeholder.png" },
  { id: 64, nombre: "Vinagre de Alcohol x930cm3", marca: "San Bernardino", categoria: "Vinagres", precio: 1100, imagen: "/productos/placeholder.png" },
  { id: 65, nombre: "Vinagre de Alcohol x5L", marca: "San Bernardino", categoria: "Vinagres", precio: 4480, imagen: "/productos/placeholder.png" },

  // SNACKS CRAKET
  { id: 66, nombre: "Papas Fritas Españolas x70g", marca: "Craket", categoria: "Snacks", precio: 1340, imagen: "/productos/placeholder.png" },
  { id: 67, nombre: "Papas Fritas Acanaladas x70g", marca: "Craket", categoria: "Snacks", precio: 1340, imagen: "/productos/placeholder.png" },
  { id: 68, nombre: "Papas Fritas Acanaladas x1000g", marca: "Craket", categoria: "Snacks", precio: 10050, imagen: "/productos/placeholder.png" },
  { id: 69, nombre: "Palitos de Maíz x60g", marca: "Craket", categoria: "Snacks", precio: 590, imagen: "/productos/placeholder.png" },
  { id: 70, nombre: "Palitos de Maíz x1000g", marca: "Craket", categoria: "Snacks", precio: 4140, imagen: "/productos/placeholder.png" },
  { id: 71, nombre: "Palitos Salados x100g", marca: "Craket", categoria: "Snacks", precio: 680, imagen: "/productos/placeholder.png" },
  { id: 72, nombre: "Palitos Salados x1000g", marca: "Craket", categoria: "Snacks", precio: 4340, imagen: "/productos/placeholder.png" },
  { id: 73, nombre: "Maní Saborizado Jamón x240g", marca: "Craket", categoria: "Snacks", precio: 1750, imagen: "/productos/placeholder.png" },
  { id: 74, nombre: "Maní Saborizado Pizza x240g", marca: "Craket", categoria: "Snacks", precio: 1750, imagen: "/productos/placeholder.png" },
  { id: 75, nombre: "Maní Saborizado Queso x240g", marca: "Craket", categoria: "Snacks", precio: 1750, imagen: "/productos/placeholder.png" },
  { id: 76, nombre: "Combo Papa + Palito + Chizito", marca: "Craket", categoria: "Snacks", precio: 2490, imagen: "/productos/placeholder.png" },
  { id: 77, nombre: "Tutucas x150g", marca: "Craket", categoria: "Snacks", precio: 840, imagen: "/productos/placeholder.png" },
  { id: 78, nombre: "Conitos x500g", marca: "Craket", categoria: "Snacks", precio: 5170, imagen: "/productos/placeholder.png" },

  // MANTECAS Y ACEITES
  { id: 79, nombre: "Manteca x200g", marca: "Clucelat", categoria: "Lácteos", precio: 2100, imagen: "/productos/placeholder.png" },
  { id: 80, nombre: "Manteca x100g", marca: "Clucelat", categoria: "Lácteos", precio: 1050, imagen: "/productos/placeholder.png" },
  { id: 81, nombre: "Aceite Girasol x5L", marca: "Azize", categoria: "Aceites", precio: 15400, imagen: "/productos/placeholder.png" },
  { id: 82, nombre: "Aceite Girasol x900ml", marca: "Solemne", categoria: "Aceites", precio: 3100, imagen: "/productos/placeholder.png" },

  // SNACKS QUENTO
  { id: 83, nombre: "Papas Fritas Clásicas x92g", marca: "Quento", categoria: "Snacks", precio: 1790, imagen: "/productos/placeholder.png" },
  { id: 84, nombre: "Papas Fritas Sabor Ketchup x82g", marca: "Quento", categoria: "Snacks", precio: 1790, imagen: "/productos/placeholder.png" },
  { id: 85, nombre: "Papas Fritas Sabor Mostaza x82g", marca: "Quento", categoria: "Snacks", precio: 1790, imagen: "/productos/placeholder.png" },
  { id: 86, nombre: "Papas Fritas Sabor Barbacoa x82g", marca: "Quento", categoria: "Snacks", precio: 1790, imagen: "/productos/placeholder.png" },
  { id: 87, nombre: "Nachos Sabor Guacamole x82g", marca: "Quento", categoria: "Snacks", precio: 1790, imagen: "/productos/placeholder.png" },

  // MERMELADAS
  { id: 88, nombre: "Mermelada de Zapallo x500g", marca: "Raulito", categoria: "Dulces", precio: 1640, imagen: "/productos/placeholder.png" },
  { id: 89, nombre: "Mermelada de Durazno x500g", marca: "Raulito", categoria: "Dulces", precio: 1640, imagen: "/productos/placeholder.png" },
  { id: 90, nombre: "Mermelada de Ciruela x500g", marca: "Raulito", categoria: "Dulces", precio: 1640, imagen: "/productos/placeholder.png" },
  { id: 91, nombre: "Mermelada de Naranja x500g", marca: "Raulito", categoria: "Dulces", precio: 1640, imagen: "/productos/placeholder.png" },
  { id: 92, nombre: "Mermelada de Higo x500g", marca: "Raulito", categoria: "Dulces", precio: 1640, imagen: "/productos/placeholder.png" },

  // INFUSIONES
  { id: 93, nombre: "Café Caja x50 Saquitos", marca: "Vélez", categoria: "Infusiones", precio: 7270, imagen: "/productos/placeholder.png" },
  { id: 94, nombre: "Café Caja x25 Saquitos", marca: "Vélez", categoria: "Infusiones", precio: 2820, imagen: "/productos/placeholder.png" },
  { id: 95, nombre: "Mate Cocido Caja x50 Saquitos", marca: "Vélez", categoria: "Infusiones", precio: 1530, imagen: "/productos/placeholder.png" },
  { id: 96, nombre: "Mate Cocido Caja x25 Saquitos", marca: "Vélez", categoria: "Infusiones", precio: 780, imagen: "/productos/placeholder.png" },
  { id: 97, nombre: "Té Caja x25 Saquitos", marca: "Vélez", categoria: "Infusiones", precio: 810, imagen: "/productos/placeholder.png" },

  // MERMELADAS ARTESANALES MAYDA
  { id: 98, nombre: "Mermelada Artesanal de Higo x490g", marca: "Mayda", categoria: "Dulces", precio: 3700, imagen: "/productos/placeholder.png" },
  { id: 99, nombre: "Mermelada Artesanal de Zapallo x490g", marca: "Mayda", categoria: "Dulces", precio: 3700, imagen: "/productos/placeholder.png" },
  { id: 100, nombre: "Mermelada Artesanal de Naranja x490g", marca: "Mayda", categoria: "Dulces", precio: 3700, imagen: "/productos/placeholder.png" },
  { id: 101, nombre: "Mermelada Artesanal de Frutilla x490g", marca: "Mayda", categoria: "Dulces", precio: 3700, imagen: "/productos/placeholder.png" },
  { id: 102, nombre: "Mermelada Artesanal de Arándanos x490g", marca: "Mayda", categoria: "Dulces", precio: 3700, imagen: "/productos/placeholder.png" },
  { id: 103, nombre: "Mermelada Artesanal de Durazno x490g", marca: "Mayda", categoria: "Dulces", precio: 3700, imagen: "/productos/placeholder.png" },
  { id: 104, nombre: "Mermelada Artesanal de Frutos Rojos x490g", marca: "Mayda", categoria: "Dulces", precio: 3700, imagen: "/productos/placeholder.png" },
];