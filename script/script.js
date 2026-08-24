// --- ÉLÉMENTS restart ---
const btnStart = document.getElementById('btn-start');
const boiteDemarrage = document.getElementById('boite_demarrage');

const btnRelance = document.getElementById('btn_relance');
const boiteConfirm = document.getElementById('boite_confirm');
const btnOui = document.getElementById('btn-oui');
const btnNon = document.getElementById('btn-non');

// disclaimer
const disclaimer = document.getElementById('fenetre_disclaimer');
const okdisclaimer = document.getElementById('btn-compris');

// Terminal
const terminal = document.getElementById('terminal');
const btnterminal = document.getElementById('btn-terminal');
const btnminterminal = document.getElementById('btn-minterminal');
const btncloseterminal = document.getElementById('btn-closeterminal');

// Internet & Pages
const internet = document.getElementById('internet');
const btninternet = document.getElementById('btn-internet');
const btnmininternet = document.getElementById('btn-mininternet');
const btncloseinternet = document.getElementById('btn-closeinternet');

const page_acceuille_internet = document.getElementById('page_acceuille_internet');
const page_acceuille_youtube = document.getElementById('youtube');
const page_aywen = document.getElementById('yt_aywen');
const page_rootgaming = document.getElementById('yt_rootgaming');
const page_misterv = document.getElementById('yt_misterv');
const page_rootofficiel = document.getElementById('yt_rootofficiel');

const page_site_aywen = document.getElementById('site_aywen');
const page_site_livre = document.getElementById('page_livre_aywen');
const page_makerschat = document.getElementById('page_makerschat');
const page_darknet = document.getElementById('page_darknet');

const btnyt = document.getElementById('btn-yt');
const btnaywen = document.getElementById('btn-aywen');
const btnsiteaywen = document.getElementById('btn-siteaywen');
const btnsitelivre = document.getElementById('btn-livre');
const btnmakerschat = document.getElementById('btn-makerschat');
const btndarknet = document.getElementById('btn-darknet');

const btnSubscribe = document.getElementById('btn-subscribe');
const btnDots = document.getElementById('btn-dots');
const ytDropdown = document.getElementById('yt-dropdown');
const btnCopyId = document.getElementById('btn-copy-id');

// Fonction utilitaire pour tout masquer dans Internet Explorer
function masquerToutesLesPagesWeb() {
    page_acceuille_internet.classList.add('cachee');
    page_acceuille_youtube.classList.add('cachee');
    page_aywen.classList.add('cachee');
    page_rootgaming.classList.add('cachee');
    page_misterv.classList.add('cachee');
    page_rootofficiel.classList.add('cachee');
    page_site_aywen.classList.add('cachee');
    page_site_livre.classList.add('cachee');
    page_makerschat.classList.add('cachee');
    page_darknet.classList.add('cachee');
}

// --- GESTION DU MENU DÉMARRAGE & POPUP RELANCE ---
btnStart.addEventListener('click', () => boiteDemarrage.classList.toggle('cachee'));

btnRelance.addEventListener('click', () => {
    boiteDemarrage.classList.add('cachee');
    boiteConfirm.classList.remove('cachee');
});

btnOui.addEventListener('click', () => location.reload());
btnNon.addEventListener('click', () => boiteConfirm.classList.add('cachee'));

// --- DISCLAIMER ---
okdisclaimer.addEventListener('click', () => disclaimer.classList.add('cachee'));

// --- GESTION FENÊTRE TERMINAL ---
btnterminal.addEventListener('click', () => terminal.classList.toggle('cachee'));
btnminterminal.addEventListener('click', () => terminal.classList.toggle('cachee'));
btncloseterminal.addEventListener('click', () => terminal.classList.add('cachee'));

// --- NAVIGATEUR INTERNET ---
btninternet.addEventListener('click', () => internet.classList.toggle('cachee'));
btnmininternet.addEventListener('click', () => internet.classList.toggle('cachee'));

