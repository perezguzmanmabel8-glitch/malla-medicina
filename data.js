const pensum = {
  "Semestre 1": [
    { codigo: "BIO-101", nombre: "Biología General", coreq: ["BIO-101-L"] },
    { codigo: "BIO-101-L", nombre: "Lab Biología" },
    { codigo: "QUI-111", nombre: "Química I", coreq: ["QUI-111-L"] },
    { codigo: "QUI-111-L", nombre: "Lab Química I" },
    { codigo: "MAT-060", nombre: "Matemática Básica" },
    {
      codigo: "ELT-001",
      nombre: "Electiva I",
      opciones: ["Ajedrez", "Danza", "Música", "Baloncesto"]
    }
  ],

  "Semestre 2": [
    { codigo: "BIO-102", nombre: "Biología II", prereq: ["BIO-101"] },
    { codigo: "BIO-102-L", nombre: "Lab Biología II" },
    { codigo: "QUI-112", nombre: "Química II", prereq: ["QUI-111"] },
    { codigo: "QUI-112-L", nombre: "Lab Química II" },
    {
      codigo: "ELT-002",
      nombre: "Electiva II",
      opciones: ["Teatro", "Coro", "Natación"]
    }
  ],

  "Semestre 5": [
    { codigo: "MED-115", nombre: "Anatomía I", coreq: ["MED-115-L"] },
    { codigo: "MED-115-L", nombre: "Lab Anatomía I" },
    { codigo: "MED-125", nombre: "Bioquímica" }
  ]
};
