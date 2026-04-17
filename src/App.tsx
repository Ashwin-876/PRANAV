/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import HistoryPage from './pages/HistoryPage';
import ReportsPage from './pages/ReportsPage';
import AssetDetailPage from './pages/AssetDetailPage';
import DatasetPage from './pages/DatasetPage';
import MapView from './pages/MapView';
import WorkforcePage from './pages/WorkforcePage';
import SettingsPage from './pages/SettingsPage';
import RecentScansPage from './pages/RecentScansPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/assets" element={<HistoryPage />} /> {/* Placeholder/stub */}
          <Route path="/assets/:id" element={<AssetDetailPage />} />
          <Route path="/workforce" element={<WorkforcePage />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/datasets" element={<DatasetPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/recent" element={<RecentScansPage />} />
          <Route path="/docs" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

