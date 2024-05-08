import { Project } from '../models/project.model';
import { technologies } from './technologies.data';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Prevent Help',
    image: 'prevent-help',
    desc: 'This was my first web development project where we can see information about the COVID-19 pandemic and register through a form to receive more information as well as health centers on the map.',
    linkRepository: 'https://github.com/eduarchilon/preveentHealth',
    linkDeploy: 'https://eduarchilon.github.io/preveentHealth/index.html',
    tecnologies: [technologies[0], technologies[1], technologies[2]],
  },
  {
    id: 2,
    name: 'Librería El Romano',
    image: 'el-romano',
    desc: 'This project is an ecommerce website that sells books from different categories. It works through login authentication and it was done in a group for a programming workshop at the university.',
    linkRepository:
      'https://github.com/Lenh22/TP-TALLER-2-LIBROS/tree/dev/Front-End/libros-angular',
    linkDeploy: 'https://tp-taller-2-libros.vercel.app/',
    tecnologies: [technologies[3], technologies[4], technologies[5]],
  },
];
