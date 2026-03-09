# Control Dictamen
Este repositorio tiene 2 proyectos, y se coordina usando [Turborepo](https://turborepo.dev/) para poder ejecutar ambos de una manera mas sencilla, aun asi ambos proyectos pueden funcionar independientemente del otro


## Funcionamiento

### Comandos
- `` run ``: Ejecuta el cliente y el servidor a la vez
- `` build ``: Genera los ejecutables del codigo de ambos proyecto
- `` start ``: Sirve la version final con el servidor 
### Dependencias
Para agregar una dependencia ya sea en cualquiera de ambos proyectos se necesita espacificar el workspace, es decir el subproyecto al que se va a agregar
```
npm i dependency --workspace backend/frontend
```
