"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Search, TrendingDown } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import LogoCloud from "./logo-cloud";

const Hero = () => {
  const [url, setUrl] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (url.trim()) {
      setIsSearching(true);
      // Redirigir a la página del producto con la URL como parámetro
      const encodedUrl = encodeURIComponent(url.trim());
      router.push(`/producto/buscar?url=${encodedUrl}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <Badge className="bg-primary rounded-full py-1 border-none">
            ¡Ahorra hasta un 40% en tus compras! 💰
          </Badge>
          <h1 className="mt-6 max-w-[25ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Comparador de Precios con Análisis de IA
          </h1>
          <p className="mt-6 max-w-[65ch] xs:text-lg text-muted-foreground">
            Encuentra el mejor precio en Amazon, Carrefour, MediaMarkt y más. 
            Histórico de precios, alertas y análisis inteligente para que nunca pagues de más.
          </p>
          
          {/* Buscador */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-background border rounded-full shadow-lg">
              <Input
                type="url"
                placeholder="Pega aquí la URL del producto (Amazon, Carrefour, MediaMarkt...)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isSearching}
                className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-base"
              />
              <Button
                onClick={handleSearch}
                disabled={!url.trim() || isSearching}
                size="lg"
                className="rounded-full px-8"
              >
                <Search className="!h-5 !w-5 mr-2" />
                {isSearching ? "Buscando..." : "Comparar Precios"}
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Ejemplo: https://www.amazon.es/producto-ejemplo
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <TrendingDown className="!h-5 !w-5 mr-2" />
              Ver Histórico de Precios
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              Análisis con IA <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
        </div>
      </div>
      <LogoCloud id="buscar" className="mt-24 max-w-4xl mx-auto" />
    </div>
  );
};

export default Hero;