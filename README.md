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
npm start
```

You can also try out how it will work when deployed to Firebase with:

```bash
npm run start:fb
```

Which will run the following commands:

```bash
npm run build
firebase serve --only hosting
```

### Test

```bash
npm test
```

### Build

```bash
npm run build
```

### Deploy

Deploy with:

```bash
git push
```
