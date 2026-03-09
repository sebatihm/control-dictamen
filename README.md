# Control Dictamen
Este repositorio tiene 2 proyectos, y se coordina usando [Turborepo](https://turborepo.dev/) para poder ejecutar ambos de una manera mas sencilla, aun asi ambos proyectos pueden funcionar independientemente del otro


## Funcionamiento

## Set up
Se tiene primeramente que poner a correr el docker-compose.yml, que contiene una instancia de Microsoft SQL Server
```
docker-compose up -d
```

Si es la primera vez que se inicializa la BD se debe entrar al contenedor para crear la base de datos, en este caso si no se proveen las variables de entorno, se utiliza la base de datos test que es la que se creara.

```
docker exec -it sqlserver /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "YourStrong!Passw0rd" -C

CREATE DATABASE test;
GO
```

Despues de ello deberia poder iniciar el proyecto de manera correcta

### Comandos
- `` run ``: Ejecuta el cliente y el servidor a la vez
- `` build ``: Genera los ejecutables del codigo de ambos proyecto
- `` start ``: Sirve la version final con el servidor 
### Dependencias
Para agregar una dependencia ya sea en cualquiera de ambos proyectos se necesita espacificar el workspace, es decir el subproyecto al que se va a agregar
```
npm i dependency --workspace backend/frontend
```
