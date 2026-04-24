# Venuelle System

A wedding RSVP and seat finder website for the Sef and Nelle wedding celebration.

## Overview

Guest-facing web application that allows wedding guests to search for their table assignments by name. Features a soft pastel wedding invitation design with QR code generation.

## Features

- **Guest Search** - Real-time search with autocomplete dropdown
- **Table Lookup** - View table details and seated guests
- **QR Codes** - Generate printable QR codes for table cards
- **Table Arrangement Image** - Zoomable venue seating chart
- **Soft Pastel Theme** - Cream/ivory with blush and sage accents

## Tech Stack

- **Framework**: Vite 5 + React 18
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router DOM 6.20
- **QR Codes**: qrcode.react 3.1.0
- **Analytics**: Vercel Analytics
- **Build Target**: Static deployment (Vercel)

## Project Structure

```
src/
├── components/
│   ├── Footer.jsx         - Footer with floral accent
│   ├── GuestResult.jsx    - Individual guest search result card
│   ├── Header.jsx         - Minimal header
│   ├── Hero.jsx           - Invitation-style welcome
│   ├── Lightbox.jsx       - Modal image viewer
│   ├── PrintQR.jsx       - QR code printer page
│   ├── QRCodeSection.jsx - QR code display component
│   ├── SearchBar.jsx     - Search input with icon
│   ├── TableCard.jsx     - Table summary card
│   ├── TableDetail.jsx    - Table guest list page
│   └── TableList.jsx      - Table grid/list view
├── data/
│   └── guests.js         - Guest database (170 entries, 23 tables)
├── App.jsx              - Main app with routing
├── main.jsx             - React entry point
└── index.css            - Tailwind directives & fonts
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home - search & table arrangement |
| `/seat-finder` | Same as home |
| `/table/:name` | Table detail view |
| `/print-qr` | QR code printer page |

## Tables

23 guest tables (ONE through TWENTY-THREE) with 170 total guests from the seating arrangement.

## Design

- **Background**: Cream-50 (#FFFDF8), Cream-100 (#F7F3EE)
- **Primary Text**: Primary (#4B3A35)
- **Secondary Text**: Secondary (#7A625A)
- **Accents**: Blush (#E8B7A8), Sage (#A9BFA3), Taupe (#D6C6B8), Warm Gold (#B88A5A)
- **Typography**: Cormorant Garamond (serif), DM Sans (sans-serif)

## Setup

```bash
npm install
npm run dev      # Development server
npm run build   # Production build
npm run preview # Preview production build
```

## Deployment

Configured for Vercel with static adapter. Auto-deploys from main branch.