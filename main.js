const LOCAL_STORAGE_KEY = 'cars';
const cars = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
const vehiclesList = document.getElementById('vehiclesList');
const brandsList = document.getElementById("brands");
const modelsList = document.getElementById("model");
const typesDiv = document.getElementById('types');
const newVehicleForm = document.getElementById('newVehicle');
const filter = document.getElementById('query');
const result = document.getElementById('result');
const detailers = document.getElementById('detailers');

const vehicles = [
  {
    "id": 1,
    "make": "acura",
    "model": "ilx"
  },
  {
    "id": 2,
    "make": "acura",
    "model": "rdx"
  },
  {
    "id": 3,
    "make": "acura",
    "model": "rlx"
  },
  {
    "id": 4,
    "make": "acura",
    "model": "tlx"
  },
  {
    "id": 5,
    "make": "alfa-romeo",
    "model": "4c"
  },
  {
    "id": 6,
    "make": "alfa-romeo",
    "model": "4c-spider"
  },
  {
    "id": 7,
    "make": "aston-martin",
    "model": "db9-gt"
  },
  {
    "id": 8,
    "make": "aston-martin",
    "model": "rapide-s"
  },
  {
    "id": 9,
    "make": "aston-martin",
    "model": "v12-vantage-s"
  },
  {
    "id": 10,
    "make": "aston-martin",
    "model": "v8-vantage"
  },
  {
    "id": 11,
    "make": "aston-martin",
    "model": "vanquish"
  },
  {
    "id": 12,
    "make": "audi",
    "model": "a3"
  },
  {
    "id": 13,
    "make": "audi",
    "model": "a3-sportback-e-tron"
  },
  {
    "id": 14,
    "make": "audi",
    "model": "a4"
  },
  {
    "id": 15,
    "make": "audi",
    "model": "a6"
  },
  {
    "id": 16,
    "make": "audi",
    "model": "a7"
  },
  {
    "id": 17,
    "make": "audi",
    "model": "a8"
  },
  {
    "id": 18,
    "make": "audi",
    "model": "q3"
  },
  {
    "id": 19,
    "make": "audi",
    "model": "q5"
  },
  {
    "id": 20,
    "make": "audi",
    "model": "q7"
  },
  {
    "id": 21,
    "make": "audi",
    "model": "r8"
  },
  {
    "id": 22,
    "make": "audi",
    "model": "rs-5"
  },
  {
    "id": 23,
    "make": "audi",
    "model": "rs-7"
  },
  {
    "id": 24,
    "make": "audi",
    "model": "s3"
  },
  {
    "id": 25,
    "make": "audi",
    "model": "s4"
  },
  {
    "id": 26,
    "make": "audi",
    "model": "s5"
  },
  {
    "id": 27,
    "make": "audi",
    "model": "s6"
  },
  {
    "id": 28,
    "make": "audi",
    "model": "s7"
  },
  {
    "id": 29,
    "make": "audi",
    "model": "s8"
  },
  {
    "id": 30,
    "make": "audi",
    "model": "sq5"
  },
  {
    "id": 31,
    "make": "audi",
    "model": "tt"
  },
  {
    "id": 32,
    "make": "audi",
    "model": "tts"
  },
  {
    "id": 33,
    "make": "audi",
    "model": "allroad"
  },
  {
    "id": 34,
    "make": "bmw",
    "model": "2-series"
  },
  {
    "id": 35,
    "make": "bmw",
    "model": "3-series"
  },
  {
    "id": 36,
    "make": "bmw",
    "model": "3-series-gran-turismo"
  },
  {
    "id": 37,
    "make": "bmw",
    "model": "4-series"
  },
  {
    "id": 38,
    "make": "bmw",
    "model": "4-series-gran-coupe"
  },
  {
    "id": 39,
    "make": "bmw",
    "model": "5-series"
  },
  {
    "id": 40,
    "make": "bmw",
    "model": "5-series-gran-turismo"
  },
  {
    "id": 41,
    "make": "bmw",
    "model": "6-series"
  },
  {
    "id": 42,
    "make": "bmw",
    "model": "6-series-gran-coupe"
  },
  {
    "id": 43,
    "make": "bmw",
    "model": "7-series"
  },
  {
    "id": 44,
    "make": "bmw",
    "model": "alpina-b6-gran-coupe"
  },
  {
    "id": 45,
    "make": "bmw",
    "model": "alpina-b7"
  },
  {
    "id": 46,
    "make": "bmw",
    "model": "activehybrid-5"
  },
  {
    "id": 47,
    "make": "bmw",
    "model": "activehybrid-7"
  },
  {
    "id": 48,
    "make": "bmw",
    "model": "m2"
  },
  {
    "id": 49,
    "make": "bmw",
    "model": "m3"
  },
  {
    "id": 50,
    "make": "bmw",
    "model": "m4"
  },
  {
    "id": 51,
    "make": "bmw",
    "model": "m5"
  },
  {
    "id": 52,
    "make": "bmw",
    "model": "m6"
  },
  {
    "id": 53,
    "make": "bmw",
    "model": "m6-gran-coupe"
  },
  {
    "id": 54,
    "make": "bmw",
    "model": "x1"
  },
  {
    "id": 55,
    "make": "bmw",
    "model": "x3"
  },
  {
    "id": 56,
    "make": "bmw",
    "model": "x4"
  },
  {
    "id": 57,
    "make": "bmw",
    "model": "x5"
  },
  {
    "id": 58,
    "make": "bmw",
    "model": "x5-m"
  },
  {
    "id": 59,
    "make": "bmw",
    "model": "x5-edrive"
  },
  {
    "id": 60,
    "make": "bmw",
    "model": "x6"
  },
  {
    "id": 61,
    "make": "bmw",
    "model": "x6-m"
  },
  {
    "id": 62,
    "make": "bmw",
    "model": "z4"
  },
  {
    "id": 63,
    "make": "bmw",
    "model": "i3"
  },
  {
    "id": 64,
    "make": "bmw",
    "model": "i8"
  },
  {
    "id": 65,
    "make": "bentley",
    "model": "continental-gt"
  },
  {
    "id": 66,
    "make": "bentley",
    "model": "flying-spur"
  },
  {
    "id": 67,
    "make": "bentley",
    "model": "mulsanne"
  },
  {
    "id": 68,
    "make": "buick",
    "model": "cascada"
  },
  {
    "id": 69,
    "make": "buick",
    "model": "regal"
  },
  {
    "id": 70,
    "make": "buick",
    "model": "verano"
  },
  {
    "id": 71,
    "make": "cadillac",
    "model": "ats"
  },
  {
    "id": 72,
    "make": "cadillac",
    "model": "ats-coupe"
  },
  {
    "id": 73,
    "make": "cadillac",
    "model": "ats-v"
  },
  {
    "id": 74,
    "make": "cadillac",
    "model": "ct6"
  },
  {
    "id": 75,
    "make": "cadillac",
    "model": "cts"
  },
  {
    "id": 76,
    "make": "cadillac",
    "model": "cts-v"
  },
  {
    "id": 77,
    "make": "cadillac",
    "model": "cts-v-coupe"
  },
  {
    "id": 78,
    "make": "cadillac",
    "model": "elr"
  },
  {
    "id": 79,
    "make": "cadillac",
    "model": "escalade"
  },
  {
    "id": 80,
    "make": "cadillac",
    "model": "escalade-esv"
  },
  {
    "id": 81,
    "make": "cadillac",
    "model": "srx"
  },
  {
    "id": 82,
    "make": "cadillac",
    "model": "xt5"
  },
  {
    "id": 83,
    "make": "cadillac",
    "model": "xts"
  },
  {
    "id": 84,
    "make": "chevrolet",
    "model": "camaro"
  },
  {
    "id": 85,
    "make": "chevrolet",
    "model": "city-express"
  },
  {
    "id": 86,
    "make": "chevrolet",
    "model": "colorado"
  },
  {
    "id": 87,
    "make": "chevrolet",
    "model": "corvette"
  },
  {
    "id": 88,
    "make": "chevrolet",
    "model": "cruze"
  },
  {
    "id": 89,
    "make": "chevrolet",
    "model": "cruze-limited"
  },
  {
    "id": 90,
    "make": "chevrolet",
    "model": "express"
  },
  {
    "id": 91,
    "make": "chevrolet",
    "model": "express-cargo"
  },
  {
    "id": 92,
    "make": "chevrolet",
    "model": "impala"
  },
  {
    "id": 93,
    "make": "chevrolet",
    "model": "malibu"
  },
  {
    "id": 94,
    "make": "chevrolet",
    "model": "malibu-limited"
  },
  {
    "id": 95,
    "make": "chevrolet",
    "model": "ss"
  },
  {
    "id": 96,
    "make": "chevrolet",
    "model": "silverado-1500"
  },
  {
    "id": 97,
    "make": "chevrolet",
    "model": "sonic"
  },
  {
    "id": 98,
    "make": "chevrolet",
    "model": "spark"
  },
  {
    "id": 99,
    "make": "chevrolet",
    "model": "spark-ev"
  },
  {
    "id": 100,
    "make": "chevrolet",
    "model": "suburban"
  },
  {
    "id": 101,
    "make": "chevrolet",
    "model": "tahoe"
  },
  {
    "id": 102,
    "make": "chevrolet",
    "model": "trax"
  },
  {
    "id": 103,
    "make": "chrysler",
    "model": "200"
  },
  {
    "id": 104,
    "make": "chrysler",
    "model": "300"
  },
  {
    "id": 105,
    "make": "chrysler",
    "model": "pacifica"
  },
  {
    "id": 106,
    "make": "dodge",
    "model": "challenger"
  },
  {
    "id": 107,
    "make": "dodge",
    "model": "charger"
  },
  {
    "id": 108,
    "make": "dodge",
    "model": "dart"
  },
  {
    "id": 109,
    "make": "dodge",
    "model": "durango"
  },
  {
    "id": 110,
    "make": "dodge",
    "model": "grand-caravan"
  },
  {
    "id": 111,
    "make": "dodge",
    "model": "journey"
  },
  {
    "id": 112,
    "make": "dodge",
    "model": "viper"
  },
  {
    "id": 113,
    "make": "fiat",
    "model": "500"
  },
  {
    "id": 114,
    "make": "fiat",
    "model": "500l"
  },
  {
    "id": 115,
    "make": "fiat",
    "model": "500x"
  },
  {
    "id": 116,
    "make": "ferrari",
    "model": "458-italia"
  },
  {
    "id": 117,
    "make": "ferrari",
    "model": "california-t"
  },
  {
    "id": 118,
    "make": "ferrari",
    "model": "f12-berlinetta"
  },
  {
    "id": 119,
    "make": "ferrari",
    "model": "ff"
  },
  {
    "id": 120,
    "make": "ford",
    "model": "c-max-energi"
  },
  {
    "id": 121,
    "make": "ford",
    "model": "c-max-hybrid"
  },
  {
    "id": 122,
    "make": "ford",
    "model": "edge"
  },
  {
    "id": 123,
    "make": "ford",
    "model": "escape"
  },
  {
    "id": 124,
    "make": "ford",
    "model": "explorer"
  },
  {
    "id": 125,
    "make": "ford",
    "model": "f-450-super-duty"
  },
  {
    "id": 126,
    "make": "ford",
    "model": "fiesta"
  },
  {
    "id": 127,
    "make": "ford",
    "model": "flex"
  },
  {
    "id": 128,
    "make": "ford",
    "model": "focus-rs"
  },
  {
    "id": 129,
    "make": "ford",
    "model": "focus-st"
  },
  {
    "id": 130,
    "make": "ford",
    "model": "fusion"
  },
  {
    "id": 131,
    "make": "ford",
    "model": "fusion-energi"
  },
  {
    "id": 132,
    "make": "ford",
    "model": "fusion-hybrid"
  },
  {
    "id": 133,
    "make": "ford",
    "model": "mustang"
  },
  {
    "id": 134,
    "make": "ford",
    "model": "shelby-gt350"
  },
  {
    "id": 135,
    "make": "ford",
    "model": "taurus"
  },
  {
    "id": 136,
    "make": "ford",
    "model": "transit-connect"
  },
  {
    "id": 137,
    "make": "ford",
    "model": "transit-van"
  },
  {
    "id": 138,
    "make": "ford",
    "model": "transit-wagon"
  },
  {
    "id": 139,
    "make": "gmc",
    "model": "acadia"
  },
  {
    "id": 140,
    "make": "gmc",
    "model": "canyon"
  },
  {
    "id": 141,
    "make": "gmc",
    "model": "savana"
  },
  {
    "id": 142,
    "make": "gmc",
    "model": "savana-cargo"
  },
  {
    "id": 143,
    "make": "gmc",
    "model": "sierra-2500hd"
  },
  {
    "id": 144,
    "make": "gmc",
    "model": "sierra-3500hd"
  },
  {
    "id": 145,
    "make": "gmc",
    "model": "terrain"
  },
  {
    "id": 146,
    "make": "gmc",
    "model": "yukon"
  },
  {
    "id": 147,
    "make": "gmc",
    "model": "yukon-xl"
  },
  {
    "id": 148,
    "make": "honda",
    "model": "accord"
  },
  {
    "id": 149,
    "make": "honda",
    "model": "accord-hybrid"
  },
  {
    "id": 150,
    "make": "honda",
    "model": "cr-v"
  },
  {
    "id": 151,
    "make": "honda",
    "model": "cr-z"
  },
  {
    "id": 152,
    "make": "honda",
    "model": "crosstour"
  },
  {
    "id": 153,
    "make": "honda",
    "model": "fit"
  },
  {
    "id": 154,
    "make": "honda",
    "model": "hr-v"
  },
  {
    "id": 155,
    "make": "honda",
    "model": "pilot"
  },
  {
    "id": 156,
    "make": "hyundai",
    "model": "accent"
  },
  {
    "id": 157,
    "make": "hyundai",
    "model": "azera"
  },
  {
    "id": 158,
    "make": "hyundai",
    "model": "elantra"
  },
  {
    "id": 159,
    "make": "hyundai",
    "model": "elantra-gt"
  },
  {
    "id": 160,
    "make": "hyundai",
    "model": "equus"
  },
  {
    "id": 161,
    "make": "hyundai",
    "model": "genesis"
  },
  {
    "id": 162,
    "make": "hyundai",
    "model": "genesis-coupe"
  },
  {
    "id": 163,
    "make": "hyundai",
    "model": "santa-fe"
  },
  {
    "id": 164,
    "make": "hyundai",
    "model": "santa-fe-sport"
  },
  {
    "id": 165,
    "make": "hyundai",
    "model": "sonata"
  },
  {
    "id": 166,
    "make": "hyundai",
    "model": "sonata-hybrid"
  },
  {
    "id": 167,
    "make": "hyundai",
    "model": "sonata-plug-in-hybrid"
  },
  {
    "id": 168,
    "make": "hyundai",
    "model": "tucson"
  },
  {
    "id": 169,
    "make": "hyundai",
    "model": "veloster"
  },
  {
    "id": 170,
    "make": "infiniti",
    "model": "q40"
  },
  {
    "id": 171,
    "make": "infiniti",
    "model": "q50"
  },
  {
    "id": 172,
    "make": "infiniti",
    "model": "q60-convertible"
  },
  {
    "id": 173,
    "make": "infiniti",
    "model": "q70"
  },
  {
    "id": 174,
    "make": "infiniti",
    "model": "qx50"
  },
  {
    "id": 175,
    "make": "infiniti",
    "model": "qx60"
  },
  {
    "id": 176,
    "make": "infiniti",
    "model": "qx70"
  },
  {
    "id": 177,
    "make": "infiniti",
    "model": "qx80"
  },
  {
    "id": 178,
    "make": "jaguar",
    "model": "f-pace"
  },
  {
    "id": 179,
    "make": "jaguar",
    "model": "f-type"
  },
  {
    "id": 180,
    "make": "jaguar",
    "model": "xe"
  },
  {
    "id": 181,
    "make": "jaguar",
    "model": "xf"
  },
  {
    "id": 182,
    "make": "jaguar",
    "model": "xj"
  },
  {
    "id": 183,
    "make": "jaguar",
    "model": "xk"
  },
  {
    "id": 184,
    "make": "jeep",
    "model": "cherokee"
  },
  {
    "id": 185,
    "make": "jeep",
    "model": "compass"
  },
  {
    "id": 186,
    "make": "jeep",
    "model": "grand-cherokee"
  },
  {
    "id": 187,
    "make": "jeep",
    "model": "grand-cherokee-srt"
  },
  {
    "id": 188,
    "make": "jeep",
    "model": "patriot"
  },
  {
    "id": 189,
    "make": "jeep",
    "model": "renegade"
  },
  {
    "id": 190,
    "make": "kia",
    "model": "forte"
  },
  {
    "id": 191,
    "make": "kia",
    "model": "k900"
  },
  {
    "id": 192,
    "make": "kia",
    "model": "optima"
  },
  {
    "id": 193,
    "make": "kia",
    "model": "optima-hybrid"
  },
  {
    "id": 194,
    "make": "kia",
    "model": "rio"
  },
  {
    "id": 195,
    "make": "kia",
    "model": "sedona"
  },
  {
    "id": 196,
    "make": "kia",
    "model": "sorento"
  },
  {
    "id": 197,
    "make": "kia",
    "model": "soul"
  },
  {
    "id": 198,
    "make": "kia",
    "model": "sportage"
  },
  {
    "id": 199,
    "make": "lamborghini",
    "model": "aventador"
  },
  {
    "id": 200,
    "make": "lamborghini",
    "model": "huracan"
  },
  {
    "id": 201,
    "make": "land-rover",
    "model": "discovery-sport"
  },
  {
    "id": 202,
    "make": "land-rover",
    "model": "lr2"
  },
  {
    "id": 203,
    "make": "land-rover",
    "model": "lr4"
  },
  {
    "id": 204,
    "make": "land-rover",
    "model": "range-rover"
  },
  {
    "id": 205,
    "make": "land-rover",
    "model": "range-rover-evoque"
  },
  {
    "id": 206,
    "make": "land-rover",
    "model": "range-rover-sport"
  },
  {
    "id": 207,
    "make": "lexus",
    "model": "ct-200h"
  },
  {
    "id": 208,
    "make": "lexus",
    "model": "es-300h"
  },
  {
    "id": 209,
    "make": "lexus",
    "model": "es-350"
  },
  {
    "id": 210,
    "make": "lexus",
    "model": "gs-200t"
  },
  {
    "id": 211,
    "make": "lexus",
    "model": "gs-350"
  },
  {
    "id": 212,
    "make": "lexus",
    "model": "gs-450h"
  },
  {
    "id": 213,
    "make": "lexus",
    "model": "gs-f"
  },
  {
    "id": 214,
    "make": "lexus",
    "model": "gx-460"
  },
  {
    "id": 215,
    "make": "lexus",
    "model": "is-200t"
  },
  {
    "id": 216,
    "make": "lexus",
    "model": "is-250"
  },
  {
    "id": 217,
    "make": "lexus",
    "model": "is-250-c"
  },
  {
    "id": 218,
    "make": "lexus",
    "model": "is-300"
  },
  {
    "id": 219,
    "make": "lexus",
    "model": "is-350"
  },
  {
    "id": 220,
    "make": "lexus",
    "model": "is-350-c"
  },
  {
    "id": 221,
    "make": "lexus",
    "model": "ls-460"
  },
  {
    "id": 222,
    "make": "lexus",
    "model": "ls-600h-l"
  },
  {
    "id": 223,
    "make": "lexus",
    "model": "lx-570"
  },
  {
    "id": 224,
    "make": "lexus",
    "model": "nx-200t"
  },
  {
    "id": 225,
    "make": "lexus",
    "model": "nx-300h"
  },
  {
    "id": 226,
    "make": "lexus",
    "model": "rc-200t"
  },
  {
    "id": 227,
    "make": "lexus",
    "model": "rc-300"
  },
  {
    "id": 228,
    "make": "lexus",
    "model": "rc-350"
  },
  {
    "id": 229,
    "make": "lexus",
    "model": "rc-f"
  },
  {
    "id": 230,
    "make": "lexus",
    "model": "rx-350"
  },
  {
    "id": 231,
    "make": "lexus",
    "model": "rx-450h"
  },
  {
    "id": 232,
    "make": "lincoln",
    "model": "mkc"
  },
  {
    "id": 233,
    "make": "lincoln",
    "model": "mks"
  },
  {
    "id": 234,
    "make": "lincoln",
    "model": "mkt"
  },
  {
    "id": 235,
    "make": "lincoln",
    "model": "mkx"
  },
  {
    "id": 236,
    "make": "lincoln",
    "model": "navigator"
  },
  {
    "id": 237,
    "make": "mini",
    "model": "cooper"
  },
  {
    "id": 238,
    "make": "mini",
    "model": "cooper-clubman"
  },
  {
    "id": 239,
    "make": "mini",
    "model": "cooper-countryman"
  },
  {
    "id": 240,
    "make": "mini",
    "model": "cooper-coupe"
  },
  {
    "id": 241,
    "make": "mini",
    "model": "cooper-paceman"
  },
  {
    "id": 242,
    "make": "mini",
    "model": "cooper-roadster"
  },
  {
    "id": 243,
    "make": "maserati",
    "model": "ghibli"
  },
  {
    "id": 244,
    "make": "maserati",
    "model": "granturismo"
  },
  {
    "id": 245,
    "make": "maserati",
    "model": "granturismo-convertible"
  },
  {
    "id": 246,
    "make": "maserati",
    "model": "quattroporte"
  },
  {
    "id": 247,
    "make": "mazda",
    "model": "3"
  },
  {
    "id": 248,
    "make": "mazda",
    "model": "5"
  },
  {
    "id": 249,
    "make": "mazda",
    "model": "6"
  },
  {
    "id": 250,
    "make": "mazda",
    "model": "cx-3"
  },
  {
    "id": 251,
    "make": "mazda",
    "model": "cx-5"
  },
  {
    "id": 252,
    "make": "mazda",
    "model": "mx-5-miata"
  },
  {
    "id": 253,
    "make": "mclaren",
    "model": "650s-coupe"
  },
  {
    "id": 254,
    "make": "mclaren",
    "model": "650s-spider"
  },
  {
    "id": 255,
    "make": "mercedes-benz",
    "model": "amg-gt"
  },
  {
    "id": 256,
    "make": "mercedes-benz",
    "model": "b-class-electric-drive"
  },
  {
    "id": 257,
    "make": "mercedes-benz",
    "model": "cla-class"
  },
  {
    "id": 258,
    "make": "mercedes-benz",
    "model": "cls-class"
  },
  {
    "id": 259,
    "make": "mercedes-benz",
    "model": "g-class"
  },
  {
    "id": 260,
    "make": "mercedes-benz",
    "model": "gl-class"
  },
  {
    "id": 261,
    "make": "mercedes-benz",
    "model": "gla-class"
  },
  {
    "id": 262,
    "make": "mercedes-benz",
    "model": "glc-class"
  },
  {
    "id": 263,
    "make": "mercedes-benz",
    "model": "gle-class"
  },
  {
    "id": 264,
    "make": "mercedes-benz",
    "model": "gle-class-coupe"
  },
  {
    "id": 265,
    "make": "mercedes-benz",
    "model": "glk-class"
  },
  {
    "id": 266,
    "make": "mercedes-benz",
    "model": "maybach"
  },
  {
    "id": 267,
    "make": "mercedes-benz",
    "model": "metris"
  },
  {
    "id": 268,
    "make": "mercedes-benz",
    "model": "sl-class"
  },
  {
    "id": 269,
    "make": "mercedes-benz",
    "model": "slk-class"
  },
  {
    "id": 270,
    "make": "mercedes-benz",
    "model": "sls-amg-gt-final-edition"
  },
  {
    "id": 271,
    "make": "mercedes-benz",
    "model": "sprinter"
  },
  {
    "id": 272,
    "make": "mercedes-benz",
    "model": "sprinter-worker"
  },
  {
    "id": 273,
    "make": "mitsubishi",
    "model": "lancer"
  },
  {
    "id": 274,
    "make": "mitsubishi",
    "model": "lancer-evolution"
  },
  {
    "id": 275,
    "make": "mitsubishi",
    "model": "mirage"
  },
  {
    "id": 276,
    "make": "mitsubishi",
    "model": "mirage-g4"
  },
  {
    "id": 277,
    "make": "mitsubishi",
    "model": "outlander"
  },
  {
    "id": 278,
    "make": "mitsubishi",
    "model": "outlander-sport"
  },
  {
    "id": 279,
    "make": "mitsubishi",
    "model": "i-miev"
  },
  {
    "id": 280,
    "make": "nissan",
    "model": "370z"
  },
  {
    "id": 281,
    "make": "nissan",
    "model": "altima"
  },
  {
    "id": 282,
    "make": "nissan",
    "model": "frontier"
  },
  {
    "id": 283,
    "make": "nissan",
    "model": "gt-r"
  },
  {
    "id": 284,
    "make": "nissan",
    "model": "juke"
  },
  {
    "id": 285,
    "make": "nissan",
    "model": "maxima"
  },
  {
    "id": 286,
    "make": "nissan",
    "model": "murano"
  },
  {
    "id": 287,
    "make": "nissan",
    "model": "nv-cargo"
  },
  {
    "id": 288,
    "make": "nissan",
    "model": "nv-passenger"
  },
  {
    "id": 289,
    "make": "nissan",
    "model": "nv200"
  },
  {
    "id": 290,
    "make": "nissan",
    "model": "pathfinder"
  },
  {
    "id": 291,
    "make": "nissan",
    "model": "quest"
  },
  {
    "id": 292,
    "make": "nissan",
    "model": "rogue"
  },
  {
    "id": 293,
    "make": "nissan",
    "model": "rogue-select"
  },
  {
    "id": 294,
    "make": "nissan",
    "model": "sentra"
  },
  {
    "id": 295,
    "make": "nissan",
    "model": "titan-xd"
  },
  {
    "id": 296,
    "make": "nissan",
    "model": "versa"
  },
  {
    "id": 297,
    "make": "nissan",
    "model": "versa-note"
  },
  {
    "id": 298,
    "make": "nissan",
    "model": "xterra"
  },
  {
    "id": 299,
    "make": "porsche",
    "model": "718-boxster"
  },
  {
    "id": 300,
    "make": "porsche",
    "model": "911"
  },
  {
    "id": 301,
    "make": "porsche",
    "model": "918-spyder"
  },
  {
    "id": 302,
    "make": "porsche",
    "model": "boxster"
  },
  {
    "id": 303,
    "make": "porsche",
    "model": "cayenne"
  },
  {
    "id": 304,
    "make": "porsche",
    "model": "cayman"
  },
  {
    "id": 305,
    "make": "porsche",
    "model": "macan"
  },
  {
    "id": 306,
    "make": "porsche",
    "model": "panamera"
  },
  {
    "id": 307,
    "make": "ram",
    "model": "1500"
  },
  {
    "id": 308,
    "make": "ram",
    "model": "3500"
  },
  {
    "id": 309,
    "make": "ram",
    "model": "cv-tradesman"
  },
  {
    "id": 310,
    "make": "ram",
    "model": "promaster-cargo-van"
  },
  {
    "id": 311,
    "make": "ram",
    "model": "promaster-city"
  },
  {
    "id": 312,
    "make": "ram",
    "model": "promaster-window-van"
  },
  {
    "id": 313,
    "make": "rolls-royce",
    "model": "dawn"
  },
  {
    "id": 314,
    "make": "rolls-royce",
    "model": "ghost-series-ii"
  },
  {
    "id": 315,
    "make": "rolls-royce",
    "model": "phantom"
  },
  {
    "id": 316,
    "make": "rolls-royce",
    "model": "phantom-coupe"
  },
  {
    "id": 317,
    "make": "rolls-royce",
    "model": "phantom-drophead-coupe"
  },
  {
    "id": 318,
    "make": "rolls-royce",
    "model": "wraith"
  },
  {
    "id": 319,
    "make": "scion",
    "model": "fr-s"
  },
  {
    "id": 320,
    "make": "scion",
    "model": "ia"
  },
  {
    "id": 321,
    "make": "scion",
    "model": "im"
  },
  {
    "id": 322,
    "make": "scion",
    "model": "iq"
  },
  {
    "id": 323,
    "make": "scion",
    "model": "tc"
  },
  {
    "id": 324,
    "make": "scion",
    "model": "xb"
  },
  {
    "id": 325,
    "make": "subaru",
    "model": "brz"
  },
  {
    "id": 326,
    "make": "subaru",
    "model": "crosstrek"
  },
  {
    "id": 327,
    "make": "subaru",
    "model": "forester"
  },
  {
    "id": 328,
    "make": "subaru",
    "model": "legacy"
  },
  {
    "id": 329,
    "make": "subaru",
    "model": "outback"
  },
  {
    "id": 330,
    "make": "subaru",
    "model": "wrx"
  },
  {
    "id": 331,
    "make": "subaru",
    "model": "xv-crosstrek"
  },
  {
    "id": 332,
    "make": "toyota",
    "model": "4runner"
  },
  {
    "id": 333,
    "make": "toyota",
    "model": "avalon"
  },
  {
    "id": 334,
    "make": "toyota",
    "model": "avalon-hybrid"
  },
  {
    "id": 335,
    "make": "toyota",
    "model": "camry"
  },
  {
    "id": 336,
    "make": "toyota",
    "model": "camry-hybrid"
  },
  {
    "id": 337,
    "make": "toyota",
    "model": "corolla"
  },
  {
    "id": 338,
    "make": "toyota",
    "model": "highlander-hybrid"
  },
  {
    "id": 339,
    "make": "toyota",
    "model": "land-cruiser"
  },
  {
    "id": 340,
    "make": "toyota",
    "model": "mirai"
  },
  {
    "id": 341,
    "make": "toyota",
    "model": "prius"
  },
  {
    "id": 342,
    "make": "toyota",
    "model": "prius-plug-in"
  },
  {
    "id": 343,
    "make": "toyota",
    "model": "prius-c"
  },
  {
    "id": 344,
    "make": "toyota",
    "model": "prius-v"
  },
  {
    "id": 345,
    "make": "toyota",
    "model": "rav4"
  },
  {
    "id": 346,
    "make": "toyota",
    "model": "rav4-hybrid"
  },
  {
    "id": 347,
    "make": "toyota",
    "model": "sequoia"
  },
  {
    "id": 348,
    "make": "toyota",
    "model": "sienna"
  },
  {
    "id": 349,
    "make": "toyota",
    "model": "tacoma"
  },
  {
    "id": 350,
    "make": "toyota",
    "model": "tundra"
  },
  {
    "id": 351,
    "make": "toyota",
    "model": "venza"
  },
  {
    "id": 352,
    "make": "toyota",
    "model": "yaris"
  },
  {
    "id": 353,
    "make": "volkswagen",
    "model": "beetle"
  },
  {
    "id": 354,
    "make": "volkswagen",
    "model": "beetle-convertible"
  },
  {
    "id": 355,
    "make": "volkswagen",
    "model": "cc"
  },
  {
    "id": 356,
    "make": "volkswagen",
    "model": "eos"
  },
  {
    "id": 357,
    "make": "volkswagen",
    "model": "golf"
  },
  {
    "id": 358,
    "make": "volkswagen",
    "model": "golf-gti"
  },
  {
    "id": 359,
    "make": "volkswagen",
    "model": "golf-r"
  },
  {
    "id": 360,
    "make": "volkswagen",
    "model": "golf-sportwagen"
  },
  {
    "id": 361,
    "make": "volkswagen",
    "model": "jetta"
  },
  {
    "id": 362,
    "make": "volkswagen",
    "model": "passat"
  },
  {
    "id": 363,
    "make": "volkswagen",
    "model": "touareg"
  },
  {
    "id": 364,
    "make": "volkswagen",
    "model": "e-golf"
  },
  {
    "id": 365,
    "make": "volvo",
    "model": "s60"
  },
  {
    "id": 366,
    "make": "volvo",
    "model": "s80"
  },
  {
    "id": 367,
    "make": "volvo",
    "model": "v60"
  },
  {
    "id": 368,
    "make": "volvo",
    "model": "v60-cross-country"
  },
  {
    "id": 369,
    "make": "volvo",
    "model": "xc60"
  },
  {
    "id": 370,
    "make": "volvo",
    "model": "xc70"
  },
  {
    "id": 371,
    "make": "volvo",
    "model": "xc90"
  }
]
const types = ['cabriolet', 'campervan', 'coupe', 'hatchback', 'micro', 'minitruck', 'minivan', 'musclecar', 'pickup', 'roadster', 'sedan', 'supercar', 'suv', 'truck', 'van'];
window.addEventListener('load', () => {
  showCarTypes();
  displayMyCarList(cars);
  getProfileImg();
});


