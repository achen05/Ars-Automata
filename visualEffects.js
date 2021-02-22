var example = [
  'ARS AUTOMATA',
  'A10 A1TOM1TA',
  '0R0 A1T0MAT1',
  'ARS AUTO1A0A',
  'A0S A0TO1A0A',
  '0RS AU1OMATA',
  'ARS 1UTOMAT1',
  'AR0 AUT1MA0A',
  'A10 01T1M1TA',
  'AR0 AUT0M1T0',
  'ARS 1UTOMATA',
  '0RS AU1O0ATA',
];

        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    document.getElementById("sequence").innerHTML = example[i];
                    textSequence(++i);
                }, 50); // 1 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }

        }
