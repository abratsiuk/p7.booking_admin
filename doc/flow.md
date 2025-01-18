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


-----
yarn stylelint  
yarn lint

yarn stylelint  --fix
yarn lint --fix
-------------

yarn cache clean
//delete node_modules
yarn

```
PS D:\R\p7.booking_admin> yarn
➤ YN0000: · Yarn 4.6.0
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed
➤ YN0000: ┌ Post-resolution validation
➤ YN0060: │ eslint is listed by your project with version 9.18.0 (pc2569), which doesn't satisfy what eslint-config-react-app and other dependencies request (^8.57.0).
➤ YN0002: │ p7.booking_admin@workspace:. doesn't provide postcss (p2f113), requested by postcss-scss and other dependencies.
➤ YN0086: │ Some peer dependencies are incorrectly met by your project; run yarn explain peer-requirements <hash> for details, where <hash> is the six-letter p-prefixed code.
➤ YN0086: │ Some peer dependencies are incorrectly met by dependencies; run yarn explain peer-requirements for details. 
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 626 packages were added to the project (+ 162.1 MiB).
➤ YN0000: └ Completed in 7s 735ms
➤ YN0000: ┌ Link step
➤ YN0007: │ @parcel/watcher@npm:2.5.0 must be built because it never has been before or the last one failed
➤ YN0007: │ esbuild@npm:0.24.2 must be built because it never has been before or the last one failed
➤ YN0000: └ Completed in 1m 2s
➤ YN0000: · Done with warnings in 1m 10s
PS D:\R\p7.booking_admin> 
```