const renderPlans = () => {
  plans.forEach(item => {
    const package = document.createElement('div');
    package.classList.add('relative', 'w-56');
    package.innerHTML = ` 
  <input type="radio" name="packages" value="${item.name}" class="sr-only peer" id="${item.name}">
  <label for="${item.name}"
    class="h-64 hover:border-transparent hover:shadow-lg group block rounded-lg border border-gray-200 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:ring-4  peer-checked:ring-blue-500    group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium  hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
    <div class="min-h-full flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <div>
      <h4 class=" h-12 w-auto text-4xl " > ${item.price}</h4>
        <p class="mt-6 text-center text-sm font-extrabold uppercase">
        ${item.name}
        </p>
        <p class="mt-4 text-center text-xs">  
          ${item.description}
        </p>

        <p><small> ${item.time}</small></p>
      </div>        
    </div>
  </div>
    <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
  </label>
    `;
    packagesDiv.appendChild(package);
  })
}

const showCarTypes = () => {
  types.forEach(carType => {
    const item = document.createElement('div');
    item.classList.add('relative', 'w-32');
    item.innerHTML = ` 
  <input type="radio" name="carType" value="${carType}" class="sr-only peer" id="${carType}">
  <label for="${carType}"
    class=" h-24 hover:bg-blue-500x hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:ring-2  peer-checked:ring-indigo-500    group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
    <div class="flex flex-col justify-center">
      <div class="flex flex-auto justify-center">
        <img src="./images/${carType}.png" alt="" class="w-28" />
      </div>
      <div
        class="w-full flex justify-center  text-sm font-medium   text-gray-500 uppercase">
        ${carType}
      </div>
    </div>
    <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
  </label>
    `;
    typesDiv.appendChild(item);
  })
}

