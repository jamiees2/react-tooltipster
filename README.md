# react-tooltipster

`react-tooltipster` requires peer dependencies `jquery`, `react`, `react-dom` and `tooltipster`.

If you haven't already, install with
```
npm install jquery react react-dom tooltipster
```
or
```
yarn add jquery react react-dom tooltipster
```

Include the `tooltipster` CSS in your project, `tooltipster/dist/css/tooltipster.bundle.css`.
With css-loader, `import 'tooltipster/dist/css/tooltipster.bundle.css'`

`react-tooltipster` supports both regular tooltips and SVG tooltips. If you are using both, simply import `react-tooltipster`.
If you are not using SVG tooltips, you can avoid the extra libraries that are included by importing `react-tooltipster/dist/Tooltipster` instead, and tree shaking should remove the extra dependencies.

License: MIT