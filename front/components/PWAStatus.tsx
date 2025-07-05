'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, WifiOff, Smartphone, Download } from 'lucide-react';

const PWAStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check online status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Check if app is installed/standalone
    const checkInstallStatus = () => {
      const standalone = window.matchMedia('(display-mode: standalone)').matches || 
                        (window.navigator as any).standalone === true;
      setIsStandalone(standalone);
      setIsInstalled(standalone);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('load', checkInstallStatus);

    // Check initial status
    setIsOnline(navigator.onLine);
    checkInstallStatus();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('load', checkInstallStatus);
    };
  }, []);

  if (isInstalled && isOnline) {
    return null; // Don't show status when everything is good
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-20 right-4 z-40"
    >
      <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl p-3 shadow-lg">
        <div className="flex items-center space-x-2">
          {!isOnline && (
            <div className="flex items-center space-x-2 text-orange-500">
              <WifiOff className="h-4 w-4" />
              <span className="text-xs font-medium">Offline</span>
            </div>
          )}
          
          {isInstalled && (
            <div className="flex items-center space-x-2 text-green-500">
              <Smartphone className="h-4 w-4" />
              <span className="text-xs font-medium">Installed</span>
            </div>
          )}
          
          {!isInstalled && (
            <div className="flex items-center space-x-2 text-blue-500">
              <Download className="h-4 w-4" />
              <span className="text-xs font-medium">Installable</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PWAStatus; 