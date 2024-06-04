### README.md

# Sistema Integral de Gestión de Inventarios - Frontend

Este proyecto es el frontend del Sistema Integral de Gestión de Inventarios para los proyectos del Instituto Tecnológico de Toluca (ITT) en el Departamento de Posgrado. Está desarrollado en Angular y utiliza Capacitor para compatibilidad multiplataforma.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes software en tu sistema:
- Node.js (Verificar con el comando node --version)
- Angular CLI  (Verificar con el comando ng version)
- Git

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/nombre-del-repositorio.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd nombre-del-repositorio
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Ejecutar la Aplicación

Para iniciar el servidor de desarrollo y ejecutar la aplicación:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200`.

## Estructura del Proyecto

El proyecto sigue la estructura estándar de Angular. A continuación, se describen algunas carpetas y archivos importantes:

- `src/app`: Contiene los módulos, componentes, servicios y guardias de la aplicación.
- `src/assets`: Contiene los recursos estáticos como imágenes y archivos CSS.
- `src/environments`: Contiene los archivos de configuración de entorno.

## Comandos Útiles de Angular CLI

### Generar Componentes

Para generar un nuevo componente:

```bash
ng generate component nombre-del-componente
```

Este comando crea un nuevo componente en el directorio `src/app`.

### Generar Servicios

Para generar un nuevo servicio:

```bash
ng generate service nombre-del-servicio
```

Este comando crea un nuevo servicio en el directorio `src/app`.

### Generar Guards

Para generar un nuevo guardia de ruta:

```bash
ng generate guard nombre-del-guard
```

Este comando crea un nuevo guard en el directorio `src/app`.

### Generar Módulos

Para generar un nuevo módulo:

```bash
ng generate module nombre-del-modulo
```

Este comando crea un nuevo módulo en el directorio `src/app`.

## Subir Cambios con Git

Para contribuir al proyecto, sigue los siguientes pasos:

1. Crea una nueva rama para tu característica o corrección de errores:

    ```bash
    git checkout -b nombre-de-tu-rama
    ```

2. Realiza tus cambios y haz commits descriptivos:

    ```bash
    git add .
    git commit -m "Descripción de tus cambios"
    ```

3. Sube tus cambios al repositorio remoto:

    ```bash
    git push origin nombre-de-tu-rama
    ```

4. Crea una solicitud de pull en GitHub desde tu rama.

## Capacitor

Para trabajar con Capacitor y compilar la aplicación para dispositivos móviles:

### Instalar Capacitor

Si aún no tienes Capacitor instalado:

```bash
npm install @capacitor/core @capacitor/cli
```

### Añadir Plataforma

Para añadir una plataforma (Android/iOS):

```bash
npx cap add android
npx cap add ios
```

### Sincronizar Cambios

Cada vez que realices cambios en tu proyecto, sincroniza con Capacitor:

```bash
npx cap sync
```

### Abrir Proyecto en Android Studio o Xcode

Para abrir el proyecto en Android Studio:

```bash
npx cap open android
```

Para abrir el proyecto en Xcode:

```bash
npx cap open ios
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue el flujo de trabajo de Git descrito anteriormente y asegúrate de que tus cambios sean claros y bien documentados.

---

¡Gracias por contribuir al desarrollo del Sistema Integral de Gestión de Inventarios del ITT!