btncloseinternet.addEventListener('click', () => {
    masquerToutesLesPagesWeb();
    page_acceuille_internet.classList.remove('cachee');
    internet.classList.add('cachee');
});

// Changement de pages Internet
btnyt.addEventListener('click', () => {
    masquerToutesLesPagesWeb();
    page_acceuille_youtube.classList.remove('cachee');
});

btnsiteaywen.addEventListener('click', () => {
    masquerToutesLesPagesWeb();
    page_site_aywen.classList.remove('cachee');
});

btnsitelivre.addEventListener('click', () => {
    masquerToutesLesPagesWeb();
    page_site_livre.classList.remove('cachee');
});

btnmakerschat.addEventListener('click', () => {
    masquerToutesLesPagesWeb();
    page_makerschat.classList.remove('cachee');
});

btndarknet.addEventListener('click', () => {
    masquerToutesLesPagesWeb();
    page_darknet.classList.remove('cachee');
});

// Navigation inter-chaînes Youtube
const declencheursAywen = ['btn-aywen', 'btn-aywen-depuis-rootgaming', 'btn-aywen-depuis-misterv', 'btn-aywen-depuis-rootofficiel'];
declencheursAywen.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => { masquerToutesLesPagesWeb(); page_aywen.classList.remove('cachee'); });
});

const declencheursRootGaming = ['btn-rootgaming', 'btn-rootgaming-depuis-aywen', 'btn-rootgaming-depuis-misterv', 'btn-rootgaming-depuis-rootofficiel'];
declencheursRootGaming.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => { masquerToutesLesPagesWeb(); page_rootgaming.classList.remove('cachee'); });
});

const declencheursMisterV = ['btn-misterv', 'btn-misterv-depuis-aywen', 'btn-misterv-depuis-rootgaming', 'btn-misterv-depuis-rootofficiel'];
declencheursMisterV.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => { masquerToutesLesPagesWeb(); page_misterv.classList.remove('cachee'); });
});

const declencheursRootOfficiel = ['btn-rootofficiel', 'btn-rootofficiel-depuis-aywen', 'btn-rootofficiel-depuis-rootgaming', 'btn-rootofficiel-depuis-misterv'];
declencheursRootOfficiel.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => { masquerToutesLesPagesWeb(); page_rootofficiel.classList.remove('cachee'); });
});

// --- INTERACTIONS YOUTUBE ---
if (btnSubscribe) {
    btnSubscribe.addEventListener('click', () => {
        btnSubscribe.classList.toggle('abonne');
        btnSubscribe.textContent = btnSubscribe.classList.contains('abonne') ? "Abonné" : "S'abonner";
    });
}

if (btnDots && ytDropdown && btnCopyId) {
    btnDots.addEventListener('click', (e) => {
        e.stopPropagation();
        ytDropdown.classList.toggle('cachee');
    });

    btnCopyId.addEventListener('click', () => {
        const fakeId = "Zo7D6E3ejS7KpsmpfVRR";
        navigator.clipboard.writeText(fakeId).then(() => {
            alert("ID copié : " + fakeId);
        });
        ytDropdown.classList.add('cachee');
    });

    document.addEventListener('click', () => ytDropdown.classList.add('cachee'));
}

// --- LOGIQUE DU TERMINAL ET AVANCEMENT DU JEU ---
let etape = 0;

const btnAiderRoot = document.getElementById('btn-aider-root');

const imagesParEtape = {
    0: 'images/1.png',
    1: 'images/2.png',
    2: 'images/3.png',
    3: 'images/4.png',
    4: 'images/5.png',
    5: 'images/6.png',
    6: 'images/7.png'
};

