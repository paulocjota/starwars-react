export const API_BASE_URL = 'https://swapi.dev/api'
export const IS_DEVELOPMENT_ENV = process.env.NODE_ENV === 'development'
export const IS_PRODUCTION_ENV = process.env.NODE_ENV === 'production'
export const DEFAULT_ERROR_MESSAGE = 'Ocorreu um erro! Por favor, tente atualizar a página através do botão F5 ou tente novamente mais tarde.'

export const CHARACTERS = {
    IMAGES: [
        'https://upload.wikimedia.org/wikipedia/pt/c/cf/LukeTatooine.jpg',
        'https://upload.wikimedia.org/wikipedia/pt/6/66/C-3PO.jpg',
        'https://upload.wikimedia.org/wikipedia/pt/3/39/R2-D2_Droid.png',
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/SWCE_-_EuroVader_%28801375039%29.jpg',
        'https://upload.wikimedia.org/wikipedia/pt/e/e9/Carrie_Fisher_como_Princesa_Leia.jpg',
        null,null,null,null,
        'https://upload.wikimedia.org/wikipedia/pt/9/94/Obi-wan_headshot.jpg'
    ],
    SKIN_COLORS: {
        fair: 'branca'
    },
    HAIR_COLORS: {
        blond: 'loiro',
        brown: 'marrom'
    },
    GENDERS: {
        male: 'masculino',
        female: 'feminino'
    },
    EYE_COLORS: {
        blue: 'azul',
        brown: 'marrom'
    }
}

export const PLANETS = {
    IMAGES: [
        'https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg',
        'https://upload.wikimedia.org/wikipedia/en/6/60/Alderaan250ppx.PNG',
        'https://upload.wikimedia.org/wikipedia/en/7/74/Star_Wars_Planet_Yavin_with_Moon.jpg',
        'https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg',
        'https://upload.wikimedia.org/wikipedia/en/1/1c/Dagobah.jpg',
        null, null, null,
        'https://upload.wikimedia.org/wikipedia/en/4/42/Coruscant.png',
    ],
    TERRAINS: {
        grasslands: 'pastagens',
        mountains: 'montanhas',
        'mountain ranges': 'cadeias de montanhas',
        desert: 'deserto',
        forests: 'florestas',
        rainforests: 'florestas tropicais',
        lakes: 'lagos',
        'grassy hills': 'colinas gramadas',
        swamps: 'pântanos',
        swamp: 'pântano',
        cityscape: 'paisagem urbana',
        ocean: 'oceano',
        'ice caves': 'cavernas de gelo',
        jungles: 'selvas',
        jungle: 'selva',
        grass: 'pastagens',
        rivers: 'rios',
        unknown: 'desconhecido',
        'gas giant': 'gigante de gás',
        barren: 'estéril',
        ash: 'cinzas',
        'toxic cloudsea': 'nuvens tóxicas',
        plateaus: 'planaltos',
        volcanoes: 'vulcões',
        verdant: 'verdejante',
        islands: 'ilhas',
        seas: 'mares',
        'rocky canions': 'cânions rochosos',
        'acid pools': 'piscinas ácidas',
        rocky: 'rochoso'
    },
    CLIMATES: {
        arid: 'árido',
        temperate: 'temperado',
        tropical: 'tropical',
        frozen: 'congelado',
        murky: 'obscuro',
        unknown: 'desconhecido',
    }
}