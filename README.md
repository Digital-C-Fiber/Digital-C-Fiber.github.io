# Digital C-Fiber Collaborative Group — Website

Source code for the [Digital C-Fiber group website](https://digital-c-fiber.github.io), hosted via GitHub Pages.

## About

The Digital C-Fiber Collaborative Group develops computational tools, open-source software, and FAIR data standards for the analysis of C-fiber microneurography recordings in humans. Our three core research directions are:

- **FAIR Microneurography** — metadata standards (odML-Tables), open data pipelines, NFDI4Health Local Data Hub integration
- **Simulational Modelling** — biophysical models of unmyelinated C-fiber axons and DRG somas
- **Data Analysis** — supervised spike sorting algorithms and open analysis frameworks

## Pages

| File | Description |
|---|---|
| `index.html` | Landing page |
| `publications.html` | Peer-reviewed publications and preprints |
| `repositories.html` | Open-source repositories |
| `style.css` | Shared stylesheet |
| `main.js` | Shared header/footer loader and theme toggle |

## Development

This is a static site — no build step required. Open any `.html` file directly in a browser, or serve locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

Website content © Digital C-Fiber Collaborative Group, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
