export type CarVersion = {
  name: string;
  notes: string;
};

export type CarSpec = {
  label: string;
  value: string;
};

export type CarDetailFields = {
  tagline: string;
  summary: string;
  highlights: string[];
  versions: CarVersion[];
  specs: CarSpec[];
};

/**
 * Info básica curada a partir de fuentes públicas de Volkswagen Argentina
 * (configurador, fichas y páginas de modelos). Textos propios / resumidos;
 * no se copia copy publicitario literal.
 */
export const carDetails: Record<string, CarDetailFields> = {
  tera: {
    tagline: "SUVW compacto para el día a día",
    summary:
      "El Tera es el SUVW de entrada de gama en Argentina: diseño actual, buena posición de manejo y tecnología a bordo pensada para ciudad y ruta.",
    highlights: [
      "Multimedia VW Play 10”",
      "Opciones MSI manual y 170 TSI automática",
      "Hasta 6 airbags según versión",
      "Sensores de estacionamiento y asistencias en versiones altas",
    ],
    versions: [
      {
        name: "Trend",
        notes: "Motor MSI 110 CV · caja manual · equipamiento de acceso",
      },
      {
        name: "Comfort",
        notes: "170 TSI · Tiptronic · VW Play conectada · faros LED",
      },
      {
        name: "High",
        notes: "ACC · AEB · Keyless · Active Info Display · cámara trasera",
      },
      {
        name: "Outfit",
        notes: "Estética bitono · asistente de carril · punto ciego · llantas 17”",
      },
    ],
    specs: [
      { label: "Carrocería", value: "SUVW" },
      { label: "Mercado", value: "Argentina" },
      { label: "Multimedia", value: "VW Play 10”" },
      { label: "Motorizaciones", value: "MSI / 170 TSI" },
      { label: "Transmisión", value: "Manual o Tiptronic (según versión)" },
      { label: "Seguridad", value: "Airbags y asistencias según versión" },
    ],
  },
  polo: {
    tagline: "Compacto urbano con ADN Volkswagen",
    summary:
      "Hatchback ágil y práctico para ciudad. Ideal si buscás tamaño contenido, bajo costo de uso y el confort típico de la marca.",
    highlights: [
      "Formato hatchback compacto",
      "Buena maniobrabilidad en ciudad",
      "Multimedia y conectividad según versión",
      "Gama accesible dentro del lineup AR",
    ],
    versions: [
      {
        name: "Track / Comfortline / Highline",
        notes: "Variantes según equipamiento y motorización disponibles en el configurador AR",
      },
    ],
    specs: [
      { label: "Carrocería", value: "Compacto (hatchback)" },
      { label: "Uso ideal", value: "Ciudad y trayectos diarios" },
      { label: "Plazas", value: "5" },
      { label: "Mercado", value: "Argentina" },
    ],
  },
  virtus: {
    tagline: "Sedán amplio y versátil",
    summary:
      "Sedán con baúl generoso y confort de marcha. Pensado para quienes necesitan más espacio de carga sin pasar a un SUV.",
    highlights: [
      "Baúl amplio tipo sedán",
      "Confort en ruta",
      "Plataforma compartida con Polo",
      "Buen equilibrio espacio / tamaño",
    ],
    versions: [
      {
        name: "Gama Virtus",
        notes: "Versiones según equipamiento y motorización del configurador AR",
      },
    ],
    specs: [
      { label: "Carrocería", value: "Sedán" },
      { label: "Uso ideal", value: "Familia y viajes" },
      { label: "Plazas", value: "5" },
      { label: "Mercado", value: "Argentina" },
    ],
  },
  nivus: {
    tagline: "SUVW coupé con personalidad",
    summary:
      "Cruzamiento entre SUV y coupé: líneas deportivas, posición elevada y fuerte foco en diseño y tecnología.",
    highlights: [
      "Diseño SUV coupé",
      "Posición de manejo elevada",
      "Multimedia moderna",
      "Muy popular en el mercado argentino",
    ],
    versions: [
      {
        name: "Comfortline / Highline / Bitono",
        notes: "Niveles de equipamiento y estética según versión",
      },
    ],
    specs: [
      { label: "Carrocería", value: "SUVW" },
      { label: "Estilo", value: "Coupé / crossover" },
      { label: "Plazas", value: "5" },
      { label: "Mercado", value: "Argentina" },
    ],
  },
  "t-cross": {
    tagline: "SUVW versátil para crecer con vos",
    summary:
      "SUVW familiar con buen equilibrio entre espacio, seguridad y costos de uso. Una de las referencias del segmento en Argentina.",
    highlights: [
      "Espacio interior familiar",
      "Posición elevada",
      "Equipamiento de seguridad según versión",
      "Uso mixto ciudad / ruta",
    ],
    versions: [
      {
        name: "Comfortline / Highline / Bitono",
        notes: "Equipamiento creciente según versión",
      },
    ],
    specs: [
      { label: "Carrocería", value: "SUVW" },
      { label: "Uso ideal", value: "Familiar" },
      { label: "Plazas", value: "5" },
      { label: "Mercado", value: "Argentina" },
    ],
  },
  taos: {
    tagline: "SUVW mediano con más presencia",
    summary:
      "Un paso arriba en tamaño y confort respecto de los SUVW compactos. Pensado para quienes buscan más habitabilidad y equipamiento.",
    highlights: [
      "Mayor tamaño que T-Cross / Nivus",
      "Habitabilidad destacada",
      "Conducción firme en ruta",
      "Equipamiento premium según versión",
    ],
    versions: [
      {
        name: "Gama Taos",
        notes: "Versiones según nivel de confort y tecnología",
      },
    ],
    specs: [
      { label: "Carrocería", value: "SUVW mediano" },
      { label: "Uso ideal", value: "Familia / viajes largos" },
      { label: "Plazas", value: "5" },
      { label: "Mercado", value: "Argentina" },
    ],
  },
  vento: {
    tagline: "Sedán deportivo con carácter GLI",
    summary:
      "En Argentina se ofrece como Vento GLI: sedán con foco en dinámica, diseño afilado y prestaciones.",
    highlights: [
      "Espíritu GLI",
      "Enfoque deportivo",
      "Diseño sedán premium",
      "Para quienes priorizan manejo",
    ],
    versions: [
      {
        name: "Vento GLI",
        notes: "Configuración deportiva del sedán en el mercado AR",
      },
    ],
    specs: [
      { label: "Carrocería", value: "Sedán deportivo" },
      { label: "Línea", value: "GLI" },
      { label: "Plazas", value: "5" },
      { label: "Mercado", value: "Argentina" },
    ],
  },
  saveiro: {
    tagline: "Pick-up compacta para el trabajo",
    summary:
      "Pick-up chica, práctica y resistente. Pensada para comercio, obra y uso mixto trabajo/personal.",
    highlights: [
      "Caja de carga útil",
      "Formato compacto",
      "Orientada a trabajo",
      "Costo operativo contenido",
    ],
    versions: [
      {
        name: "Gama Saveiro",
        notes: "Versiones según cabina y equipamiento de trabajo",
      },
    ],
    specs: [
      { label: "Carrocería", value: "Pick-Up compacta" },
      { label: "Uso ideal", value: "Trabajo / mixto" },
      { label: "Mercado", value: "Argentina" },
    ],
  },
  amarok: {
    tagline: "La pick-up mediana de referencia",
    summary:
      "Pick-up con fuerte presencia, capacidad de carga y opciones 4x4. Amplia gama desde Trendline hasta versiones V6.",
    highlights: [
      "Gama amplia (Trendline a V6)",
      "Opciones manual / automática",
      "Versiones con tracción integral",
      "Capacidad de carga y off-road según versión",
    ],
    versions: [
      { name: "Trendline", notes: "Acceso de gama · motorización manual" },
      {
        name: "Comfortline / Highline",
        notes: "Más confort · manual o automática",
      },
      {
        name: "V6 Comfortline / Highline / Extreme / Hero / Black Style",
        notes: "V6 automática · tracción integral en varias versiones",
      },
    ],
    specs: [
      { label: "Carrocería", value: "Pick-Up mediana" },
      { label: "Tracción", value: "4x2 / 4x4 según versión" },
      { label: "Transmisión", value: "Manual o automática" },
      { label: "Mercado", value: "Argentina" },
    ],
  },
  tiguan: {
    tagline: "SUVW premium para la familia",
    summary:
      "SUVW de segmento superior: más espacio, confort y tecnología. Orientado a quienes no quieren resignar equipamiento.",
    highlights: [
      "Confort premium",
      "Espacio familiar",
      "Tecnología a bordo",
      "Presencia de producto alto de gama",
    ],
    versions: [
      {
        name: "Gama Tiguan",
        notes: "Versiones según nivel de equipamiento disponible en AR",
      },
    ],
    specs: [
      { label: "Carrocería", value: "SUVW" },
      { label: "Segmento", value: "Premium / familiar" },
      { label: "Plazas", value: "5 (según configuración)" },
      { label: "Mercado", value: "Argentina" },
    ],
  },
  "camiones-y-buses": {
    tagline: "Soluciones comerciales Volkswagen",
    summary:
      "Línea de camiones y buses de Volkswagen para transporte y trabajo. Consultá con un asesor comercial especializado.",
    highlights: [
      "Orientado a uso comercial",
      "Gama de transporte de carga y pasajeros",
      "Requiere asesoramiento específico",
    ],
    versions: [
      {
        name: "Camiones y buses",
        notes: "Consultá disponibilidad y versiones con el equipo comercial",
      },
    ],
    specs: [
      { label: "Carrocería", value: "Camiones y buses" },
      { label: "Uso", value: "Comercial / transporte" },
      { label: "Mercado", value: "Argentina" },
    ],
  },
};
