'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, WifiOff, Smartphone, Download, PhoneCall } from 'lucide-react';

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
          {/* {!isOnline && ( */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={"https://wa.me/237691973255"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-colors duration-200"
            >
            <div className="flex items-center space-x-2 text-green-500">
              <PhoneCall className="h-4 w-4" />
              <span className="text-xs font-medium">+237 691973255</span>
            </div>
            </motion.a>
          {/* )} */}
          
          {/* {isInstalled && (
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
          )} */}
        </div>
      </div>
    </motion.div>
  );
};

export default PWAStatus; 