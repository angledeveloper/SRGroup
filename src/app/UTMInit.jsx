'use client';
import { useEffect } from 'react';
import { captureUTM } from '@/lib/utm-tracking';

export default function UTMInit() {
  useEffect(() => {
    captureUTM();
  }, []);

  return null;
}
