# Proyecto OptiManager 2.0
Aplicación desarrollada para la asignatura de Proyecto Integrado para finalizar el CFGS de Desarrollo de Aplicaciones Multiplataforma

## BREVE DESCRIPCIÓN APP
Aplicación de gestión para ópticas. La idea, es agilizar el registro de nuevos clientes en la óptica y anotar la toma de medidas de manera más rapida y eficiente. Otra de las opciones que tenemos es registrar los artículos que tenemos en la óptica para así saber lo que entra y lo que sale de la óptica.

## TECNOLOGÍA EMPLEADA 
Android

## OBJETIVOS DEL PROYECTO
- Pantalla de inicio con acceso Login para cada una de las ópticas.
- Acceso con una cuenta de administrador para gestionar todas las ópticas (con o sin acceso a clientes, artículos, etc...)
- Botones en pantalla de inicio al accede de Clientes, Nuevo Cliente, Listado de Artículos, Empleados. Todo para gestionar la propia óptica.
- Es una versión 2.0 ya que en el 1er año de ciclo hice un CRUD con la idea de hacer una app de gestión para ópticas.[Enlace a CRUD]().
- Su finalidad es agilizar el trabajo de los empleados para perder el menor tiempo posible a la hora de añadir clientes, artículos o toma de medidas.
- Lo que quiero conseguir con esta app es tener un trato más cercano de cara al cliente.
- Para el botón de clientes, aparecerá una lista con todos los clientes que hayamos agregado, y tendremos una opción de búsqueda por CodCliente o por Nombre y apellidos.
- El registro de clientes será con su nombre, apellidos, dirección, teléfono, antecedentes visuales... El CodCliente se generará automáticamente cada vez que vayamos agregando un cliente nuevo.
- Para los artículos si podremos modificar el código de artículo para que la búsqueda de los artículos sea de manera más sencilla, ya que con unas siglas podamos buscarlo.
- En el caso de empleados registraremos el nombre, apellidos, dirección, correo electrónico, DNI, puesto que ocupa, titulación, años en la empresa, gana a la hora, etc...
- Intentaremos hacer que los empleados puedan hacer como una firma al acceder al puesto de trabajo y otra al salir, para así registrar las horas en el puesto. La idea es que cada empleado tenga la APP en un smartphone.
- En la base de datos registraremos los usuarios, los clientes, los artículos y los empleados.
  - BD Clientes --> CodCliente, NomCliente, ApeCliente, DirCliente, TelCliente, AVCliente.
  - BD Artículos --> Id, CodArt, NomArt, PVOArt, PVPArt.
  - BD Empleados --> CodEmple, NomEmple, ApeEmple, DNIEmple, EmaEmple, PuesEmple, TitEmple, AnyoEmple, SalEmple.
  - BD Usuarios --> CodUsu, NomUsu, PassUsu, NomUsu, ApeUsu.

## COMPLETADO
[ ] Poner descripción, título y objetivos de la App en Github
[ ] Hacer mockup de la aplicación en AdobeXD
[ ] Subir código fuente de la App
[ ]
