# 🚗 CarApp Frontend

Interfaz web de aplicación Full Stack para gestión de solicitudes de vehículos.

Aplicación desplegada públicamente y conectada a un backend en producción.

---

## 🌍 Demo en Producción

Frontend:

https://playful-tiramisu-85452d.netlify.app

Backend API:

https://carapp-backend-34v5.onrender.com/docs

---

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)
- Fetch API
- Netlify (deploy)

---

## 🏗 Arquitectura


Usuario
↓
Netlify (Frontend)
↓
Render (FastAPI Backend)
↓
PostgreSQL (Cloud)


El frontend consume una API REST versionada:


/api/v1


---

## ⚙️ Funcionalidades

- Crear registros de vehículos
- Listar registros
- Editar registros
- Eliminar registros
- Mensajes dinámicos de éxito/error
- Conexión a API en producción
- CORS configurado correctamente

---

## 📂 Estructura del Proyecto


frontend/
│
├── index.html
├── style.css
├── script.js
└── assets/


---

## 🔗 Endpoints Consumidos


GET /api/v1/cars
POST /api/v1/cars
PUT /api/v1/cars/{id}
DELETE /api/v1/cars/{id}


---

## 🚀 Deploy

El proyecto se despliega automáticamente desde GitHub hacia Netlify.

Cada push a la rama `main` genera un nuevo deploy.

---

## 🔗 Repositorio del Backend

Código del backend disponible en:

https://github.com/AndFeRodriguezB/CarApp-Backend.git

---

## 👨‍💻 Autor

Proyecto desarrollado como aplicación Full Stack profesional para portafolio.