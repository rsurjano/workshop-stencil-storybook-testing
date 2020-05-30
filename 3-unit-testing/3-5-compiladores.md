# 3-5 Compiladores

Para compilar un unico test usando VSCode podemos configurarlo de la siguiente manera, creandose el siguiente archivo

> .vscode/launch.json

```json
{
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "E2E Test archivo actual",
      "cwd": "${workspaceFolder}",
      "program": "${workspaceFolder}/node_modules/.bin/stencil",
      "args": ["test", "--e2e", "${relativeFile}"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Spec Test archivo actual",
      "cwd": "${workspaceFolder}",
      "program": "${workspaceFolder}/node_modules/.bin/stencil",
      "args": ["test", "--spec", "${relativeFile}"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true
    }
  ]
}
```

Ahora continua con [3-6 reportes](3-6-reportes.md)
