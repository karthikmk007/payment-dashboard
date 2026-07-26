# Payment Dashboard

A small, dependency-free front-end dashboard that summarizes sample payment records.

## What it demonstrates

- semantic HTML structure;
- responsive dashboard styling with CSS;
- DOM rendering from JavaScript data;
- calculation of paid revenue and transaction totals;
- tabular display of paid, pending, and failed payments.

## Run locally

No build tools or package installation are required.

```bash
git clone https://github.com/karthikmk007/payment-dashboard.git
cd payment-dashboard
```

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```text
.
├── index.html
├── script.js
└── style.css
```

## Limitations

The records are hard-coded sample data. This project does not process real payments, authenticate users, persist data, or connect to a payment provider.

## Possible next steps

Add filtering and sorting, load records from an API, improve mobile behavior, add automated tests, and deploy a live demo.
