import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

/**Models */
import { AreaItemModel } from '@core/models/AreaItem.model';
import { IconModel } from '@core/models/Icon.model';

/**Environment */
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  /**Variables */
  private apiUrl = `${environment.url}/api/areas`;

  /**Injects */
  private http = inject(HttpClient);

  getIconsAreas(): Array<IconModel> {
    const iconsAreas: Array<IconModel> = [
      { src: 'assets/areas/analytics.svg' },
      { src: 'assets/areas/atomic.svg' },
      { src: 'assets/areas/biology.svg' },
      { src: 'assets/areas/chemical.svg' },
      { src: 'assets/areas/computer.svg' },
      { src: 'assets/areas/education.svg' },
      { src: 'assets/areas/health.svg' },
      { src: 'assets/areas/industrial.svg' },
      { src: 'assets/areas/laboratory.svg' },
      { src: 'assets/areas/math.svg' },
      { src: 'assets/areas/physic.svg' },
      { src: 'assets/areas/physicochemical.svg' }
    ];
    return iconsAreas;
  }
  // areas: {
  //     "_id": "65e74daa436b571d91163e18",
  //     "title": "Físico-Químico",
  //     "information": "El área de Físico-Química estudia cómo la física y la química se combinan para entender y manipular la materia. Se enfoca en las propiedades y reacciones de los elementos y compuestos, siendo crucial en campos como la industria y la investigación científica.",
  //     "categories": [
  //       {
  //         "_id": "15e74daa436b571d91163e18",
  //         "title": "Bases",
  //         "information": "En química, base se refiere a una sustancia que al estar en una disolución acuosa libera iones hidroxilo aumentando sus propiedades alcalinas.\
  //                         En química, la base o álcalis es una sustancia que al disolverse en un medio acuoso libera iones hidroxilo (OH-) y presenta propiedades alcalinas.",
  //         "src": "assets/categories/base.svg",
  //         "items": [
  //           {
  //             "_id": "05e74daa436b571d91163e18",
  //             "title": "Litio",
  //             "information": "Metal alcalino dúctil y ligero que existe en la naturaleza mezclado con otros compuestos y se utiliza en la fabricación de baterías, celulares, cerámica, vidrio, lubricantes y hasta en algunas medicinas usadas para los tratamientos de bipolaridad.",
  //             "stock": 20
  //           }
  //         ]
  //       }
  //     ],
  //     "src": 'assets/areas/physicochemical.svg'
  //   },
  //   {
  //     "_id": "65e7b0ef1d3a55395e203f9d",
  //     "title": "Atomic",
  //     "information": "El área de la Física Atómica se enfoca en el estudio de la estructura, comportamiento y propiedades de los átomos y las partículas subatómicas. Comprender la física de lo infinitesimal es fundamental para investigaciones en áreas como la energía nuclear, la física de partículas y la tecnología de semiconductores.",
  //     "categories": [],
  //     "src": 'assets/areas/atomic.svg'
  //   },
  //   {
  //     "_id": "65e7b1031d3a55395e203fa2",
  //     "title": "Biology",
  //     "information": "La Biología es la ciencia que estudia la vida y los organismos vivos. Desde la estructura molecular hasta la ecología de los ecosistemas, esta área abarca una amplia gama de disciplinas, incluyendo genética, microbiología, botánica y zoología. La comprensión de los procesos biológicos es crucial en campos como la medicina, la agricultura y la conservación del medio ambiente.",
  //     "categories": [],
  //     "src": 'assets/areas/biology.svg'
  //   },
  //   {
  //     "_id": "65e7b1051d3a55395e203fa4",
  //     "title": "Chemical",
  //     "information": "La Química es la ciencia que estudia la composición, estructura y propiedades de la materia, así como las transformaciones que experimenta durante las reacciones químicas. Esta área es fundamental en la industria farmacéutica, la fabricación de materiales, la ingeniería de procesos y la investigación de nuevos materiales.",
  //     "categories": [],
  //     "src": 'assets/areas/chemical.svg'
  //   },
  //   {
  //     "_id": "65e7b1051d3a55395e203fa6",
  //     "title": "Computer",
  //     "information": "La Ciencia de la Computación se dedica al estudio de los fundamentos teóricos y prácticos de la información y la computación. Desde el diseño de algoritmos hasta el desarrollo de software y la inteligencia artificial, esta área es fundamental en la innovación tecnológica, la ciberseguridad y la optimización de procesos.",
  //     "categories": [],
  //     "src": 'assets/areas/computer.svg'
  //   },
  //   {
  //     "_id": "65e7b1131d3a55395e203fa9",
  //     "title": "Analytics",
  //     "information": "El Análisis de Datos se centra en la interpretación y aplicación de técnicas estadísticas y computacionales para extraer conocimientos significativos de conjuntos de datos. Desde la minería de datos hasta el aprendizaje automático, esta área es esencial en la toma de decisiones empresariales, la investigación científica y el desarrollo de políticas públicas.",
  //     "categories": [],
  //     "src": 'assets/areas/analytics.svg'
  //   },
  //   {
  //     "_id": "65e7b15d1d3a55395e203fad",
  //     "title": "Laboratory",
  //     "information": "El Laboratorio es el espacio donde se llevan a cabo experimentos y se realizan investigaciones científicas y técnicas. Equipado con instrumentos especializados y protocolos de seguridad, este entorno es esencial en disciplinas como la química, la biología, la física y la ingeniería para la validación de hipótesis y el desarrollo de nuevas tecnologías.",
  //     "categories": [],
  //     "src": 'assets/areas/laboratory.svg'
  //   },
  //   {
  //     "_id": "65e7b1761d3a55395e203fb0",
  //     "title": "Math",
  //     "information": "Las Matemáticas son el lenguaje universal de la ciencia y la herramienta fundamental para comprender patrones, estructuras y fenómenos cuantitativos en todas las disciplinas. Desde el cálculo diferencial hasta la teoría de números, las matemáticas son esenciales en la física, la ingeniería, la economía y muchas otras áreas del conocimiento.",
  //     "categories": [],
  //     "src": 'assets/areas/math.svg'
  //   },
  //   {
  //     "_id": "66e7b1761d3a55395e203fb0",
  //     "title": "Physic",
  //     "information": "La Física es la ciencia que estudia la naturaleza y el comportamiento de la materia y la energía en el universo. Desde la mecánica clásica hasta la física cuántica, esta área abarca una amplia gama de fenómenos, desde las partículas subatómicas hasta las galaxias. La física es fundamental en la comprensión del universo y en el desarrollo de tecnologías avanzadas.",
  //     "categories": [],
  //     "src": 'assets/areas/physic.svg'
  //   },
  //   {
  //     "_id": "67e7b1761d3a55395e203fb0",
  //     "title": "Industrial",
  //     "information": "La Ingeniería Industrial se centra en la optimización de sistemas complejos, incluyendo personas, procesos, información, equipos y energía. Desde la gestión de la cadena de suministro hasta el diseño de procesos de fabricación, esta área es esencial para mejorar la eficiencia y la productividad en una amplia variedad de industrias.",
  //     "categories": [],
  //     "src": 'assets/areas/industrial.svg'
  //   },
  //   {
  //     "_id": "68e7b1761d3a55395e203fb0",
  //     "title": "Health",
  //     "information": "La Ciencia de la Salud se dedica al estudio y la promoción del bienestar físico, mental y social de los individuos y las comunidades. Desde la medicina preventiva hasta la investigación biomédica, esta área abarca una amplia gama de disciplinas, incluyendo medicina, enfermería, salud pública y terapias alternativas.",
  //     "categories": [],
  //     "src": 'assets/areas/health.svg'
  //   },
  //   {
  //     "_id": "69e7b1761d3a55395e203fb0",
  //     "title": "Education",
  //     "information": "La Educación es el proceso de facilitar el aprendizaje, el desarrollo de habilidades y la adquisición de conocimientos. Desde la educación básica hasta la formación profesional y la educación continua, esta área abarca una amplia variedad de enfoques pedagógicos y metodologías de enseñanza. La educación es fundamental para el desarrollo personal, social y económico de los individuos y las sociedades.",
  //     "categories": [],
  //     "src": 'assets/areas/education.svg'
  //   }
  // ]

  /**
 * Get All Areas
 * @returns Array<AreaItemModel>
 */
  async getAreas(): Promise<Array<AreaItemModel>> {
    try {
      const response: any = await this.http.get(this.apiUrl).toPromise();
      if (response) {
        const { message, areas } = response;
        if (areas) {
          return areas;
        }
        console.log('Error al obtener áreas:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return [];
  }


  /**
   * Get Area by id
   * @param _id String, Area's id
   * @returns Area with this id
   */
  async getArea(_id: String): Promise<AreaItemModel | undefined> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/" + _id).toPromise();
      if (response) {
        const { message, area } = response;
        if (area) {
          return area;
        }
        console.log('Error al obtener área:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return undefined;
  }
  /**
   * Delete Area
   * @param area_id String
   * @returns Promise<boolean> true if Area was deleted else false
   */
  async deleteArea(areas: Array<AreaItemModel>, area_id: String): Promise<boolean> {
    try {
      const response: any = await this.http.delete(this.apiUrl + "/" + area_id).toPromise();
      if (response) {
        const { message, ok } = response;
        if (ok) {
          const index = areas.findIndex((area: AreaItemModel) => area._id === area_id);
          if (index !== -1) {
            areas.splice(index, 1);
          }
          return true;
        }
        console.log('Error al eliminar el área:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return false;
  }

  /**
  * Add new area
  * @param area AreaItemModel
  * @returns Promise<String> with new area's _id
  */
  async addArea(areas: Array<AreaItemModel>, area: AreaItemModel): Promise<String | undefined> {
    try {
      const response: any = await this.http.post(this.apiUrl, { area }).toPromise();
      if (response) {
        const { area: newArea } = response;
        if (newArea) {
          areas.push(newArea);
          return newArea._id;
        }
        console.log('Error al crear área:', response.message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Edit area
   * @param areaEdited AreaItemModel
   * @returns boolean, true if area edited else false
   */
  async editArea(areaEdited: AreaItemModel): Promise<boolean> {
    try {
      const response: any = await this.http.put(this.apiUrl + "/" + areaEdited._id, { area: areaEdited }).toPromise();
      if (response) {
        const { message, area } = response;
        if (area) {
          return true;
        }
        console.log('Error al editar área:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return false;
  }

}
