## initial

copy project-presentation:

git checkout 2afe42695153364168c34d0976e8f96300358326
![](_md_img/flow_images/flow%202025-01-15-19-56-32.png)

--=======================

corepack enable
yarn config set nodeLinker node-modules
yarn set version stable

--=======================
git add -A
git commit -m "setup"
git push

## initial

change images location and add base path to scss:

**all images and statics in  public folder**

1) jsx
```
      <img
        className="Person__photo"
        src={`${import.meta.env.BASE_URL}${person.photo}`}
        alt="person photo"
      />
```
1) scss

vite.config.js
```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/projects-presentation/',
  server: {
    open: '/projects-presentation/', // Автоматически открывать правильный URL
  },  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        $base-path: '/projects-presentation/';
        @use '/src/styles/variables.scss' as *;`,
      },
    },
  },
});
```

```
    &::before {
      content: '';
      position: absolute;
      top: 0.5rem;
      left: 2rem;
      width: 6rem;
      height: 6rem;
      background: $Header-color url('#{$base-path}images/logo_mini.webp')
        no-repeat;
      background-position: center;
      border-radius: 50%;
    }
```

======================
ico files
https://icon-icons.com/search/icons/?filtro=car&page=3

edit pictures
https://www.photopea.com/

========================
compress images

https://tinypng.com/

=========================