function changerImageEtape(numeroEtape) {
    let imgEtape = document.getElementById('image_etape_hud');
    
    if (!imgEtape) {
        imgEtape = document.createElement('img');
        imgEtape.id = 'image_etape_hud';
        imgEtape.className = 'image_etape_droite';
        document.body.appendChild(imgEtape);
    }

    if (imagesParEtape[numeroEtape]) {
        imgEtape.src = imagesParEtape[numeroEtape];
        imgEtape.style.display = 'block';
    } else {
        imgEtape.style.display = 'none';
    }
}

if (btnAiderRoot) {
    btnAiderRoot.addEventListener('click', () => {
        if (etape === 0) {
            etape = 1;
            changerImageEtape(etape);
            btnAiderRoot.classList.add('cachee');
        }
    });
}

changerImageEtape(etape);

const entreeTerminal = document.getElementById('entree_terminal');
const historiqueTerminal = document.getElementById('historique_terminal');
const corpsTerminal = document.querySelector('.corps_terminal');

function scrollerTerminal() {
    corpsTerminal.scrollTop = corpsTerminal.scrollHeight;
}

if (entreeTerminal) {
    entreeTerminal.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const commande = entreeTerminal.value.trim();
            if (commande === '') return;

            const ligneCommandeTapee = document.createElement('p');
            ligneCommandeTapee.textContent = `C:\\Root> ${commande}`;
            historiqueTerminal.appendChild(ligneCommandeTapee);

            entreeTerminal.value = '';
            entreeTerminal.disabled = true;
            scrollerTerminal();

            if (etape === 1 && commande === "analyse connexion Zo7D6E3ejS7KpsmpfVRR") {
                etape = 2;
                
                const pReflexion = document.createElement('p');
                pReflexion.textContent = "Analyse en cours...";
                historiqueTerminal.appendChild(pReflexion);
                scrollerTerminal();

                setTimeout(() => {
                    pReflexion.remove();
                    
                    const pResultat = document.createElement('pre');
                    pResultat.style.color = '#00ff00';
                    pResultat.textContent = 
`Dernière connexion à la chaîne :
+---------------+------------+-----------------+
| Il y a        | Nom        | Adresse IP      |
+---------------+------------+-----------------+
| 10 minutes    | Aywen      | 192.168.1.42    |
| 1 heure       | Lemoustique| 10.0.4.12       |
| 2 jours       | Margouta   | 172.16.0.8      |
| 5 jours       | Nary       | 192.168.1.99    |
| 1 semaine     | Volko      | 10.0.0.55       |
+---------------+------------+-----------------+`;
                    historiqueTerminal.appendChild(pResultat);
                    
                    changerImageEtape(etape);
                    entreeTerminal.disabled = false;
                    entreeTerminal.focus();
                    scrollerTerminal();
                }, 2000);

            } else if (etape === 2 && commande === "scan 192.168.1.42") {
                etape = 3;

                const pReflexion = document.createElement('p');
                pReflexion.textContent = "Scan de l'adresse IP en cours...";
                historiqueTerminal.appendChild(pReflexion);
                scrollerTerminal();

                setTimeout(() => {
                    pReflexion.remove();

                    const pResultat = document.createElement('pre');
                    pResultat.style.color = '#00ff00';
                    pResultat.textContent = 
`Analyse des vulnérabilités...
Port 21 (FTP)    :  12% vulnérable
Port 80 (HTTP)   :  45% vulnérable
Port 443 (HTTPS) :   5% vulnérable
Port 8080        |  89% vulnérable [CRITIQUE]`;
                    historiqueTerminal.appendChild(pResultat);

                    changerImageEtape(etape);
                    entreeTerminal.disabled = false;
                    entreeTerminal.focus();
                    scrollerTerminal();
                }, 3000);

            } else if (etape === 3 && commande === "attack 8080") {
                etape = 4;

                const pProgression = document.createElement('p');
                historiqueTerminal.appendChild(pProgression);

                let pourcent = 0;
                const intervalBarre = setInterval(() => {
                    pourcent += 10;
                    const nbBarettes = pourcent / 10;
                    const barre = "[" + "=".repeat(nbBarettes) + " ".repeat(10 - nbBarettes) + `] ${pourcent}%`;
                    pProgression.textContent = `Attaque du port 8080... ${barre}`;
                    scrollerTerminal();

                    if (pourcent >= 100) {
                        clearInterval(intervalBarre);

                        const pErreur = document.createElement('p');
                        pErreur.style.color = '#ff4444';
                        pErreur.textContent = "Erreur, veuillez communiquer le numéro de déchiffrage.";
                        historiqueTerminal.appendChild(pErreur);

                        changerImageEtape(etape);
                        entreeTerminal.disabled = false;
                        entreeTerminal.focus();
                        scrollerTerminal();
                    }
                }, 300);

            } else if (etape === 4 && commande === "176") {
                etape = 5;

                const pSucces = document.createElement('p');
                pSucces.style.color = '#00ff00';
                pSucces.textContent = "Connecté à l'ordinateur d'Aywen";
                historiqueTerminal.appendChild(pSucces);

                changerImageEtape(etape);
                entreeTerminal.disabled = false;
                entreeTerminal.focus();
                scrollerTerminal();

            } else if (etape === 5 && commande === "install root.exe") {
                etape = 6;

                const pInstallation = document.createElement('p');
                pInstallation.textContent = "Installation de Root.exe en cours...";
                historiqueTerminal.appendChild(pInstallation);
                scrollerTerminal();

                setTimeout(() => {
                    pInstallation.remove();

                    const pInstalle = document.createElement('p');
                    pInstalle.style.color = '#00ff00';
                    pInstalle.textContent = "Root.exe installé";
                    historiqueTerminal.appendChild(pInstalle);

                    changerImageEtape(etape);
                    entreeTerminal.disabled = false;
                    entreeTerminal.focus();
                    scrollerTerminal();
                }, 2000);

            } else {
                const messageErreur = document.createElement('p');
                messageErreur.style.color = '#ff4444';
                messageErreur.textContent = `'${commande}' n'est pas reconnu comme une commande interne ou externe.`;
                historiqueTerminal.appendChild(messageErreur);

                entreeTerminal.disabled = false;
                entreeTerminal.focus();
                scrollerTerminal();
            }
        }
    });
}

