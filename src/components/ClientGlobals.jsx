'use client';

import dynamic from 'next/dynamic';
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";

const FluidCanvas = dynamic(() => import('@/components/FluidCanvas'), { ssr: false });
const ChatBot = dynamic(() => import('@/components/smart/ChatBot'), { ssr: false });

export default function ClientGlobals({ children }) {
  return (
    <>
      <LoadingScreen />
      <FluidCanvas />
      <CustomCursor />
      <Navbar />
      {children}
      <ChatBot />
    </>
  );
}
