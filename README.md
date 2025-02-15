### 🛠️ **Prueba Técnica en React**  

Este proyecto es una **prueba técnica en React** en la que he utilizado diversas tecnologías y librerías para lograr un desarrollo rápido, eficiente y escalable.  

---

## 🚀 **Stack Tecnológico**
- **⚛️ React ** - La base del proyecto.
- **💨 Tailwind CSS** - Para estilizar de manera rápida y eficiente.
- **🎨 Lucide-react** - Íconos modernos y bien diseñados.
- **🛒 Zustand** - Manejo de estado para la lógica del carrito.
- **🌍 Wouter** - Enrutador ultraligero para mejorar el rendimiento.
- **📄 React Hook Form** - Para formularios optimizados.
- **⚡ Vite + TypeScript** - Mejor rendimiento y tipado seguro.

---

## 🏗️ **Decisiones Técnicas**
### ✅ **Manejo del Estado con Zustand**
He preferido usar **Zustand** en lugar de Redux o Context API por varias razones:  
- Es **más liviano** y **más moderno** que Redux.  
- Su API es **más sencilla y menos verbosa**.  
- Permite **persistencia y middlewares de manera fácil**.  
- **Mejor escalabilidad** → La lógica del carrito se puede reutilizar fácilmente en **React Native** si fuese necesario.  

### ✅ **Enrutamiento con Wouter**
Elegí **Wouter** en vez de React Router porque:  
- Es **extremadamente ligero** (menos de 2 KB).  
- Usa un **sistema de rutas declarativas** más intuitivo.  
- **Soporte de Hooks** → Perfecto para aplicaciones modernas.  

### ✅ **Formularios con React Hook Form**
Para manejar formularios, **React Hook Form** es la mejor opción:  
- **Rápido y eficiente** → No re-renderiza innecesariamente.  
- **Validación integrada** → Sin necesidad de usar librerías extra.  
- **Excelente integración con TypeScript**.  

### ✅ **Vite + TypeScript**
Este proyecto usa **Vite** en vez de Create React App porque:  
- **Compila más rápido** y tiene **mejor performance**.  
- **Menos configuración** y listo para producción.  
- **TypeScript** asegura consistencia y previene errores.

---

## 🎯 **Organización del Código**
He intentado mantener el código **modular y reutilizable**:
- Componentes como **`CartButton`** y **`Rating`** son reutilizables en todo el proyecto.  
- El cálculo del **total del carrito** está separado en un **utilitario (`cartUtils.ts`)**.  
- Se evita la repetición de código mediante **hooks y funciones reutilizables**.  

---

## 🎉 **Conclusión**
Este proyecto ha sido desarrollado con la intención de ser **rápido, escalable y reutilizable**. He priorizado herramientas **modernas y eficientes**, asegurando que la base del código sea sólida para su posible expansión en el futuro.
