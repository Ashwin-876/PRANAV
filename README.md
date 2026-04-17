<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# ArborX AI - Infrastructure Integrity Platform

This repository contains the source code for the ArborX AI platform, a high-fidelity monitoring system for industrial infrastructure.


## About This Project

**ArborX AI** is a state-of-the-art infrastructure monitoring and vegetation management platform. It leverages high-resolution spectral imagery and deep learning to identify anomalies in industrial corridors, ensuring regional grid integrity and preventing environmental hazards.

### Core Features
- **Neural Processing Pipeline**: Automated multi-spectral data analysis using the proprietary *ArborDetect* CNN architecture.
- **Territory Risk Heatmaps**: Real-time visual tracking of structural anomalies and vegetation encroachment across high-voltage sectors.
- **Data Insights**: A comprehensive archive of industrial imagery calibrated for model training and environmental synthesis.
- **Professional Reporting**: Integrated PDF export engine for technical audits and board-level executive briefings.
- **Predictive ROI Analytics**: Maintenance planning tools that calculate savings from preventative vs. reactive infrastructure work.

### Technology Stack
- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 4.0, Lucide Icons, Framer Motion
- **Data Visualization**: Recharts (for uptime and accuracy trends)
- **Document Generation**: jsPDF

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
