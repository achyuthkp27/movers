'use client';

import dynamic from 'next/dynamic';
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import MeshBackground from "@/components/ui/MeshBackground";

const FluidCanvas = dynamic(() => import('@/components/FluidCanvas'), { ssr: false });
const ChatBot = dynamic(() => import('@/components/smart/ChatBot'), { ssr: false });

export default function ClientGlobals({ children }) {
  return (
    <>
      <MeshBackground />
      <LoadingScreen />
      <FluidCanvas />
      <CustomCursor />
      <Navbar />
      {children}
      <ChatBot />
    </>
  );
}