function generateBrandsList() {
  let brands = [...new Set(vehicles.map(item => item.make))];
  brands.forEach(item => {
    var opt = document.createElement("option");
    opt.text = capitalizeFirstLetter(item);
    opt.value = item;
    brandsList.add(opt);
  });
  var selected = brandsList.options[brandsList.selectedIndex].value;
  generateModelList(selected);
}

function generateModelList(make) {
  let filtered = vehicles.filter(v => v.make === make);
  let models = filtered.map(v => v.model);
  // resetting model options:
  removeOptions(modelsList);
  console.log(models);
  models.forEach(item => {
    var opt = document.createElement("option");
    opt.text = capitalizeFirstLetter(item);
    opt.value = item;
    modelsList.add(opt);
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function getProfileImg() {
  let email = JSON.parse(localStorage.getItem('email'));
  Xter = email.charAt(0).toUpperCase()
  const pic = document.createElement('profilePic');
  pic.innerHTML = ` 
  <div class="z-10 sticky top-0 -mt-px px-6 py-1 md:px-8 border-t border-b font-medium uppercase text-secondary bg-gray-50 dark:bg-gray-900">
  ${Xter}
</div>
  
  `
}



brandsList.onchange = function () {
  var selected = brandsList.options[brandsList.selectedIndex].value;
  generateModelList(selected);
}

function removeOptions(selectElement) {
  while (selectElement.options.length > 0) {
    selectElement.remove(0);
  }
}



// On add vehicle form submission.
newVehicleForm.onsubmit = function () {
  let type = document.querySelector('input[name="carType"]:checked').value;
  let brand = brandsList.options[brandsList.selectedIndex].value;
  let model = modelsList.options[modelsList.selectedIndex].value;
  let color = document.querySelector('input[name="color-choice"]:checked').value;
  let plate = document.getElementById('plate').value;
  let id = Date.now();
  let appointmentDate = '';
  let appointmentTime = '';
  let appointmentAddress = '';
  let detailer = '';
  let detailerCell = '';
  let detailerEmail = '';
  let package = '';
  let service = '';
  let cost = '';

  let vehicle = {
    id: id, type: type, brand: brand, model: model, color: color, plate: plate,
    appointmentDate: appointmentDate,
    appointmentTime: appointmentTime,
    appointmentAddress: appointmentAddress,
    detailer: detailer,
    detailerCell: detailerCell,
    detailerEmail: detailerEmail,
    package: package,
    cost: cost,
    service: service
  };
  saveVehicle(vehicle);
}


const saveVehicle = (vehicle) => {
  var cars = getVehicles();
  cars.push(vehicle);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cars));
}

function removeVehicle(carId) {
  vehiclesList.innerHTML = '';
  var entries = getVehicles();
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].id == carId) {
      entries.splice(i, 1);
    }
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
  displayMyCarList(entries);
}

