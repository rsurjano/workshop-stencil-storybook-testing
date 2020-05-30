# 4-6 editorconfig

Por defecto muchos IDEs ya tienen implementado el soporte a EditorConfig. Para VSCode se ha instalado la extension indicada [aqui](../0-configuracion/0-configuracion-del-ambiente.md)

## Configuracion

> .editorconfig

```shell
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true
end_of_line = auto

[*.md]
max_line_length = 100
trim_trailing_whitespace = false
```

Ahora continua con [4-7 stylelint](4-7-stylelint.md)
