import { HTMLAttributes } from "react";

function LogoCloud(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <p className="text-center text-muted-foreground">Comparamos precios en las mejores tiendas</p>
      <div className="mt-6 flex items-center justify-center flex-wrap gap-8 [&_svg]:h-auto [&_svg]:w-32 xs:[&_svg]:w-auto xs:[&_svg]:h-10 text-muted-foreground">
        {/* Amazon */}
        <svg viewBox="0 0 200 60" className="fill-current">
          <path d="M70.8 58.3c-22.1 16.3-54.2 25-81.9 25C-32.7 83.3-54 71.8-54 71.8s2.4-1.3 7.2-2.8c0 0 36.5-12.9 77.6-12.9 23.8 0 47.8 4.8 47.8 4.8s-3.8-2.2-7.8-2.6z"/>
          <path d="M150.5 33.8c0 4.8-1.2 8.7-3.5 11.6-2.3 2.9-5.4 4.4-9.2 4.4-4.1 0-7.3-1.4-9.6-4.3-2.3-2.9-3.5-6.7-3.5-11.4 0-4.8 1.2-8.7 3.5-11.6 2.3-2.9 5.5-4.4 9.6-4.4 3.8 0 6.9 1.5 9.2 4.4 2.3 2.9 3.5 6.8 3.5 11.3zm-6.8 0c0-6.4-2.1-9.6-6.3-9.6-4.3 0-6.4 3.2-6.4 9.6 0 6.5 2.1 9.7 6.4 9.7 4.2 0 6.3-3.2 6.3-9.7z"/>
          <path d="M180.2 49.2h-6.5V31.4c0-4.2-1.6-6.3-4.8-6.3-1.8 0-3.2.7-4.2 2.1-1 1.4-1.5 3.2-1.5 5.4v16.6h-6.5V19.1h6.2v4.2c.8-1.5 2-2.7 3.5-3.5 1.5-.8 3.2-1.2 5.1-1.2 2.9 0 5.2.9 6.9 2.6 1.7 1.7 2.5 4.2 2.5 7.4v21.6z"/>
          <text x="20" y="35" className="fill-current text-2xl font-bold">Amazon</text>
        </svg>

        {/* Carrefour */}
        <svg viewBox="0 0 200 60" className="fill-current">
          <circle cx="30" cy="30" r="25" fill="#0066CC"/>
          <path d="M20 20h20v20H20z" fill="white"/>
          <text x="70" y="35" className="fill-current text-2xl font-bold">Carrefour</text>
        </svg>

        {/* MediaMarkt */}
        <svg viewBox="0 0 200 60" className="fill-current">
          <rect x="5" y="10" width="40" height="40" rx="5" fill="#CC0000"/>
          <text x="15" y="35" className="fill-white text-lg font-bold">M</text>
          <text x="60" y="35" className="fill-current text-2xl font-bold">MediaMarkt</text>
        </svg>

        {/* El Corte Inglés */}
        <svg viewBox="0 0 200 60" className="fill-current">
          <rect x="5" y="15" width="35" height="30" rx="3" fill="#000"/>
          <text x="50" y="35" className="fill-current text-xl font-bold">El Corte Inglés</text>
        </svg>

        {/* Fnac */}
        <svg viewBox="0 0 150 60" className="fill-current">
          <circle cx="25" cy="30" r="20" fill="#FF6600"/>
          <text x="55" y="35" className="fill-current text-2xl font-bold">Fnac</text>
        </svg>
      </div>
    </div>
  );
}

export default LogoCloud;