document.addEventListener('DOMContentLoaded', () => {
    const zile = ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'];
    const luni = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

    function afiseazaDataOra() {
        const acum = new Date();
        const ziuaSaptamanii = zile[acum.getDay()];
        const ziua = acum.getDate();
        const luna = luni[acum.getMonth()];
        const anul = acum.getFullYear();
        const ora = acum.getHours().toString().padStart(2, '0');
        const minut = acum.getMinutes().toString().padStart(2, '0');

        const dataOra = `${ziuaSaptamanii}, ${ziua}-${luna}-${anul} | ${ora}:${minut}`;
        document.getElementById('afisare-data-ora').textContent = dataOra;
    }

    afiseazaDataOra();
    setInterval(afiseazaDataOra, 60000);
});


document.addEventListener('DOMContentLoaded', () => {
    const tabel = document.getElementById('tabel-relevant');
    const buton = document.getElementById('calculeaza-valori');
    const rezultateParagraf = document.getElementById('rezultate-calcule');

    buton.addEventListener('click', () => {
        const randuri = tabel.querySelectorAll('tbody tr');
        const valoriCalorii = [];


        randuri.forEach((rand) => {
            const celulaCalorii = rand.cells[2];
            const valoareRandom = Math.floor(Math.random() * 500) + 50;
            celulaCalorii.textContent = valoareRandom;
            valoriCalorii.push(valoareRandom);
        });

        const minim = Math.min(...valoriCalorii);
        const maxim = Math.max(...valoriCalorii);
        const suma = valoriCalorii.reduce((total, valoare) => total + valoare, 0);
        const media = (suma / valoriCalorii.length).toFixed(2);


        const numarPeste100 = valoriCalorii.filter((valoare) => valoare > 100).length;

        rezultateParagraf.textContent = `
            Minim: ${minim}, Maxim: ${maxim}, Suma: ${suma}, Media: ${media}, Valori > 100: ${numarPeste100}
        `;
    });
});

