# OSSA Ingeniería y Construcción S.R.L

Sitio web institucional desarrollado con **React** y **Vite**.

## Características

- Navegación SPA con [react-router](https://reactrouter.com/)
- Componentes reutilizables con [React Bootstrap](https://react-bootstrap.github.io/)
- Animaciones y estilos personalizados
- Secciones: Inicio, Servicios, Sobre nosotros, Contacto, Clientes, Estadísticas
- Detalle de servicios con videos y beneficios
- Responsive y optimizado para dispositivos móviles

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/ossaing.git
   cd ossaing
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```

## Uso en desarrollo

```sh
npm run dev
```

Accede a [http://localhost:5173](http://localhost:5173) en tu navegador.

## Build para producción

```sh
npm run build
```

## Lint

```sh
npm run lint
```

## Estructura del proyecto

```
src/
  components/
    common/        # Componentes reutilizables (Menu, Footer, Hero, etc)
    pages/         # Vistas principales (Home, ServicioDetalle)
    styles/        # Archivos CSS
    img/           # Imágenes
    assets/        # Otros recursos
  App.jsx          # Componente principal
  main.jsx         # Punto de entrada
```

## Créditos

- OSSA Ingeniería y Construcción S.R.L
- Desarrollado con [React](https://react.dev/) y [Vite](https://vitejs.dev/)
