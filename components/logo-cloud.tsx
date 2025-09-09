import { HTMLAttributes } from "react";
import Link from "next/link";

function LogoCloud(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <p className="text-center text-muted-foreground">Comparamos precios en las mejores tiendas</p>
      <div className="mt-6 flex items-center justify-center flex-wrap gap-8 [&_svg]:h-auto [&_svg]:w-32 xs:[&_svg]:w-auto xs:[&_svg]:h-10 text-muted-foreground">
        {/* Amazon */}
        <Link href="/tienda/amazon" className="hover:text-orange-600 transition-colors">
          <svg viewBox="0 0 200 60" className="fill-current">
            <path d="M70.8 58.3c-22.1 16.3-54.2 25-81.9 25C-32.7 83.3-54 71.8-54 71.8s2.4-1.3 7.2-2.8c0 0 36.5-12.9 77.6-12.9 23.8 0 47.8 4.8 47.8 4.8s-3.8-2.2-7.8-2.6z"/>
            <text x="20" y="35" className="fill-current text-2xl font-bold">Amazon</text>
          </svg>
        </Link>

        {/* Carrefour */}
        <Link href="/tienda/carrefour" className="hover:text-blue-600 transition-colors">
          <svg viewBox="0 0 200 60" className="fill-current">
            <circle cx="30" cy="30" r="25" fill="#0066CC"/>
            <path d="M20 20h20v20H20z" fill="white"/>
            <text x="70" y="35" className="fill-current text-2xl font-bold">Carrefour</text>
          </svg>
        </Link>

        {/* MediaMarkt */}
        <Link href="/tienda/mediamarkt" className="hover:text-red-600 transition-colors">
          <svg viewBox="0 0 200 60" className="fill-current">
            <rect x="5" y="10" width="40" height="40" rx="5" fill="#CC0000"/>
            <text x="15" y="35" className="fill-white text-lg font-bold">M</text>
            <text x="60" y="35" className="fill-current text-2xl font-bold">MediaMarkt</text>
          </svg>
        </Link>

        {/* El Corte Inglés */}
        <Link href="/tienda/el-corte-ingles" className="hover:text-gray-800 transition-colors">
          <svg viewBox="0 0 200 60" className="fill-current">
            <rect x="5" y="15" width="35" height="30" rx="3" fill="#000"/>
            <text x="50" y="35" className="fill-current text-xl font-bold">El Corte Inglés</text>
          </svg>
        </Link>

        {/* Fnac */}
        <Link href="/tienda/fnac" className="hover:text-orange-600 transition-colors">
          <svg viewBox="0 0 150 60" className="fill-current">
            <circle cx="25" cy="30" r="20" fill="#FF6600"/>
            <text x="55" y="35" className="fill-current text-2xl font-bold">Fnac</text>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default LogoCloud;