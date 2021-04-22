import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  public info: object
  constructor() { }

  ngOnInit(): void {
    this.info = {
      name: 'Diego Joaquin',
      lastName: 'De La Jara Leiva',
      position: 'Front-end Developer',
      description: `Analista programador amante de la tecnología, la automatización de procesos, el desarrollo web en general y el aprendizaje autodidacta.
      Stack de desarrollo: HTML5, CSS3, Javascript, Vue, React, Angular, Node, Git, Firebase, MongoDB, ES6, Unit Test, Tailwind, 
      Bootstrap, Vuetify, Foundation, Bulma, PWA, Responsive web design, grid system.`,
      professionalExperience: {
        title: 'EXPERIENCIA PROFESIONAL',
        jobs: [
          {
            date: '13/10/2020 - 12/04/2021 (Santiago-Chile)',
            title: 'Prodigio',
            position: 'Front end Developer',
            tasks: `Manejar las distintas tecnologías y frameworks del desarrollo de aplicaciones web.
            Estar en constante aprendizaje en desarrollo Front-end y así aportar las mejores soluciones a la hora de construir apps escalables y optimizadas para distintos dispositivos.`
          },
          {
            date: '08/10/2018 - 09/10/2020 (Santiago-Chile)',
            title: 'Qwantec',
            position: 'Front end Developer',
            tasks: `Desarrollo de componentes para NuxtJS (Vue),
            Armado de maquetas en HTML5 + CSS3.
            Integrar distintos flujos de trabajo y agilidad en el equipo de desarrollo, ya sea, Dailly meetings, historias de usuario, Kanban, conocimientos de UI/UX.`
          },
          {
            date: '05/2016 - 10/2018 (Santiago-Chile)',
            title: 'Cardumen',
            position: 'Front end Developer',
            tasks: `Principales tareas: 
            Desarrollo web, armado de E-mails y Landing pages para Consorcio.
            HTML, CSS, Javascript, Vue, JQuery, PHP, MySQL
            Desarrollar un sistema web, para agilizar la creación de plantillas de correo.`
          },
          {
            date: '08/2015 - 01/2016 (Santiago-Chile)',
            title: 'Ludique',
            position: 'Back end Developer',
            tasks: 'Tareas: Landings pages MySQL Facebook connect Phonegap CodeIgniter'
          }
        ]
      }
    }
  }

}
