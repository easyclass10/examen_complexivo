
        // --- CONFIGURACIÓN DE SUPABASE ---
        const SUPABASE_URL = "__SUPABASE_URL__";
        const SUPABASE_KEY = "__SUPABASE_KEY__";
        const { createClient } = supabase;
        const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

        // --- BASE DE DATOS DE CONTENIDO ---
        const subjectsData = {
            cont_general: { title: "ASIGNATURA: CONTABILIDAD GENERAL", profesor: "Profesor: Mg. Carolina Jaramillo (cjaramillo@uisrael.edu.ec)", temas: "<ul><li>Ciclo contable: Jornalización, Mayorización, Ajustes</li><li>Balance de Comprobación</li><li>Cierre de libros</li><li>Estados financieros</li></ul>" },
            costos: { title: "ASIGNATURA: CONTABILIDAD DE COSTOS Y AVANZADOS", profesor: "Profesor: Mg. Carolina Jaramillo (cjaramillo@uisrael.edu.ec)", temas: "<ul><li>Clasificación de los costos</li><li>Estados financieros de empresas industriales</li><li>Sistema de costos por órdenes de trabajo</li><li>Sistema de costos por procesos</li><li>Costo estándar de producción</li><li>Relación Costo – Volumen - Utilidad</li></ul>" },
            presupuestos: { title: "ASIGNATURA: PRESUPUESTOS", profesor: "Profesor: Mg. Carlos Arias (carias@uisrael.edu.ec)", temas: "<ul><li>Conceptos y generalidades</li><li>Clasificación de los presupuestos</li><li>Presupuesto personal y familiar</li><li>Presupuestos comerciales, producción, gastos, ventas, etc.</li><li>Métodos para hacer proyecciones</li><li>Presupuesto maestro y estados financieros proyectados</li></ul>" },
            finan_1: { title: "ASIGNATURA: ADMINISTRACIÓN FINANCIERA I", profesor: "Profesor: Mg. Carlos Arias (carias@uisrael.edu.ec)", temas: "<ul><li>Análisis Financiero vertical y horizontal</li><li>Cálculo de razones financieras (liquidez, actividad, endeudamiento, rentabilidad)</li><li>Elaboración del informe de análisis financiero</li></ul>" },
            finan_2: { title: "ASIGNATURA: ADMINISTRACIÓN FINANCIERA II", profesor: "Profesor: Mg. Carlos Arias (carias@uisrael.edu.ec)", temas: "<ul><li>Fuentes de Financiamiento (Corto y Largo Plazo)</li><li>Valoración de Activos Financieros (bonos, acciones)</li><li>Evaluación financiera de Inversiones (VAN, TIR, etc.)</li></ul>" },
            sup_1: { title: "ASIGNATURA: CONTABILIDAD SUPERIOR I", profesor: "Profesor: Mg. William Ortega (wortega@uisrael.edu.ec)", temas: "<ul><li>Marco conceptual de las NIIF</li><li>NIC 1 y Secciones 3-6 de NIIF para Pymes (Presentación de EEFF)</li><li>NIC 2 y Sección 13 de NIIF para Pymes (Inventarios)</li><li>NIC 7 y Sección 7 de NIIF para Pymes (Flujos de Efectivo)</li><li>Diferencias entre NIIF completas y para Pymes</li></ul>" },
            sup_2: { title: "ASIGNATURA: CONTABILIDAD SUPERIOR II", profesor: "Profesor: Mg. William Ortega (wortega@uisrael.edu.ec)", temas: "<ul><li>NIC 16 y Sección 17 (Propiedades, planta y equipo)</li><li>NIC 41 y Sección 34 (Activos Biológicos)</li><li>NIC 38 y Sección 18 (Activos Intangibles)</li><li>Diferencias entre NIIF completas y para Pymes</li></ul>" },
            tributaria: { title: "ASIGNATURA: ADMINISTRACIÓN TRIBUTARIA", profesor: "Profesor: Mg. Lorena Muquis (lmuquis@uisrael.edu.ec)", temas: "<ul><li>Aspectos generales en el ámbito tributario</li><li>Impuesto a la Renta Personas Naturales</li><li>Aplicaciones Tecnológicas Formularios (SRI)</li><li>Aplicaciones Tecnológicas Anexos (SRI)</li></ul>" },
            aud_finan: { title: "ASIGNATURA: AUDITORÍA FINANCIERA I y II", profesor: "Profesor: Mg. Andrés Ramos (aramos@uisrael.edu.ec)", temas: "<ul><li>Objetivo de la Auditoría de EEFF</li><li>Código de Ética del Contador-Auditor</li><li>Planificación y Papeles de Trabajo</li><li>Riesgos y Evidencia de Auditoría</li><li>Tipos de opinión e informes</li></ul>" },
            aud_gestion: { title: "ASIGNATURA: AUDITORÍA DE GESTIÓN", profesor: "Profesor: Mg. Andrés Ramos (aramos@uisrael.edu.ec)", temas: "<ul><li>Objetivo y Fases de la Auditoría de Gestión</li><li>Variables que mide la Auditoría de gestión</li><li>Sistema de Control Interno</li><li>Indicadores de gestión y Hallazgos de auditoría</li></ul>" },
            aud_forense: { title: "ASIGNATURA: AUDITORÍA FORENSE", profesor: "Profesor: Mg. Andrés Ramos (aramos@uisrael.edu.ec)", temas: "<ul><li>La auditoría forense como recurso en la determinación del fraude</li><li>Principios, riesgo y evidencia forense</li><li>Controles relacionados al fraude</li><li>Procedimientos y pruebas de auditoría forense</li><li>El informe de auditoría forense</li></ul>" },
            simulacro: { title: "SIMULACRO DE EXAMEN COMPLEXIVO", profesor: "Coordinación Académica", temas: "<ul><li>Preguntas de selección múltiple de todas las materias.</li><li>Casos prácticos integradores.</li><li>Tiempo límite para resolución.</li><li>Resultados y retroalimentación al finalizar.</li></ul>" },
        };

        // --- MANEJO DE ELEMENTOS DEL DOM ---
        const mainMenu = document.getElementById('main-menu');
        const subjectDetailPage = document.getElementById('subject-detail');
        const detailTitle = document.getElementById('detail-title');
        const detailProfesor = document.getElementById('detail-profesor');
        const detailTemas = document.getElementById('detail-temas');
        const backToMenuBtn = document.getElementById('back-to-menu');
        const subjectButtons = document.querySelectorAll('.subject-button');
        const userSessionUI = document.getElementById('user-session-ui');
        const userEmailDisplay = document.getElementById('user-email-display');
        const showLoginModalButton = document.getElementById('show-login-modal-button');
        const logoutButton = document.getElementById('logout-button');
        const authModal = document.getElementById('auth-modal');
        const freeModal = document.getElementById('free-modal');
        const paidModal = document.getElementById('paid-modal');
        const authForm = document.getElementById('auth-form');
        const authFeedback = document.getElementById('auth-feedback');
        const closeModalButtons = document.querySelectorAll('.close-modal');
        const goToSubjectBtn = document.getElementById('go-to-subject-btn');
        const loginFromPaidModal = document.getElementById('login-from-paid-modal');

        let currentUserSession = null;

        // --- FUNCIONES ---
        const handleLogin = async (email, password) => {
            authFeedback.textContent = '';
            try {
                const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
                if (error) throw error;
                hideAllModals(); 
            } catch (error) {
                authFeedback.textContent = 'Correo o contraseña incorrectos.';
                authFeedback.style.color = 'red';
            }
        };

        const handleLogout = async () => {
            await supabaseClient.auth.signOut();
        };
        
        const updateUI = (session) => {
            currentUserSession = session;
            if (session) {
                showLoginModalButton.style.display = 'none';
                userSessionUI.style.display = 'flex';
                userEmailDisplay.textContent = session.user.email;
                unlockCourses();
            } else {
                showLoginModalButton.style.display = 'block';
                userSessionUI.style.display = 'none';
                userEmailDisplay.textContent = '';
                lockCourses();
            }
        };
        
        const unlockCourses = () => subjectButtons.forEach(button => {
            if (button.dataset.subject === 'paid') {
                button.classList.remove('bg-slate-700', 'hover:bg-slate-800');
                button.classList.add('unlocked');
            }
        });

        const lockCourses = () => subjectButtons.forEach(button => {
            if (button.dataset.subject === 'paid') {
                button.classList.add('bg-slate-700', 'hover:bg-slate-800');
                button.classList.remove('unlocked');
            }
        });

        const showSubjectContent = (subjectKey) => {
            const data = subjectsData[subjectKey];
            if (!data) return;
            detailTitle.textContent = data.title;
            detailProfesor.textContent = data.profesor;
            detailTemas.innerHTML = data.temas.replace(/<li>/g, '<li class="flex items-start"><span class="mr-2 text-indigo-500">&#10003;</span>');
            mainMenu.style.display = 'none';
            subjectDetailPage.style.display = 'block';
            window.scrollTo(0, 0);
        };
        
        const showAuthModal = () => {
            hideAllModals();
            authModal.classList.add('active');
        };
        
        const hideAllModals = () => {
            [authModal, freeModal, paidModal].forEach(modal => modal.classList.remove('active'));
        };

        // --- EVENT LISTENERS ---
        showLoginModalButton.addEventListener('click', showAuthModal);
        logoutButton.addEventListener('click', handleLogout);
        
        closeModalButtons.forEach(button => button.addEventListener('click', hideAllModals));
        [authModal, freeModal, paidModal].forEach(modal => {
            modal.addEventListener('click', e => { if (e.target === modal) hideAllModals(); });
        });
        
        authForm.addEventListener('submit', e => {
            e.preventDefault();
            handleLogin(authForm.email.value, authForm.password.value);
        });
        
        loginFromPaidModal.addEventListener('click', showAuthModal);

        goToSubjectBtn.addEventListener('click', () => {
            hideAllModals();
            //showSubjectContent('cont_general');
        });

        subjectButtons.forEach(button => {
            button.addEventListener('click', () => {
                const subjectType = button.dataset.subject;
                const subjectKey = button.dataset.key;

                if (subjectType === 'free') {
                    freeModal.classList.add('active');
                } else { // paid
                    if (currentUserSession) {
                        //showSubjectContent(subjectKey);
                        switch (subjectKey) {
                            case 'costos':
                                window.location.href = 'z2.html';
                                break;
                            case 'presupuestos':
                                window.location.href = 'z3.html';
                                break;
                            case 'finan_1':
                                window.location.href = 'z4.html';
                                break;
                            case 'finan_2':
                                window.location.href = 'z5.html';
                                break;
                            case 'sup_1':
                                window.location.href = 'z6.html';
                                break;
                            case 'sup_2':
                                window.location.href = 'z7.html';
                                break;
                            case 'tributaria':
                                window.location.href = 'z8.html';
                                break;
                            case 'aud_finan':
                                window.location.href = 'z9.html';
                                break;
                            case 'aud_gestion':
                                window.location.href = 'z10.html';
                                break;
                            case 'aud_forense':
                                window.location.href = 'z11.html';
                                break;
                        }
                    } else {
                        paidModal.classList.add('active');
                    }
                }
            });
        });

        backToMenuBtn.addEventListener('click', () => {
            mainMenu.style.display = 'block';
            subjectDetailPage.style.display = 'none';
            window.scrollTo(0, 0);
        });
        
        supabaseClient.auth.onAuthStateChange((_event, session) => {
            updateUI(session);
        });
    