### 🛠️ **React Exercise**

This project is a **React exercise** completed in around 3 hours, where I utilized various technologies and libraries to achieve rapid, efficient, and scalable development.

---

## 🚀 **Technology Stack**
- **⚛️ React** - The foundation of the project.
- **💨 Tailwind CSS** - For fast and efficient styling.
- **🎨 Lucide-react** - Modern and well-designed icons.
- **🛒 Zustand** - State management for cart logic.
- **🌍 Wouter** - Ultra-light router to enhance performance.
- **📄 React Hook Form** - For optimized forms.
- **⚡ Vite + TypeScript** - For better performance and type safety.

---

## 🏗️ **Technical Decisions**
### ✅ **State Management with Zustand**
I chose **Zustand** over Redux or Context API for several reasons:
- It is **lighter** and **more modern** than Redux.
- Its API is **simpler and less verbose**.
- It easily supports **persistence and middleware**.
- **Better scalability** → The cart logic can be easily reused in **React Native** if needed.

### ✅ **Routing with Wouter**
I opted for **Wouter** instead of React Router because:
- It is **extremely lightweight** (less than 2 KB).
- It uses a more intuitive **declarative routing system**.
- **Hook support** → Perfect for modern applications.

### ✅ **Forms with React Hook Form**
For handling forms, **React Hook Form** is the best choice:
- **Fast and efficient** → Avoids unnecessary re-renders.
- **Built-in validation** → No need for extra libraries.
- **Excellent integration with TypeScript**.

### ✅ **Vite + TypeScript**
This project uses **Vite** instead of Create React App because:
- It **builds faster** and has **better performance**.
- **Less configuration** and production-ready out-of-the-box.
- **TypeScript** ensures consistency and prevents errors.

---

## 🎯 **Code Organization**
I have aimed to keep the code **modular and reusable**:
- Components like **`CartButton`** and **`Rating`** are reusable throughout the project.
- The cart **total calculation** is separated into a utility (`cartUtils.ts`).
- Code duplication is minimized through **custom hooks and reusable functions**.

---

## 🎉 **Conclusion**
This project was developed with the intention of being **fast, scalable, and reusable**. I prioritized **modern and efficient** tools, ensuring that the codebase is solid enough for potential future expansion.

> Note: Unit tests are not included as they were not required for this exercise.