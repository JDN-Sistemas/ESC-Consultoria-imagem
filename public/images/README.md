# Imagens

## Originais (enviados pela cliente)

- `lucia.JPEG` — retrato 640×804 (4:5). Usado no **Hero**.
- `Lu-logo.jpg` — peça vertical 3375×6000 (foto + faixa roxa + logo circular).
  Não é usada direto na página; serve de **fonte** para os dois arquivos abaixo.

## Derivados

- `lucilene-sobre.jpg` — 1200×1500 (4:5), recorte só da área fotográfica de
  `Lu-logo.jpg` (sem a faixa roxa). Usado na seção **Sobre**.
- `esc-logo.png` — 600×600, logo circular recortado de `Lu-logo.jpg` com fundo
  transparente. Usado no **cabeçalho** e no **rodapé**; também é a origem do
  favicon em `src/app/icon.png`.

Para regerar os derivados após trocar `Lu-logo.jpg`, ajuste as coordenadas do
recorte e rode o script com o `sharp` que já vem com o Next.

## Trocar uma foto

Basta apontar o novo caminho no componente `Portrait`:

```tsx
<Portrait src="/images/nova-foto.jpg" alt="..." priority />
```

O `Portrait` recorta em 4:5 com `object-cover`, então prefira imagens em pé.
