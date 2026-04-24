└── 📁src
    ├── 📁components
    │   ├── 📁ui              # Shadcn puro (button, input, sheet, etc.)
    │   │   ├── button.tsx
    │   │   ├── input.tsx
    │   │   ├── sheet.tsx
    │   │   ├── sonner.tsx
    │   │   └── textarea.tsx
    │   │
    │   ├── 📁layout          # Componentes de estructura de página
    │   │   ├── Sidebar.tsx       # Navegación lateral (React island)
    │   │   ├── MobileDrawer.tsx  # Drawer/bottom sheet móvil (React island)
    │   │   └── Footer.astro      # Footer estático (Astro)
    │   │
    │   ├── 📁sections        # Secciones de la landing (islas React)
    │   │   ├── Hero.tsx
    │   │   ├── Projects.tsx
    │   │   ├── About.tsx
    │   │   └── Contact.tsx
    │   │
    │   └── 📁shared          # Componentes reutilizables entre secciones
    │       ├── Hexagon.tsx       # Hexágono del hive stack
    │       ├── ProjectCard.tsx   # Tarjeta de proyecto
    │       └── TechBadge.tsx     # Badge de tecnología
    │
    ├── 📁hooks
    │   └── useSidebar.ts       # Estado del sidebar (expandido/colapsado)
    │
    ├── 📁layouts
    │   └── Layout.astro        # Layout principal: HTML, fonts, meta, estructura base
    │
    ├── 📁lib
    │   ├── utils.ts            # cn() y helpers de Shadcn
    │   └── validations.ts      # Esquemas Zod (contacto, etc.)
    │
    ├── 📁pages
    │   ├── index.astro         # Landing page (compone sections)
    │   └── api
    │       └── contact.ts      # API Route para Resend
    │
    └── 📁styles
        └── global.css          # Variables CSS, tipografías, utilidades