// --- GESTION HORLOGE SYSTÈME ---
function mettreAAjourHorloge() {
    const elHeure = document.getElementById('heure_systeme');
    const elDate = document.getElementById('date_systeme');
    
    if (!elHeure || !elDate) return;

    const maintenant = new Date();
    
    const heures = String(maintenant.getHours()).padStart(2, '0');
    const minutes = String(maintenant.getMinutes()).padStart(2, '0');
    const secondes = String(maintenant.getSeconds()).padStart(2, '0');
    elHeure.textContent = `${heures}:${minutes}:${secondes}`;

    const jour = String(maintenant.getDate()).padStart(2, '0');
    const mois = String(maintenant.getMonth() + 1).padStart(2, '0');
    const annee = maintenant.getFullYear();
    elDate.textContent = `${jour}/${mois}/${annee}`;
}

mettreAAjourHorloge();
setInterval(mettreAAjourHorloge, 1000);

// --- CONFIGURATION SUPABASE ---
const SUPABASE_URL = "https://pgrygvqocsswipievrxq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_PGpm2E2NhF9W4j7hPEmovA_ASuVkUO5";

const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const elAffichageCoins = document.getElementById('affichage_total_coins');
const btnDonnerCoin = document.getElementById('btn_donner_coin');

let totalCoinsLocaux = 0;

async function initialiserCompteurCoins() {
    if (!supabaseClient) return;

    const { data, error } = await supabaseClient
        .from('compteur_donations')
        .select('total')
        .eq('id', 1)
        .single();

    if (!error && data) {
        totalCoinsLocaux = data.total;
        if (elAffichageCoins) elAffichageCoins.textContent = totalCoinsLocaux.toLocaleString();
    }
}

