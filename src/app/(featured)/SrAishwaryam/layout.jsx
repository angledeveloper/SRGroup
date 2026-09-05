import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title:
    'SR Aishwaryam - 2 BHK, 3 BHK flats in Balewadi | 2 BHK, 3 BHK flats in west Pune',
  description:
    'Explore SR Aishwaryam by RR Landmarks - premium 2 & 3 BHK flats in Balewadi, West Pune, with modern amenities, green design, and excellent connectivity.',
};

export default function RootLayout({ children }) {
  return (
    <>
      <GoogleTagManager gtmId='AW-16529778378' />
      {children}
    </>
  );
}
