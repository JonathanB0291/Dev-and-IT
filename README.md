# Servicios IT & Desarrollo Web

Este es un sitio web moderno que combina servicios de desarrollo frontend, backend en Python y reclutamiento IT.

## Características

- Diseño moderno con colores pastel
- Secciones para diferentes servicios
- Formulario de contacto
- Enlaces a redes sociales
- Diseño responsivo
- Animaciones suaves

## Requisitos

- Python 3.8 o superior
- Flask
- Navegador web moderno

## Instalación

1. Clona este repositorio
2. Crea un entorno virtual:
```bash
python -m venv venv
```

3. Activa el entorno virtual:
- Windows:
```bash
venv\Scripts\activate
```
- Linux/Mac:
```bash
source venv/bin/activate
```

4. Instala las dependencias:
```bash
pip install -r requirements.txt
```

## Ejecución

1. Asegúrate de que el entorno virtual esté activado
2. Ejecuta la aplicación:
```bash
python app.py
```

3. Abre tu navegador y visita:
```
http://localhost:5000
```

## Estructura del Proyecto

```
.
├── app.py
├── requirements.txt
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── templates/
    └── index.html
```

## Personalización

- Los colores pueden ser modificados en el archivo `static/css/style.css`
- El contenido puede ser editado en `templates/index.html`
- Las animaciones y comportamientos pueden ser ajustados en `static/js/main.js` 