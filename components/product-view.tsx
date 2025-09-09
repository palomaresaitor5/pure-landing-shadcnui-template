"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  TrendingDown, 
  TrendingUp, 
  Brain, 
  ExternalLink,
  Star,
  Calendar,
  Euro
} from "lucide-react";
import { VerificadorResponse, AmazonResponse, analyze, AnalysisResponse } from "@/lib/api";
import { PriceChart } from "./price-chart";
import { AIAnalysis } from "./ai-analysis";

interface ProductViewProps {
  verificadorData: VerificadorResponse;
  amazonData: AmazonResponse | null;
}

export function ProductView({ verificadorData, amazonData }: ProductViewProps) {
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!amazonData?.product) return;
    
    setIsAnalyzing(true);
    try {
      const result = await analyze(amazonData.product, verificadorData);
      setAnalysis(result);
    } catch (error) {
      console.error("Error en análisis:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const formatPrice = (price: number | string) => {
    const numPrice = typeof price === "string" ? parseFloat(price) : price;
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(numPrice);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Header del producto */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Imagen */}
        <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
          {verificadorData.imagen ? (
            <img
              src={verificadorData.imagen}
              alt={verificadorData.titulo || "Producto"}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Sin imagen disponible
            </div>
          )}
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-2">
              {verificadorData.tienda}
            </Badge>
            <h1 className="text-3xl font-bold">
              {verificadorData.titulo || "Producto sin título"}
            </h1>
          </div>

          {/* Precios destacados */}
          {verificadorData.precios_destacados.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Precios actuales</h3>
              <div className="grid gap-3">
                {verificadorData.precios_destacados.map((precio, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{precio.tipo}</span>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600">
                        {precio.precio}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(precio.fecha).toLocaleDateString("es-ES")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Botones de acción */}
          <div className="space-y-3">
            <Button asChild className="w-full" size="lg">
              <a href={verificadorData.amazon_url || verificadorData.verificador_url} target="_blank" rel="noopener noreferrer">
                Ver en tienda <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            {amazonData?.product && (
              <Button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                variant="outline"
                className="w-full"
                size="lg"
              >
                <Brain className="mr-2 h-4 w-4" />
                {isAnalyzing ? "Analizando..." : "Análisis con IA"}
              </Button>
            )}
          </div>

          {/* Información adicional de Amazon */}
          {amazonData?.product && (
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              {amazonData.product.rating && (
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{amazonData.product.rating}/5</span>
                  <span className="text-sm text-gray-500">
                    ({amazonData.product.reviews_count} reseñas)
                  </span>
                </div>
              )}
              {amazonData.product.brand && (
                <div className="text-sm">
                  <span className="font-medium">Marca:</span> {amazonData.product.brand}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Gráfico de precios */}
      {verificadorData.has_serie_historica && verificadorData.serie_historica.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Histórico de Precios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PriceChart data={verificadorData.serie_historica} />
          </CardContent>
        </Card>
      )}

      {/* Análisis con IA */}
      {analysis && (
        <AIAnalysis analysis={analysis} />
      )}

      {/* Detalles del producto de Amazon */}
      {amazonData?.product && (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Descripción */}
          {amazonData.product.description && (
            <Card>
              <CardHeader>
                <CardTitle>Descripción</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{amazonData.product.description}</p>
              </CardContent>
            </Card>
          )}

          {/* Puntos clave */}
          {amazonData.product.bullet_points && (
            <Card>
              <CardHeader>
                <CardTitle>Características principales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {amazonData.product.bullet_points.split('\n').map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{point.trim()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}