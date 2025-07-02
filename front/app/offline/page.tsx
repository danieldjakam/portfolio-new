"use client";
import { WifiOff, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <WifiOff className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            You're Offline
          </h1>
          <p className="text-muted-foreground mb-8">
            It looks like you've lost your internet connection. Don't worry, you can still access some features of this app while offline.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => {window.location.reload()}}
            className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-background font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <RefreshCw className="h-5 w-5" />
            <span>Try Again</span>
          </button>
          
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Go Home</span>
          </Link>
        </div>

        <div className="mt-8 p-4 bg-card/50 rounded-lg border border-border/50">
          <h3 className="font-semibold text-foreground mb-2">Available Offline</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Portfolio information</li>
            <li>• Project details</li>
            <li>• Contact information</li>
            <li>• Skills and experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 