        const totalSpheres = 25;
        for (let i = 0; i < totalSpheres; i++) {
            const sphere = document.createElement('div');
            sphere.className = 'sphere';
            sphere.style.setProperty('--i', i);
            document.body.appendChild(sphere);
        }
    