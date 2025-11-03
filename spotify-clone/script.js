// Lógica anterior para reproducción permanece igual

// Validación de login
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simulación: Verificar en localStorage
        const users = JSON.parse(localStorage.getItem('spotify-users')) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            alert('¡Inicio de sesión exitoso! Redirigiendo...');
            window.location.href = 'index.html'; // Redirigir a la página principal
        } else {
            alert('Correo o contraseña incorrectos.');
        }
    });
}

// Validación de registro
if (document.getElementById('register-form')) {
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }
        
        // Simulación: Guardar en localStorage
        const users = JSON.parse(localStorage.getItem('spotify-users')) || [];
        if (users.find(u => u.email === email)) {
            alert('El correo ya está registrado.');
            return;
        }
        
        users.push({ name, email, password });
        localStorage.setItem('spotify-users', JSON.stringify(users));
        alert('¡Registro exitoso! Ahora inicia sesión.');
        window.location.href = 'login.html';
    });
    }
    // Funcionalidad de búsqueda
if (document.getElementById('search-input')) {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');
    
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        // Simulación de filtrado (en un sitio real, esto sería una API)
        const results = [
            { title: 'Canción Ejemplo 1', artist: 'Artista Ejemplo', img: 'assets/album1.jpg' },
            { title: 'Canción Ejemplo 2', artist: 'Otro Artista', img: 'assets/album2.jpg' }
        ].filter(item => item.title.toLowerCase().includes(query) || item.artist.toLowerCase().includes(query));
        
        resultsContainer.innerHTML = results.map(result => `
            <div class="result-item">
                <img src="${result.img}" alt="${result.title}">
                <h3>${result.title}</h3>
                <p>${result.artist}</p>
            </div>
        `).join('');
    });
}
// Funcionalidad de filtros en biblioteca
if (document.querySelector('.library-filters')) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Aquí podrías cambiar el contenido dinámicamente basado en el filtro
            alert(`Filtro cambiado a: ${btn.textContent}`);
        });
    });
}