const getVehicles = () => {
  if (cars == null) {
    cars = [];
  }
  return cars;
}


function displayMyCarList(list) {
  vehiclesList.innerHTML = '';
  if (list.length > 0) {
    list.forEach(car => {
      const item = document.createElement('li');
      item.innerHTML = ` 
      <div
      class="h-64  bg-white  group block rounded-lg p-4 border border-gray-200">


      
      <div class="flex flex-col justify-center">      
        <div class="flex-auto pb-6 px-6">
          <div class="flex flex-col">
            <div class="flex  justify-center text-sm font-semibold">
            ${capitalizeFirstLetter(car.brand)} 
            </div>
            <div class="flex  justify-center text-sm font-medium">
           ${capitalizeFirstLetter(car.model)}
            </div>
            <div class="flex flex-auto justify-center my-3">
            <img src="./images/${car.type}.png" class="w-28" />
          </div>
            <div  class="w-full flex justify-center  text-sm font-medium   text-gray-500 my-3">
              ${capitalizeFirstLetter(car.color)} - ${capitalizeFirstLetter(car.plate)}             
            </div>            
          </div>
    
          <div class="flex relative space-x-3 justify-center mt-4 text-sm font-medium">        
            <button onclick="removeVehicle(${car.id})"
              class="absolute top-0 flex-none flex items-center justify-center w-9 h-9 rounded-full text-red-500 border bg-red-50 hover:bg-red-500  hover:text-white "
              type="button">
              <i class="fas fa-trash"></i>
            </button>            
          </div>
        </div>
      </div>
    </div>      
      `;
      vehiclesList.appendChild(item);
    })
  } else {
    var noDataDiv = document.getElementById('NoData');
    const item = document.createElement('div');
    item.classList.add('flex', 'rounded-lg', 'justify-center');
    item.innerHTML = ` 
    <div class="w-72  flex flex-col items-center  justify-center text-gray-400 text-sm  p-4">
    <i class="fas fa-exclamation-circle fa-3x mb-2"></i>
    <div class="text-center">
      No vehicles at the moment, add some and they will appear here.
    </div>
  </div>
    `;
    noDataDiv.appendChild(item);
  }
}

filter.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  let filtered = cars.filter(car => car.brand.includes(searchTerm.toLowerCase()) || car.model.includes(searchTerm.toLowerCase()))
  displayMyCarList(filtered);
});

