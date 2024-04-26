function unit(szam) {
    if (szam === undefined) {
      return "Nincs paraméter";
    }
    if (arguments.length > 1) {
      return "Egynél több paraméter";
    }
    if (isNaN(szam)) {
      return "Nem szám a bemenet";
    }
    
    szam = parseInt(szam);
    if (szam <= 0){
      return "Pozitív szám lehet csak a bemenet!"
    }

  }