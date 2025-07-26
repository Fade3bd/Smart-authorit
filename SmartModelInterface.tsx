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
    <div style={{ padding: "2rem", background: "black", color: "white", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", textAlign: "center" }}>
        Intelligente Modelle
      </h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => setSelectedModel(model.id)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#333",
              borderRadius: "1rem",
              cursor: "pointer"
            }}
          >
            {model.name}
          </button>
        ))}
      </div>
      {models.map((model) =>
        model.id === selectedModel ? (
          <div key={model.id} style={{ background: "#222", padding: "2rem", borderRadius: "1.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{model.name}</h2>
            <ul>
              {model.description.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
            <div style={{ marginTop: "2rem" }}>
              <textarea placeholder="Text zur Analyse hier eingeben..." style={{ width: "100%", minHeight: "100px", background: "#333", color: "white", border: "1px solid #555", borderRadius: "8px", padding: "0.5rem" }} />
              <button style={{ marginTop: "1rem", padding: "0.5rem 1rem", background: "#06f", color: "white", border: "none", borderRadius: "0.5rem" }}>
                Mit KI analysieren
              </button>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}