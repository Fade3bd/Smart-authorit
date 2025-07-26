import { useState } from "react";

const models = [
  {
    id: "media",
    name: "Intelligente Medienautorität",
    description: [
      "Aufdeckung von Desinformationen.",
      "Analyse von Bildern und Artikeln mit Faktenabgleich.",
      "Erstellung objektiver Wissensberichte."
    ]
  },
  {
    id: "justice",
    name: "Intelligente Justiz",
    description: [
      "Analyse juristischer Dokumente im Vergleich zu früheren Urteilen.",
      "Rechtliche Empfehlungen für Richter oder Anwälte.",
      "Analyse von Beweisen und Bildern mit juristischem Kontext."
    ]
  },
  {
    id: "industry",
    name: "Intelligente Industrie",
    description: [
      "Analyse von Produktionslinien und Ressourceneffizienz.",
      "Auswertung von technischen Zeichnungen.",
      "Präzise industrielle Empfehlungen."
    ]
  },
  {
    id: "tech",
    name: "Intelligente Technologie",
    description: [
      "Analyse von Technologieprojekten und Software.",
      "Vorschläge für effiziente und sichere Lösungen.",
      "Innovationsüberwachung und Ressourcenverknüpfung."
    ]
  }
];

export default function SmartModelInterface() {
  const [selectedModel, setSelectedModel] = useState("media");

  return (
    <div style={{ padding: "2rem", backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1rem" }}>Intelligente Modelle</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
        {models.map((model) => (
          <button key={model.id} onClick={() => setSelectedModel(model.id)} style={{ padding: "0.5rem 1rem", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: "10px" }}>
            {model.name}
          </button>
        ))}
      </div>
      {models.map((model) =>
        model.id === selectedModel ? (
          <div key={model.id} style={{ backgroundColor: "#111", borderRadius: "1rem", padding: "1rem" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{model.name}</h2>
            <ul>
              {model.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            <textarea placeholder="Text zur Analyse hier eingeben..." style={{ marginTop: "1rem", width: "100%", height: "100px", backgroundColor: "#222", color: "#fff", border: "1px solid #444" }}></textarea>
            <button style={{ marginTop: "0.5rem", backgroundColor: "#007bff", color: "#fff", padding: "0.5rem 1rem", border: "none", borderRadius: "5px" }}>
              Mit KI analysieren
            </button>
          </div>
        ) : null
      )}
    </div>
  );
}