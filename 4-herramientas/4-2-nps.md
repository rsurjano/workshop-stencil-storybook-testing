# 4-2 nps

NPS nos permite migrar los npm scripts del package.json a un archivo externo y mantenible

> package.json

```json
{
  "devDependencies": {
    "nps": "5.9.12",
    "nps-utils": "1.7.0"
  }
}
```

_ejemplo:_

> package-scripts.js

```javascript
module.exports = {
  scripts: {
    default: 'echo "This runs on `nps`"', // nps
    // you can assign a script property to a string
    simple: 'echo "esto es facil"', // nps simple
    test: {
      default: {
        script: "jest", // nps test
        description: "Run tests with jest", // se puede agregar una descripcion
      },
      otherStuff: {
        // this one can be executed two different ways:
        // 1. nps test.otherStuff
        // 2. nps test.other-stuff
        script: 'echo "testing other things"',
        description: "this is a handy description",
      },
    },
    // this one can be executed a few different ways:
    // 1. nps k
    // 2. nps kebab-case
    // 3. nps kebabCase
    "kebab-case": 'echo "kebab-case"',
    series: "nps simple,test,kebabCase", // runs these other scripts in series
  },
};
```

Ahora continua con [4-3 eslint](4-3-eslint.md)
