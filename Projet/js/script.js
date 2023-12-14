
/* Menu d'acceuil */
    
        function commencerJeu() {
            // Redirigez vers la page des catégories de jeu
            window.location.href = "jeux.html";
        }

        function ouvrirOptions() {
            alert("Options ouvertes !");
            // Ajoutez le code pour ouvrir les options ici
        }

        function quitterJeu() {
            if (confirm("Êtes-vous sûr de vouloir quitter le jeu ?")) {
                window.close();
            }
        }

        function redirectTo(page) {
            window.location.href = "jeu_vitesse.html";
        }

        //chrono

        let alphabetIndex = 0;
        let startTime;
        let timerInterval;
        let errorMessageElement = document.getElementById('errorMessage');
        let successMessageElement = document.getElementById('successMessage');

        function startChrono() {
            startTime = new Date().getTime();
            timerInterval = setInterval(updateChrono, 10);
        }

        function updateChrono() {
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - startTime;

            const milliseconds = Math.floor(elapsedTime % 1000);
            const tenths = Math.floor((elapsedTime / 10) % 100); // Deux chiffres après la virgule

            const formattedMilliseconds = tenths < 10 ? '0' + tenths : tenths;

            const seconds = Math.floor(elapsedTime / 1000);

            document.getElementById('chrono').textContent =
                seconds + ' s ' + formattedMilliseconds;
        }

        function stopChrono() {
            clearInterval(timerInterval);
        }

        function startGame(event) {
            if (event.key.toLowerCase() === 'a' && alphabetIndex === 0) {
                startChrono();
            }

            const currentLetter = event.key.toLowerCase();
            const targetLetter = String.fromCharCode(97 + alphabetIndex);

            if (currentLetter === targetLetter) {
                alphabetIndex++;

                if (alphabetIndex === 26) {
                    stopChrono();
                    successMessageElement.textContent = 'Félicitations ! Vous avez terminé en ' + document.getElementById('chrono').textContent;
                }
            } else {
                errorMessageElement.textContent = 'NOOB !!! ';
                stopChrono();
            }
        }

        function resetGame() {
            alphabetIndex = 0;
            stopChrono();
            document.getElementById('chrono').textContent = '0 s 000';
            errorMessageElement.textContent = '';
            successMessageElement.textContent = '';
            document.getElementById('input').value = '';  // Efface le contenu de l'input
        }