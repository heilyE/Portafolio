# 📖 Lectum

> **Procesador de texto con modos de lectura** — Proyecto web hecho con HTML, CSS y JavaScript puro (sin frameworks), aplicando una arquitectura robusta de patrones de diseño.

---

## ✨ Funcionalidad

| Acción | Descripción |
|--------|-------------|
| Ingresar texto | El usuario escribe o pega cualquier texto en el área de entrada. |
| Seleccionar modo | Elige entre tres modos: **Normal**, **Espaciado** o **Mayúsculas**. |
| Procesar | El texto se transforma según el modo elegido y se muestra en el área de resultado. |
| Persistencia | El último texto y modo seleccionado se guardan automáticamente en `localStorage` y se restauran al recargar. |

### Modos de lectura

| Modo | Descripción |
|------|-------------|
| **Normal** | Devuelve el texto tal cual (trim). |
| **Espaciado** | Separa cada letra de cada palabra con un espacio tenue para facilitar la lectura lenta. |
| **Mayúsculas** | Convierte todo el texto a mayúsculas. |

---

## 🏗️ Arquitectura y patrones de diseño

### Arquitectura MVC estricta

| Capa | Responsabilidad |
|------|-----------------|
| **Modelo** | Entidades, DTOs, Servicios y Estrategias. No toca el DOM. |
| **Vista** | Componentes UI. No contiene lógica de negocio. |
| **Controlador** | Orquesta el flujo: valida entrada → llama servicio → persiste → actualiza vista. |

### Patrones implementados

| Patrón | Dónde se aplica |
|--------|-----------------|
| **Singleton** | `AppLectum`, `Configuracion`, `ClienteLocalStorage` |
| **Factory** | `FabricaEstrategiasLectura`, `FabricaRepositorios` |
| **Strategy** | `ServicioProcesamientoTexto` + `EstrategiaLectura*` |
| **Repository** | `IRepositorioTextoLectura` + `RepositorioTextoLecturaLocalStorage` |
| **DTO** | `TextoLecturaDTO` |
| **MVC** | `ControladorLectum` / `VistaLectum` + componentes / capa de modelos |

---

## 📁 Estructura de archivos

```
lectum/
├── index.html                                        # Punto de entrada HTML
├── assets/
│   └── css/
│       └── estilos.css                               # Hoja de estilos
└── src/
    ├── main.js                                       # Bootstrap (DOMContentLoaded)
    ├── app/
    │   ├── AppLectum.js                              # Singleton — arranque de la app
    │   └── Configuracion.js                          # Singleton — configuración global
    ├── controladores/
    │   └── ControladorLectum.js                      # Controlador MVC (delgado)
    ├── vistas/
    │   ├── VistaLectum.js                            # Vista MVC principal
    │   └── componentes/
    │       ├── ComponenteEntradaTexto.js             # Componente textarea
    │       ├── ComponenteSelectorModoLectura.js      # Componente select
    │       └── ComponenteSalidaTexto.js              # Componente resultado
    ├── modelos/
    │   ├── entidades/
    │   │   └── TextoLectura.js                       # Entidad de dominio
    │   ├── dto/
    │   │   └── TextoLecturaDTO.js                    # DTO
    │   └── servicios/
    │       ├── ServicioProcesamientoTexto.js         # Contexto Strategy
    │       └── estrategias/
    │           ├── EstrategiaLecturaNormal.js        # Strategy: Normal
    │           ├── EstrategiaLecturaEspaciado.js     # Strategy: Espaciado
    │           └── EstrategiaLecturaMayusculas.js    # Strategy: Mayúsculas
    ├── repositorios/
    │   ├── interfaces/
    │   │   └── IRepositorioTextoLectura.js           # Contrato Repository
    │   └── RepositorioTextoLecturaLocalStorage.js    # Implementación localStorage
    ├── fabricas/
    │   ├── FabricaEstrategiasLectura.js              # Factory de estrategias
    │   └── FabricaRepositorios.js                    # Factory de repositorios
    ├── infraestructura/
    │   └── almacenamiento/
    │       └── ClienteLocalStorage.js                # Singleton wrapper localStorage
    └── utilidades/
        ├── Constantes.js                             # Modos y claves de storage
        └── Validadores.js                            # Funciones de validación puras
```

---

## 🚀 Cómo ejecutar

1. Clonar o descargar el repositorio.
2. Abrir `lectum/index.html` directamente en el navegador **o** servir con cualquier servidor estático:

```bash
# Con npx serve
npx serve lectum

# Con Python 3
python -m http.server 8080 --directory lectum

# Con VS Code Live Server
# Abrir lectum/index.html y hacer clic en "Go Live"
```

> ⚠️ **Es obligatorio usar un servidor HTTP** (o un navegador que soporte `file://` con ES Modules, como Chrome/Edge) porque la app usa `import`/`export` nativos.

---

## 🔑 Reglas arquitectónicas respetadas

- ✅ El **Modelo** (`modelos/`) **NO manipula el DOM**.
- ✅ La **Vista** (`vistas/`) **NO contiene lógica de negocio**.
- ✅ El **Controlador** es **delgado**: solo orquesta, no procesa.
- ✅ Todo el código fuente está **en español** (clases, métodos, variables).
- ✅ Cada archivo incluye un **comentario inicial** indicando su rol y los patrones que aplica.
- ✅ Se usa **ES Modules** (`import`/`export`) y `<script type="module">`.
- ✅ La persistencia usa **localStorage** abstraído con el patrón Repository + Singleton.

---

## 📄 Licencia

MIT © 2026
