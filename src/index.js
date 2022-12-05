import './style.css'

import Model from './MVC/Model'
import View from './MVC/View'
import Controller from './MVC/Controller'

const app = new Controller(new Model(), new View())