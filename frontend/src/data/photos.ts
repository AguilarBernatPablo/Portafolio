import atardecer from "../assets/fotos/atardecer.webp";
import muelle from "../assets/fotos/muelle.webp";
import playa from "../assets/fotos/playa.webp";
import camalotes from "../assets/fotos/camalotes.webp";
import noche from "../assets/fotos/noche.webp";

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
}

// Fotos reales de Paraná, de Wikimedia Commons. La licencia pide nombrar al autor y la licencia.
export const photos = {
  atardecer: {
    src: atardecer, width: 960, height: 1280,
    alt: "Atardecer naranja sobre el río Paraná visto desde la costanera, con faroles y la baranda en sombra",
    caption: "Atardecer en la costanera de Paraná",
    author: "Mariposa de madera", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Atardecer_en_la_costanera_de_Paran%C3%A1,_Entre_R%C3%ADos.jpg",
  },
  muelle: {
    src: muelle, width: 1600, height: 899,
    alt: "Muelle de madera sobre el río Paraná al caer el sol, con un árbol grande a la izquierda",
    caption: "Muelle de la costanera de Paraná",
    author: "Claudeo3000", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Costanera_de_Parana.jpg",
  },
  playa: {
    src: playa, width: 960, height: 1280,
    alt: "Arena de una playa en primer plano y el sol bajo sobre el río Paraná",
    caption: "Playa sobre el río Paraná",
    author: "Mariposa de madera", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Atardecer_sobre_el_r%C3%ADo_Paran%C3%A1_desde_la_playa,_Paran%C3%A1,_Entre_R%C3%ADos.jpg",
  },
  camalotes: {
    src: camalotes, width: 960, height: 1280,
    alt: "Camalotes a contraluz en la orilla del río Paraná, con islas al fondo",
    caption: "Camalotes en la orilla del Paraná",
    author: "Mariposa de madera", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Camalotes_(Pontederia_crassipes)_a_orillas_del_r%C3%ADo_Paran%C3%A1,_Entre_R%C3%ADos.jpg",
  },
  noche: {
    src: noche, width: 1600, height: 967,
    alt: "La costanera de Paraná de noche, con las luces de la ciudad reflejadas en el río",
    caption: "La costanera de Paraná de noche",
    author: "Jorge Suarez Verdier", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source: "https://commons.wikimedia.org/wiki/File:Ciudad_de_Paran%C3%A1,_Vista_Nocturna_de_la_Costanera,_Enero_2010.jpg",
  },
} satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;
