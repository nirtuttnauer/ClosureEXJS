# ClosureEXJS

A small vanilla JavaScript exercise using closures to wrap form validation and
popup interactions. Webpack bundles the JavaScript, CSS, and HTML.

## Run locally

Install Node.js and npm, then from the repository root:

```sh
npm ci
npm start
```

The development server opens the app in your browser. Stop it with Ctrl+C.
To avoid opening a browser automatically, run:

```sh
npm start -- --no-open
```

## Production build

```sh
npm run build
```

The generated site is written to `build/` (including `index.html`, JavaScript,
and CSS). Serve that directory with a static web server, for example:

```sh
python3 -m http.server 8000 --directory build
```

Open `http://localhost:8000` in a browser. Python is only needed for this optional
preview command, not for building the project.

## Project layout

- `src/index.js`: wires the form and popup together and fetches a GitHub avatar.
- `src/App/Forms.js`: validates fields and resets form values.
- `src/App/Popup.js`: opens and closes the popup.
- `src/template.html` and `src/style.css`: page markup and styling.
- `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js`: build configuration.

## Limitations and verification

This is a client-side exercise, not an authentication system: the success message
does not sign anyone in or persist form submissions. Loading the avatar requires
network access to the GitHub API. The current code logs form values to the browser
console, so use sample data rather than sensitive personal information.

There are no automated test or lint scripts configured. `npm run build` is the
available compilation check; it does not verify browser interactions. The existing
build can emit Webpack `[hash]` deprecation and outdated Browserslist-data warnings.
Dependency modernization is outside this documentation change.