async function ajouterUnCoin() {
    totalCoinsLocaux++;
    if (elAffichageCoins) elAffichageCoins.textContent = totalCoinsLocaux.toLocaleString();

    if (!supabaseClient) return;

    const { error } = await supabaseClient.rpc('donner_un_coin');

    if (error) {
        console.error("Erreur lors du don :", error);
        initialiserCompteurCoins();
    }
}

function ecouterRealtimeSupabase() {
    if (!supabaseClient) return;

    supabaseClient
        .channel('schema-db-changes')
        .on(
            'postgres_changes',
            {
                event: 'UPDATE',
                schema: 'public',
                table: 'compteur_donations',
                filter: 'id=eq.1'
            },
            (payload) => {
                if (payload.new && payload.new.total !== undefined) {
                    totalCoinsLocaux = payload.new.total;
                    if (elAffichageCoins) elAffichageCoins.textContent = totalCoinsLocaux.toLocaleString();
                }
            }
        )
        .subscribe();
}

if (btnDonnerCoin) {
    btnDonnerCoin.addEventListener('click', () => {
        ajouterUnCoin();
    });
}

initialiserCompteurCoins();
ecouterRealtimeSupabase();

// --- OUVERTURE VIA LES ICÔNES DU BUREAU ---
const iconeBureauTerminal = document.getElementById('bureau-terminal');
const iconeBureauInternet = document.getElementById('bureau-internet');
const iconeBureauMusique = document.getElementById('bureau-musique');
const appMusique = document.getElementById('application-musique');
const btnMusiqueFooter = document.getElementById('btn-musique');
const iconeBureauAywencoin = document.getElementById('bureau-aywencoin');

if (iconeBureauTerminal) {
    iconeBureauTerminal.addEventListener('dblclick', () => terminal.classList.remove('cachee'));
}

if (iconeBureauInternet) {
    iconeBureauInternet.addEventListener('dblclick', () => internet.classList.remove('cachee'));
}

if (iconeBureauMusique) {
    iconeBureauMusique.addEventListener('dblclick', () => appMusique.classList.remove('cachee'));
}

if (iconeBureauAywencoin) {
    iconeBureauAywencoin.addEventListener('dblclick', () => {
        masquerToutesLesPagesWeb();
        page_darknet.classList.remove('cachee');
        internet.classList.remove('cachee');
    });
}

if (btnMusiqueFooter) {
    btnMusiqueFooter.addEventListener('click', () => appMusique.classList.toggle('cachee'));
}

const btnCloseMusique = document.getElementById('btn-closemusique');
if (btnCloseMusique) {
    btnCloseMusique.addEventListener('click', () => appMusique.classList.add('cachee'));
}

// --- LOGIQUE DU LECTEUR AUDIO (APP) ---
const lecteurAudio = document.getElementById('lecteur-audio');
const btnPlay = document.getElementById('btn-play-musique');
const btnPause = document.getElementById('btn-pause-musique');
const btnStop = document.getElementById('btn-stop-musique');
const txtStatutMusique = document.getElementById('statut-musique');

if (lecteurAudio) {
    btnPlay.addEventListener('click', () => {
        lecteurAudio.play();
        txtStatutMusique.textContent = "Lecture en cours...";
        txtStatutMusique.style.color = "#00ff00";
    });

    btnPause.addEventListener('click', () => {
        lecteurAudio.pause();
        txtStatutMusique.textContent = "En pause";
        txtStatutMusique.style.color = "#ffff00";
    });

    btnStop.addEventListener('click', () => {
        lecteurAudio.pause();
        lecteurAudio.currentTime = 0;
        txtStatutMusique.textContent = "Arrêté";
        txtStatutMusique.style.color = "#ff4444";
    });
}
