'use client';
import { useEffect, useCallback } from 'react';
import { captureUTM, getAttributionPayload } from '@/lib/utm-tracking';

export function useUTMTracking() {
  useEffect(() => {
    captureUTM();
  }, []);

  const getPayload = useCallback(() => {
    return getAttributionPayload();
  }, []);

  return { getPayload };
}
