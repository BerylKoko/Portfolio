import {mkdir,cp,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
for(const path of ['index.html','site.css','script.js','assets','work']) await cp(path,`dist/${path}`,{recursive:true});
console.log('Built static portfolio to dist/');
