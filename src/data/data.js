 export const marcas = [
    { id: 1, nombre: 'Apple' },
    { id: 2, nombre: 'Samsung' },
    { id: 3, nombre: 'Xiaomi' },
    { id: 4, nombre: 'Motorola' }
   ];
/*
   export const celulares = [
    {
      id: 1,
      nombre: 'iPhone 14 Pro',
      descripcion: 'Pantalla Super Retina XDR, chip A16 Bionic, cámara de 48 MP',
      precio: 1299,
      marcaId: 1,
      fotos: [
        'https://ipoint.com.ar/26186-thickbox_default/iphone-14-pro-128gb-deep-purple.jpg',
        'https://laplatacells.com.ar/img/Public/1169/62057-producto-iphone-14-pro-space-black-pdp-image-position-1a-mxla.jpg',
        'https://media.gq.com.mx/photos/6318eb0e4fdcb133567b2329/16:9/w_2560%2Cc_limit/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.medium_2x.jpg'
      ]
    },
    {
      id: 2,
      nombre: 'Samsung Galaxy S23',
      descripcion: 'Pantalla AMOLED 6.1", Snapdragon 8 Gen 2, cámara triple',
      precio: 999,
      marcaId: 2,
      fotos: [
        'https://th.bing.com/th/id/OIP.5QMkXIlusvZfEUm50okfbAHaHa?rs=1&pid=ImgDetMain',
        'https://tiendadiggit.com.ar/web/image/product.image/4354/image_1024/Celular%20Samsung%20Galaxy%20S23%20FE?unique=07b347b',
        'https://s.yimg.com/ny/api/res/1.2/XUWc_7XyZNF4T.STPSB9ZA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/f573a6a2-a092-11ed-be2f-3d10b3e5b155'
      ]
    },
    {
      id: 3,
      nombre: 'Xiaomi 13 Pro',
      descripcion: 'Pantalla AMOLED 6.73", cámara Leica, carga rápida 120W',
      precio: 899,
      marcaId: 3,
      fotos: [
        'https://example.com/xiaomi13pro-1.jpg',
        'https://example.com/xiaomi13pro-2.jpg',
        'https://example.com/xiaomi13pro-3.jpg'
      ]
    },
    {
      id: 4,
      nombre: 'Motorola Edge 40',
      descripcion: 'Pantalla pOLED, MediaTek Dimensity 8020, resistente al agua',
      precio: 699,
      marcaId: 4,
      fotos: [
        'https://example.com/edge40-1.jpg',
        'https://example.com/edge40-2.jpg',
        'https://example.com/edge40-3.jpg'
      ]
    },
    {
          id: 5,
          nombre: 'iPhone 15 Pro Max',
          descripcion: 'Pantalla Super Retina XDR de 6.7", chip A17 Pro, cámara de 48 MP',
          precio: 1499,
          marcaId: 1,
          fotos: [
            'https://www.gsmarena.com/pdflinks/apple_iphone_15_pro_max-pictures-12548.php'
          ]
        },
        {
          id: 6,
          nombre: 'iPhone 15 Pro',
          descripcion: 'Pantalla Super Retina XDR de 6.1", chip A17 Pro, cámara de 48 MP',
          precio: 1199,
          marcaId: 1,
          fotos: [
            'https://www.gsmarena.com/pdflinks/apple_iphone_15_pro-pictures-12547.php'
          ]
        },
        {
          id: 7,
          nombre: 'iPhone 15',
          descripcion: 'Pantalla Super Retina XDR de 6.1", chip A16 Bionic, cámara de 48 MP',
          precio: 799,
          marcaId: 1,
          fotos: [
            'https://www.gsmarena.com/pdflinks/apple_iphone_15-pictures-12546.php'
          ]
        },
        {
          id: 8,
          nombre: 'iPhone 15 Plus',
          descripcion: 'Pantalla Super Retina XDR de 6.7", chip A16 Bionic, cámara de 48 MP',
          precio: 899,
          marcaId: 1,
          fotos: [
            'https://www.gsmarena.com/pdflinks/apple_iphone_15_plus-pictures-12545.php'
          ]
        },
        {
          id: 9,
          nombre: 'Samsung Galaxy S24 Ultra',
          descripcion: 'Pantalla Dynamic AMOLED 2X de 6.8", Snapdragon 8 Gen 3, cámara de 200 MP',
          precio: 1399,
          marcaId: 2,
          fotos: [
            'https://www.gsmarena.com/pdflinks/samsung_galaxy_s24_ultra-pictures-12771.php'
          ]
        },
        {
          id: 10,
          nombre: 'Samsung Galaxy S24+',
          descripcion: 'Pantalla Dynamic AMOLED 2X de 6.6", Snapdragon 8 Gen 3, cámara de 50 MP',
          precio: 1199,
          marcaId: 2,
          fotos: [
            'https://www.gsmarena.com/pdflinks/samsung_galaxy_s24+-pictures-12770.php'
          ]
        },
        {
          id: 11,
          nombre: 'Samsung Galaxy S24',
          descripcion: 'Pantalla Dynamic AMOLED 2X de 6.1", Snapdragon 8 Gen 3, cámara de 50 MP',
          precio: 999,
          marcaId: 2,
          fotos: [
            'https://www.gsmarena.com/pdflinks/samsung_galaxy_s24-pictures-12769.php'
          ]
        },
        {
          id: 12,
          nombre: 'Samsung Galaxy Z Fold 5',
          descripcion: 'Pantalla Dynamic AMOLED 2X de 7.6", Snapdragon 8 Gen 3, cámara de 50 MP',
          precio: 1799,
          marcaId: 2,
          fotos: [
            'https://www.gsmarena.com/pdflinks/samsung_galaxy_z_fold_5-pictures-12768.php'
          ]
        },
        {
          id: 13,
          nombre: 'Xiaomi 14 Pro',
          descripcion: 'Pantalla AMOLED de 6.73", Snapdragon 8 Gen 3, cámara de 50 MP',
          precio: 999,
          marcaId: 3,
          fotos: [
            'https://www.91mobiles.com/xiaomi-14-pro-price-in-india?ty=gallery'
          ]
        },
        {
          id: 14,
          nombre: 'Xiaomi 14',
          descripcion: 'Pantalla AMOLED de 6.36", Snapdragon 8 Gen 3, cámara de 50 MP',
          precio: 799,
          marcaId: 3,
          fotos: [
            'https://www.91mobiles.com/xiaomi-14-price-in-india?ty=gallery'
          ]
        },
        {
          id: 15,
          nombre: 'Xiaomi 14 Lite',
          descripcion: 'Pantalla AMOLED de 6.67", Snapdragon 7 Gen 2, cámara de 64 MP',
          precio: 599,
          marcaId: 3,
          fotos: [
            'https://www.91mobiles.com/xiaomi-14-lite-price-in-india?ty=gallery'
          ]
        },
        {
          id: 16,
          nombre: 'Motorola Edge 40 Pro',
          descripcion: 'Pantalla pOLED de 6.67", Snapdragon 8 Gen 3, cámara de 50 MP',
          precio: 899,
          marcaId: 4,
          fotos: [
            'https://www.gsmarena.com/pdflinks/motorola_edge_40_pro-pictures-12767.php'
          ]
        },
        {
          id: 17,
          nombre: 'Motorola Edge 40',
          descripcion: 'Pantalla pOLED de 6.55", Dimensity 8020, cámara de 50 MP',
          precio: 699,
          marcaId: 4,
          fotos: [
            'https://www.gsmarena.com/pdflinks/motorola_edge_40-pictures-12766.php'
          ]
        },
        {
          id: 18,
          nombre: 'Motorola Moto G Power (2025)',
          descripcion: 'Pantalla LCD de 6.5", Snapdragon 695, cámara de 50 MP',
          precio: 249,
          marcaId: 4,
          fotos: [
            'https://www.gsmarena.com/pdflinks/motorola_moto_g_power_(2025)-pictures-12765.php'
          ]
        },
        {
          id: 19,
          nombre: 'Motorola Moto G Stylus (2025)',
          descripcion: 'Pantalla LCD de 6.8", Snapdragon 695, cámara de 50 MP',
          precio: 299,
          marcaId: 4,
          fotos: [
            'https://www.gsmarena.com/pdflinks/motorola_moto_g_stylus_(2025)-pictures-12764.php'
          ]
        }
   ];
*/

   
   export const celulares = [
    {
      id: 1,
      nombre: 'iPhone 14 Pro',
      descripcion: 'Pantalla Super Retina XDR, chip A16 Bionic, cámara de 48 MP',
      precio: 1299,
      marcaId: 1,
      fotos: [
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/i/p/iphone_14_pro_1.jpg',
        'https://www.apple.com/la/iphone-14-pro/images/overview/hero/hero_static__e2w35x0xn9qq_large.jpg',
        'https://www.fravega.com/fotos/l/2003743_1.jpg'
      ]
    },
    {
      id: 2,
      nombre: 'Samsung Galaxy S23',
      descripcion: 'Pantalla AMOLED 6.1", Snapdragon 8 Gen 2, cámara triple',
      precio: 999,
      marcaId: 2,
      fotos: [
        'https://images.samsung.com/is/image/samsung/p6pim/ar/2302/gallery/ar-galaxy-s23-s911-530807-sm-s911bzgmarq-530807354?$650_519_PNG$',
        'https://http2.mlstatic.com/D_NQ_NP_682223-MLA52101673519_102022-O.webp',
        'https://www.fravega.com/fotos/l/2006837_1.jpg'
      ]
    },
    {
      id: 3,
      nombre: 'Xiaomi 13 Pro',
      descripcion: 'Pantalla AMOLED 6.73", cámara Leica, carga rápida 120W',
      precio: 899,
      marcaId: 3,
      fotos: [
        'https://http2.mlstatic.com/D_NQ_NP_789675-MLA52069109687_102022-O.webp',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/x/i/xiaomi_13_pro_1.jpg',
        'https://www.fravega.com/fotos/l/2005921_1.jpg'
      ]
    },
    {
      id: 4,
      nombre: 'Motorola Edge 40',
      descripcion: 'Pantalla pOLED, MediaTek Dimensity 8020, resistente al agua',
      precio: 699,
      marcaId: 4,
      fotos: [
        'https://http2.mlstatic.com/D_NQ_NP_698595-MLA52362464664_112022-O.webp',
        'https://www.fravega.com/fotos/l/2012287_1.jpg',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/m/o/moto_edge_40_1.jpg'
      ]
    },
    {
      id: 5,
      nombre: 'iPhone 15 Pro Max',
      descripcion: 'Pantalla Super Retina XDR de 6.7", chip A17 Pro, cámara de 48 MP',
      precio: 1499,
      marcaId: 1,
      fotos: [
        'https://www.apple.com/la/iphone-15-pro/images/overview/hero/hero_static__cauwwm0gnwii_large.jpg',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/i/p/iphone_15_pro_max_1.jpg',
        'https://www.fravega.com/fotos/l/2010153_1.jpg'
      ]
    },
    {
      id: 6,
      nombre: 'iPhone 15 Pro',
      descripcion: 'Pantalla Super Retina XDR de 6.1", chip A17 Pro, cámara de 48 MP',
      precio: 1199,
      marcaId: 1,
      fotos: [
        'https://www.apple.com/la/iphone-15-pro/images/overview/hero/hero_static__ckxjdvky9cei_large.jpg',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/i/p/iphone_15_pro_1.jpg',
        'https://www.fravega.com/fotos/l/2010154_1.jpg'
      ]
    },
    {
      id: 7,
      nombre: 'iPhone 15',
      descripcion: 'Pantalla Super Retina XDR de 6.1", chip A16 Bionic, cámara de 48 MP',
      precio: 799,
      marcaId: 1,
      fotos: [
        'https://www.apple.com/la/iphone-15/images/overview/hero/hero_static__g7bwe4v4neie_large.jpg',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/i/p/iphone_15_1.jpg',
        'https://www.fravega.com/fotos/l/2010155_1.jpg'
      ]
    },
    {
      id: 8,
      nombre: 'iPhone 15 Plus',
      descripcion: 'Pantalla Super Retina XDR de 6.7", chip A16 Bionic, cámara de 48 MP',
      precio: 899,
      marcaId: 1,
      fotos: [
        'https://www.apple.com/la/iphone-15-plus/images/overview/hero/hero_static__d5q2uz4ft2ii_large.jpg',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/i/p/iphone_15_plus_1.jpg',
        'https://www.fravega.com/fotos/l/2010156_1.jpg'
      ]
    },
    {
      id: 9,
      nombre: 'Samsung Galaxy S24 Ultra',
      descripcion: 'Pantalla Dynamic AMOLED 2X de 6.8", Snapdragon 8 Gen 3, cámara de 200 MP',
      precio: 1399,
      marcaId: 2,
      fotos: [
        'https://images.samsung.com/is/image/samsung/p6pim/ar/2302/gallery/ar-galaxy-s24-ultra-s918-530809-sm-s918bzkdear-530809210?$650_519_PNG$',
        'https://www.fravega.com/fotos/l/2012209_1.jpg',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/s/a/samsung_galaxy_s24_ultra_1.jpg'
      ]
    },
    {
      id: 10,
      nombre: 'Samsung Galaxy S24+',
      descripcion: 'Pantalla Dynamic AMOLED 2X de 6.6", Snapdragon 8 Gen 3, cámara de 50 MP',
      precio: 1199,
      marcaId: 2,
      fotos: [
        'https://images.samsung.com/is/image/samsung/p6pim/ar/2302/gallery/ar-galaxy-s24-plus-s916-530810-sm-s916bzkdear-530810840?$650_519_PNG$',
        'https://www.fravega.com/fotos/l/2012210_1.jpg',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/s/a/samsung_galaxy_s24_plus_1.jpg'
      ]
    },
    {
      id: 11,
      nombre: 'Samsung Galaxy S24',
      descripcion: 'Pantalla Dynamic AMOLED 2X de 6.1", Snapdragon 8 Gen 3, cámara de 50 MP',
      precio: 999,
      marcaId: 2,
      fotos: [
        'https://images.samsung.com/is/image/samsung/p6pim/ar/2302/gallery/ar-galaxy-s24-s911-530805-sm-s911bzkdear-530805680?$650_519_PNG$',
        'https://www.fravega.com/fotos/l/2012208_1.jpg',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/s/a/samsung_galaxy_s24_1.jpg'
      ]
    },
    {
      id: 12,
      nombre: 'Samsung Galaxy Z Fold 5',
      descripcion: 'Pantalla Dynamic AMOLED 2X de 7.6", Snapdragon 8 Gen 3, cámara de 50 MP',
      precio: 1799,
      marcaId: 2,
      fotos: [
        'https://images.samsung.com/is/image/samsung/p6pim/ar/2307/gallery/ar-galaxy-z-fold5-s911-533982-sm-s911ezkaaro-533982827?$650_519_PNG$',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/s/a/samsung_galaxy_z_fold_5_1.jpg',
        'https://www.fravega.com/fotos/l/2012207_1.jpg'
      ]
    },
    {
      id: 13,
      nombre: 'Xiaomi 14 Pro',
      descripcion: 'Pantalla AMOLED de 6.73", Snapdragon 8 Gen 3, cámara de 50 MP',
      precio: 999,
      marcaId: 3,
      fotos: [
        'https://http2.mlstatic.com/D_NQ_NP_908877-MLA52377908950_112022-O.webp',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/x/i/xiaomi_14_pro_1.jpg',
        'https://www.fravega.com/fotos/l/2012225_1.jpg'
      ]
    },
    {
      id: 14,
      nombre: 'Xiaomi 14',
      descripcion: 'Pantalla AMOLED de 6.36", Snapdragon 8 Gen 3, cámara de 50 MP',
      precio: 799,
      marcaId: 3,
      fotos: [
        'https://http2.mlstatic.com/D_NQ_NP_738438-MLA52408756023_112022-O.webp',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/x/i/xiaomi_14_1.jpg',
        'https://www.fravega.com/fotos/l/2012226_1.jpg'
      ]
    },
    {
      id: 15,
      nombre: 'Xiaomi 14 Lite',
      descripcion: 'Pantalla AMOLED de 6.67", Snapdragon 7 Gen 2, cámara de 64 MP',
      precio: 599,
      marcaId: 3,
      fotos: [
        'https://http2.mlstatic.com/D_NQ_NP_972912-MLA52408737120_112022-O.webp',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/x/i/xiaomi_14_lite_1.jpg',
        'https://www.fravega.com/fotos/l/2012227_1.jpg'
      ]
    },
    {
      id: 16,
      nombre: 'Motorola Edge 40 Pro',
      descripcion: 'Pantalla pOLED de 6.67", Snapdragon 8 Gen 3, cámara de 50 MP',
      precio: 899,
      marcaId: 4,
      fotos: [
        'https://http2.mlstatic.com/D_NQ_NP_825288-MLA52388776522_112022-O.webp',
        'https://www.fravega.com/fotos/l/2012286_1.jpg',
        'https://tiendamia.com.ar/media/catalog/product/cache/7a2577b5b15ed0bbdf83dbf240e2a978/m/o/moto'
      ]
    }
];