```
yarn add eslint-config-react-app eslint@^8.0.0 -D
yarn add postcss -D


```
PS D:\R\p7.booking_admin> yarn explain peer-requirements
pbc965 → ✓ @babel/core@npm:7.26.0 provides @babel/core@npm:7.26.0 to @babel/helper-module-transforms@npm:7.26.0 [6f14d]
p3ad23 → ✓ @babel/core@npm:7.26.0 doesn't provide @types/babel__core to @babel/helper-module-transforms@npm:7.26.0 [6f14d]
p7b1f2 → ✓ @babel/core@npm:7.26.0 doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p165d4 → ✓ @babel/core@npm:7.26.0 doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
p7ad7b → ✓ @babel/helper-define-polyfill-provider@npm:0.6.3 [ff20e] doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p3d34b → ✓ @babel/helper-define-polyfill-provider@npm:0.6.3 [ff20e] doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
pfc519 → ✓ @babel/traverse@npm:7.26.5 doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p58b7c → ✓ @babel/traverse@npm:7.26.5 doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
p8a92b → ✓ @eslint/eslintrc@npm:2.1.4 doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p7c7f6 → ✓ @eslint/eslintrc@npm:2.1.4 doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
p34f03 → ✓ @humanwhocodes/config-array@npm:0.13.0 doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
pddaba → ✓ @humanwhocodes/config-array@npm:0.13.0 doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
p23de4 → ✓ @typescript-eslint/eslint-plugin@npm:5.62.0 [f1f30] doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p73350 → ✓ @typescript-eslint/eslint-plugin@npm:5.62.0 [f1f30] doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
p9ec0c → ✓ @typescript-eslint/parser@npm:8.20.0 [e2ab7] doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p2fb6d → ✓ @typescript-eslint/parser@npm:8.20.0 [e2ab7] doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]       
p1d586 → ✓ @typescript-eslint/parser@npm:5.62.0 [f1f30] doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p2f116 → ✓ @typescript-eslint/parser@npm:5.62.0 [f1f30] doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]       
pa8b0d → ✓ @typescript-eslint/type-utils@npm:5.62.0 [07aed] doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
pdbed8 → ✓ @typescript-eslint/type-utils@npm:5.62.0 [07aed] doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]   
p101b4 → ✓ @typescript-eslint/type-utils@npm:8.20.0 [89aba] doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
pf1386 → ✓ @typescript-eslint/type-utils@npm:8.20.0 [89aba] doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]   
p64ce5 → ✓ @typescript-eslint/typescript-estree@npm:5.62.0 [87925] doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p682b5 → ✓ @typescript-eslint/typescript-estree@npm:5.62.0 [87925] doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
p86fc6 → ✓ @typescript-eslint/typescript-estree@npm:8.20.0 [9de7c] doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p090a3 → ✓ @typescript-eslint/typescript-estree@npm:8.20.0 [9de7c] doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
p2cb06 → ✓ @typescript-eslint/typescript-estree@npm:5.62.0 [bed35] doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p3c2d6 → ✓ @typescript-eslint/typescript-estree@npm:5.62.0 [bed35] doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
p4a358 → ✓ @typescript-eslint/utils@npm:5.62.0 [07aed] doesn't provide @types/typescript to @typescript-eslint/typescript-estree@npm:5.62.0 [bed35] and 1 other dependency
p27044 → ✘ @typescript-eslint/utils@npm:5.62.0 [07aed] doesn't provide typescript to @typescript-eslint/typescript-estree@npm:5.62.0 [bed35] and 1 other dependency
p81a62 → ✓ @vitejs/plugin-react@npm:4.3.4 [e2ab7] provides @babel/core@npm:7.26.0 to @babel/plugin-transform-react-jsx-self@npm:7.25.9 [343cc] and 1 other dependency
p273d2 → ✓ @vitejs/plugin-react@npm:4.3.4 [e2ab7] provides @types/babel__core@npm:7.20.5 to @babel/plugin-transform-react-jsx-self@npm:7.25.9 [343cc] and 1 other dependency
p8ad28 → ✓ babel-preset-react-app@npm:10.0.1 provides @babel/core@npm:7.26.0 to @babel/plugin-proposal-class-properties@npm:7.18.6 [a9a19] and 93 other dependencies
p3668d → ✓ babel-preset-react-app@npm:10.0.1 doesn't provide @types/babel__core to @babel/plugin-proposal-class-properties@npm:7.18.6 [a9a19] and 93 other dependencies
p72758 → ✓ browserslist@npm:4.24.4 doesn't provide @types/browserslist to update-browserslist-db@npm:1.1.2 [2fdeb]      
pa3e7e → ✓ browserslist@npm:4.24.4 provides browserslist@npm:4.24.4 to update-browserslist-db@npm:1.1.2 [2fdeb]
p17828 → ✓ eslint-config-react-app@npm:7.0.1 [e2ab7] provides @babel/core@npm:7.26.0 to @babel/eslint-parser@npm:7.26.5 [f1f30]
pe309a → ✘ eslint-config-react-app@npm:7.0.1 [e2ab7] doesn't provide @babel/plugin-syntax-flow to eslint-plugin-flowtype@npm:8.0.3 [f1f30]
p16dc8 → ✘ eslint-config-react-app@npm:7.0.1 [e2ab7] doesn't provide @babel/plugin-transform-react-jsx to eslint-plugin-flowtype@npm:8.0.3 [f1f30]
p32ed2 → ✓ eslint-config-react-app@npm:7.0.1 [e2ab7] doesn't provide @types/babel__core to @babel/eslint-parser@npm:7.26.5 [f1f30]
p22ad7 → ✓ eslint-config-react-app@npm:7.0.1 [e2ab7] doesn't provide @types/babel__plugin-syntax-flow to eslint-plugin-flowtype@npm:8.0.3 [f1f30]
pd5edd → ✓ eslint-config-react-app@npm:7.0.1 [e2ab7] doesn't provide @types/babel__plugin-transform-react-jsx to eslint-plugin-flowtype@npm:8.0.3 [f1f30]
pba92e → ✓ eslint-config-react-app@npm:7.0.1 [e2ab7] doesn't provide @types/jest to eslint-plugin-jest@npm:25.7.0 [f1f30]
p9f70b → ✓ eslint-config-react-app@npm:7.0.1 [e2ab7] doesn't provide @types/typescript-eslint__eslint-plugin to eslint-plugin-jest@npm:25.7.0 [f1f30]
pd2f52 → ✓ eslint-config-react-app@npm:7.0.1 [e2ab7] doesn't provide @types/typescript-eslint__parser to @typescript-eslint/eslint-plugin@npm:5.62.0 [f1f30] and 2 other dependencies
p7eee7 → ✓ eslint-config-react-app@npm:7.0.1 [e2ab7] provides @typescript-eslint/eslint-plugin@npm:5.62.0 [f1f30] to eslint-plugin-jest@npm:25.7.0 [f1f30]
p1b509 → ✓ eslint-config-react-app@npm:7.0.1 [e2ab7] provides @typescript-eslint/parser@npm:5.62.0 [f1f30] to @typescript-eslint/eslint-plugin@npm:5.62.0 [f1f30] and 2 other dependencies
p031df → ✓ eslint-config-react-app@npm:7.0.1 [e2ab7] doesn't provide jest to eslint-plugin-jest@npm:25.7.0 [f1f30]      
pb82e1 → ✓ eslint-import-resolver-node@npm:0.3.9 doesn't provide @types/supports-color to debug@npm:3.2.7 [2a426]       
p49645 → ✓ eslint-import-resolver-node@npm:0.3.9 doesn't provide supports-color to debug@npm:3.2.7 [2a426]
p259ba → ✓ eslint-module-utils@npm:2.12.0 [cedbe] doesn't provide @types/supports-color to debug@npm:3.2.7 [2a426]      
p96450 → ✓ eslint-module-utils@npm:2.12.0 [cedbe] doesn't provide supports-color to debug@npm:3.2.7 [2a426]
p402d4 → ✓ eslint-plugin-import@npm:2.31.0 [f1f30] doesn't provide @types/eslint-import-resolver-node to eslint-module-utils@npm:2.12.0 [cedbe]
p492cf → ✓ eslint-plugin-import@npm:2.31.0 [f1f30] doesn't provide @types/eslint-import-resolver-typescript to eslint-module-utils@npm:2.12.0 [cedbe]
p90103 → ✓ eslint-plugin-import@npm:2.31.0 [f1f30] doesn't provide @types/eslint-import-resolver-webpack to eslint-module-utils@npm:2.12.0 [cedbe]
p6022b → ✓ eslint-plugin-import@npm:2.31.0 [f1f30] doesn't provide @types/supports-color to debug@npm:3.2.7 [2a426]     
p30ec5 → ✓ eslint-plugin-import@npm:2.31.0 [f1f30] provides eslint-import-resolver-node@npm:0.3.9 to eslint-module-utils@npm:2.12.0 [cedbe]
pe5e52 → ✓ eslint-plugin-import@npm:2.31.0 [f1f30] doesn't provide eslint-import-resolver-typescript to eslint-module-utils@npm:2.12.0 [cedbe]
pd09d0 → ✓ eslint-plugin-import@npm:2.31.0 [f1f30] doesn't provide eslint-import-resolver-webpack to eslint-module-utils@npm:2.12.0 [cedbe]
p212fb → ✓ eslint-plugin-import@npm:2.31.0 [f1f30] doesn't provide supports-color to debug@npm:3.2.7 [2a426]
p86400 → ✓ eslint@npm:8.57.1 doesn't provide @types/eslint to @eslint-community/eslint-utils@npm:4.4.1 [dd202]
p56222 → ✓ eslint@npm:8.57.1 doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
pe1fd0 → ✓ eslint@npm:8.57.1 provides eslint@npm:8.57.1 to @eslint-community/eslint-utils@npm:4.4.1 [dd202]
p1fa80 → ✓ eslint@npm:8.57.1 doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
p1191b → ✓ espree@npm:9.6.1 doesn't provide @types/acorn to acorn-jsx@npm:5.3.2 [a5072]
p87b65 → ✓ espree@npm:9.6.1 provides acorn@npm:8.14.0 to acorn-jsx@npm:5.3.2 [a5072]
p7a8d1 → ✓ http-proxy-agent@npm:7.0.2 doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p26435 → ✓ http-proxy-agent@npm:7.0.2 doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
p58803 → ✓ https-proxy-agent@npm:7.0.6 doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
p48521 → ✓ https-proxy-agent@npm:7.0.6 doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
p1c0df → ✓ p7.booking_admin@workspace:. doesn't provide @types/eslint to @typescript-eslint/eslint-plugin@npm:8.20.0 [e2ab7] and 24 other dependencies
p500c1 → ✓ p7.booking_admin@workspace:. doesn't provide @types/eslint-config-prettier to eslint-plugin-prettier@npm:5.2.2 [e2ab7]
p3b83f → ✓ p7.booking_admin@workspace:. doesn't provide @types/jiti to vite@npm:6.0.7 [e2ab7]
p3c126 → ✓ p7.booking_admin@workspace:. doesn't provide @types/less to vite@npm:6.0.7 [e2ab7]
p0ee12 → ✓ p7.booking_admin@workspace:. doesn't provide @types/lightningcss to vite@npm:6.0.7 [e2ab7]
p99518 → ✓ p7.booking_admin@workspace:. doesn't provide @types/node to vite@npm:6.0.7 [e2ab7]
p3e481 → ✓ p7.booking_admin@workspace:. doesn't provide @types/postcss to postcss-scss@npm:4.0.9 [e2ab7] and 2 other dependencies
p6bf03 → ✓ p7.booking_admin@workspace:. doesn't provide @types/prettier to eslint-plugin-prettier@npm:5.2.2 [e2ab7]     
p7473d → ✓ p7.booking_admin@workspace:. provides @types/react@npm:18.3.18 to @types/react-dom@npm:18.3.5 [e2ab7] and 3 other dependencies
p22f90 → ✓ p7.booking_admin@workspace:. provides @types/react-dom@npm:18.3.5 [e2ab7] to react-router-dom@npm:6.28.1 [e2ab7]
pc0b4f → ✓ p7.booking_admin@workspace:. doesn't provide @types/sass to vite@npm:6.0.7 [e2ab7]
pd102d → ✓ p7.booking_admin@workspace:. doesn't provide @types/sass-embedded to vite@npm:6.0.7 [e2ab7]
p152cc → ✓ p7.booking_admin@workspace:. doesn't provide @types/stylelint to stylelint-config-standard-scss@npm:14.0.0 [e2ab7] and 5 other dependencies
p35660 → ✓ p7.booking_admin@workspace:. doesn't provide @types/stylus to vite@npm:6.0.7 [e2ab7]
pcf0e4 → ✓ p7.booking_admin@workspace:. doesn't provide @types/sugarss to vite@npm:6.0.7 [e2ab7]
pe2ff9 → ✓ p7.booking_admin@workspace:. doesn't provide @types/terser to vite@npm:6.0.7 [e2ab7]
p46eba → ✓ p7.booking_admin@workspace:. doesn't provide @types/tsx to vite@npm:6.0.7 [e2ab7]
pcbdef → ✓ p7.booking_admin@workspace:. doesn't provide @types/typescript to @typescript-eslint/eslint-plugin@npm:8.20.0 [e2ab7] and 12 other dependencies
p18112 → ✓ p7.booking_admin@workspace:. doesn't provide @types/typescript-eslint__parser to @typescript-eslint/eslint-plugin@npm:8.20.0 [e2ab7]
p70c8f → ✓ p7.booking_admin@workspace:. doesn't provide @types/vite to @vitejs/plugin-react@npm:4.3.4 [e2ab7]
p48e58 → ✓ p7.booking_admin@workspace:. doesn't provide @types/yaml to vite@npm:6.0.7 [e2ab7]
p38a58 → ✓ p7.booking_admin@workspace:. provides @typescript-eslint/parser@npm:8.20.0 [e2ab7] to @typescript-eslint/eslint-plugin@npm:8.20.0 [e2ab7]
pc2569 → ✓ p7.booking_admin@workspace:. provides eslint@npm:8.57.1 to @typescript-eslint/eslint-plugin@npm:8.20.0 [e2ab7] and 24 other dependencies
pdfce8 → ✓ p7.booking_admin@workspace:. provides eslint-config-prettier@npm:10.0.1 [e2ab7] to eslint-plugin-prettier@npm:5.2.2 [e2ab7]
p890b4 → ✓ p7.booking_admin@workspace:. doesn't provide jiti to vite@npm:6.0.7 [e2ab7]
pc5a0f → ✓ p7.booking_admin@workspace:. doesn't provide less to vite@npm:6.0.7 [e2ab7]
pea133 → ✓ p7.booking_admin@workspace:. doesn't provide lightningcss to vite@npm:6.0.7 [e2ab7]
p2f113 → ✓ p7.booking_admin@workspace:. provides postcss@npm:8.5.1 to postcss-scss@npm:4.0.9 [e2ab7] and 2 other dependencies
p58e8d → ✓ p7.booking_admin@workspace:. provides prettier@npm:3.4.2 to eslint-plugin-prettier@npm:5.2.2 [e2ab7]
p0e4b4 → ✓ p7.booking_admin@workspace:. provides react@npm:18.3.1 to react-dom@npm:18.3.1 [e2ab7] and 2 other dependencies
p59a1e → ✓ p7.booking_admin@workspace:. provides react-dom@npm:18.3.1 [e2ab7] to react-router-dom@npm:6.28.1 [e2ab7]    
pcdc68 → ✓ p7.booking_admin@workspace:. provides sass@npm:1.83.4 to vite@npm:6.0.7 [e2ab7]
p952bb → ✓ p7.booking_admin@workspace:. doesn't provide sass-embedded to vite@npm:6.0.7 [e2ab7]
p23070 → ✓ p7.booking_admin@workspace:. provides stylelint@npm:16.13.2 to stylelint-config-standard-scss@npm:14.0.0 [e2ab7] and 5 other dependencies
p32a7f → ✓ p7.booking_admin@workspace:. doesn't provide stylus to vite@npm:6.0.7 [e2ab7]
pfca6d → ✓ p7.booking_admin@workspace:. doesn't provide sugarss to vite@npm:6.0.7 [e2ab7]
p3f874 → ✓ p7.booking_admin@workspace:. doesn't provide terser to vite@npm:6.0.7 [e2ab7]
pe549e → ✓ p7.booking_admin@workspace:. doesn't provide tsx to vite@npm:6.0.7 [e2ab7]
p0565e → ✓ p7.booking_admin@workspace:. provides typescript@patch:typescript@npm%3A5.6.3#optional!builtin<compat/typescript>::version=5.6.3&hash=8c6c40 to @typescript-eslint/eslint-plugin@npm:8.20.0 [e2ab7] and 12 other dependencies        
p95621 → ✓ p7.booking_admin@workspace:. provides vite@npm:6.0.7 [e2ab7] to @vitejs/plugin-react@npm:4.3.4 [e2ab7]       
p9bfcc → ✓ p7.booking_admin@workspace:. doesn't provide yaml to vite@npm:6.0.7 [e2ab7]
p535f7 → ✓ socks-proxy-agent@npm:8.0.5 doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
pdb30c → ✓ socks-proxy-agent@npm:8.0.5 doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
pefa83 → ✓ stylelint-selector-bem-pattern@npm:4.0.1 [e2ab7] doesn't provide @types/postcss to postcss-bem-linter@npm:4.0.1 [27945]
pc71d8 → ✓ stylelint-selector-bem-pattern@npm:4.0.1 [e2ab7] provides postcss@npm:8.5.1 to postcss-bem-linter@npm:4.0.1 [27945]
p86dce → ✓ stylelint@npm:16.13.2 provides @csstools/css-parser-algorithms@npm:3.0.4 [77107] to @csstools/media-query-list-parser@npm:4.0.2 [77107]
p5c061 → ✓ stylelint@npm:16.13.2 provides @csstools/css-tokenizer@npm:3.0.3 to @csstools/css-parser-algorithms@npm:3.0.4 [77107] and 1 other dependency
p48faa → ✓ stylelint@npm:16.13.2 doesn't provide @types/csstools__css-parser-algorithms to @csstools/media-query-list-parser@npm:4.0.2 [77107]
p910b5 → ✓ stylelint@npm:16.13.2 doesn't provide @types/csstools__css-tokenizer to @csstools/css-parser-algorithms@npm:3.0.4 [77107] and 1 other dependency
p5bec9 → ✓ stylelint@npm:16.13.2 doesn't provide @types/postcss to postcss-safe-parser@npm:7.0.1 [77107]
pb7664 → ✓ stylelint@npm:16.13.2 doesn't provide @types/postcss-selector-parser to @csstools/selector-specificity@npm:5.0.0 [77107]
pb0af0 → ✓ stylelint@npm:16.13.2 doesn't provide @types/supports-color to debug@npm:4.4.0 [1ff4b]
pa71e1 → ✓ stylelint@npm:16.13.2 doesn't provide @types/typescript to cosmiconfig@npm:9.0.0 [77107]
p621b3 → ✓ stylelint@npm:16.13.2 provides postcss@npm:8.5.1 to postcss-safe-parser@npm:7.0.1 [77107]
p7f655 → ✓ stylelint@npm:16.13.2 provides postcss-selector-parser@npm:7.0.0 to @csstools/selector-specificity@npm:5.0.0 [77107]
pcd3ea → ✓ stylelint@npm:16.13.2 doesn't provide supports-color to debug@npm:4.4.0 [1ff4b]
pd61a9 → ✓ stylelint@npm:16.13.2 doesn't provide typescript to cosmiconfig@npm:9.0.0 [77107]
p98266 → ✓ typescript-eslint@npm:8.20.0 [e2ab7] doesn't provide @types/typescript-eslint__parser to @typescript-eslint/eslint-plugin@npm:8.20.0 [e2ab7]
pa40d9 → ✓ typescript-eslint@npm:8.20.0 [e2ab7] provides @typescript-eslint/parser@npm:8.20.0 [e2ab7] to @typescript-eslint/eslint-plugin@npm:8.20.0 [e2ab7]
PS D:\R\p7.booking_admin> 
```

```


yarn add supports-color @types/supports-color -D
yarn add @types/eslint @types/prettier -D
yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
yarn add esbuild@latest -D

yarn add stylelint-scss -D

yarn add @types/node -D

yarn cache clean
Remove-Item -Recurse -Force node_modules, yarn.lock
yarn install

yarn lint
yarn lint --fix

yarn build


yarn explain peer-requirements

---------------
yarn install --check-cache
yarn install --immutable
yarn cache clean
yarn install



