# smart-adviser-site

The website for [smartadviser.co.uk](https://www.smartadviser.co.uk).

## Development

### Install

```bash
npm i
```

### Run locally

The form within the application relies on the `FORM_ENDPOINT` environment
variable to link to
[99inbound](https://docs.99inbound.com/form-endpoints/installation/).

```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```

You can also try out how it will work when deployed to Firebase with:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run start:fb
```

Which will run the following commands:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
firebase serve --only hosting
```

### Test

```bash
NODE_OPTIONS=--openssl-legacy-provider npm test
```

### Build

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

### Deploy

Deploy with:

```bash
git push
```
