import { clientLogos } from "@/data/clients";

export function Clients() {
  const repeated = [...clientLogos, ...clientLogos];
  return (
    <div className="clients" aria-label="Clients">
      <p>Trusted by South Africa&apos;s best-known teams</p>
      <div className="marquee">
        <div className="track">
          {repeated.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
