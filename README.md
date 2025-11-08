# ⚡ Zoneless Angular + Signals Demo

A simple Angular 18+ application demonstrating **Zoneless Change Detection** and **Signals-based reactivity** using a live public API (JSONPlaceholder).  
Built with the latest Angular features like `signal()`, `computed()`, and `provideZonelessChangeDetection()` — no Zone.js, no RxJS boilerplate!

---

## 🧠 What Is Zoneless Angular?

Traditionally, Angular used **Zone.js** to track async operations and trigger change detection automatically.  
While convenient, this caused performance overhead and unpredictability in large apps.

**Zoneless Angular** eliminates Zone.js — giving developers full control over reactivity using **Signals** and **fine-grained change detection**.

**Benefits:**
- ⚡ Faster rendering — only updates affected components  
- 🧩 Predictable and explicit reactivity  
- 💡 No hidden async triggers  
- 🌐 Works great with Web Workers, SSR, and microfrontends  

---

## 🧩 Features

- ✅ Built using **Angular 18+**
- ✅ Uses **HttpClient with Signals**
- ✅ Zoneless change detection (`provideZonelessChangeDetection`)
- ✅ Reactive data fetching and reload
- ✅ Error and loading state management
- ✅ Search and filter functionality with computed signals
- ✅ Fully standalone components (no NgModules)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| Angular 18+ | Frontend framework |
| Signals API | Reactive state management |
| HttpClient | REST API calls |
| JSONPlaceholder | Fake REST API |
| CSS Flex/Grid | Styling layout |

---

## 🧾 Project Structure

```

src/
├── app/
│   ├── posts.service.ts     # API service using signals
│   ├── app.component.ts     # Root component using computed() + signals
│   ├── app.component.html   # UI with search and reload controls
│   └── app.component.css    # Styling for the UI
└── main.ts                  # Bootstrap with provideZonelessChangeDetection()

````

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/zoneless-angular-demo.git
cd zoneless-angular-demo
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
ng serve
```

Then open **[http://localhost:4200/](http://localhost:4200/)** in your browser.

---

## 🌐 Live Demo

* **StackBlitz:** [https://stackblitz.com/github/your-username/zoneless-angular-demo](https://surl.lt/gbswiy)
* **LinkedIn Post:** [https://www.linkedin.com/in/swapnilmuley](https://surli.cc/vieorl)

---

## 🧑‍💻 Author

**Swapnil Muley**
Staff Engineer @ Alitimetrik Pvt. Ltd.
💬 Passionate about Angular, TypeScript, and modern frontend architecture.
💼 [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7392868918706520064/)

---

## 🖼️ Credits

* Demo API: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
* Framework: [Angular](https://angular.dev)

---

## 🏷️ Tags

`Angular` `Signals` `Zoneless` `HttpClient` `Frontend` `WebPerformance` `ReactiveProgramming`

