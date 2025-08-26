const supabaseClient = supabase.createClient('https://cgpioodxsryqfyofjfvy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNncGlvb2R4c3J5cWZ5b2ZqZnZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MTY2MjIsImV4cCI6MjA2MzI5MjYyMn0.TB8MmMzMc18hktGiWal_Fjmuq4ptqp7pz3mi0o8LJLY');

const userEmailDisplay = document.getElementById('user-email-display');
const logoutButton = document.getElementById('logout-button');

// --- GUARDIA DE LA PÁGINA ---
supabaseClient.auth.onAuthStateChange((_event, session) => {
    if (session) {
        userEmailDisplay.textContent = session.user.email;
    } else {
        // Si no hay sesión, este no es su lugar.
        window.location.href = 'index.html';
    }
});

const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    // onAuthStateChange se encargará de redirigir
};

logoutButton.addEventListener('click', handleLogout);