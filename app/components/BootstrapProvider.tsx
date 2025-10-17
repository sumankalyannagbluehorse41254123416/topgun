"use client";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BootstrapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // @ts-ignore-error
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <>{children}</>;
}
