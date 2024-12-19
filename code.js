const startButton = document.getElementById('start-button');
        const stopButton = document.getElementById('stop-button');
        const intervalInput = document.getElementById('interval');
        const dataTable = document.getElementById('data-table').querySelector('tbody');

        let intervalId = null;
        let counter = 1;

        // Функція генерації випадкових даних
        function generateRandomData() {
            return Math.floor(Math.random() * 1000);
        }

        // Функція додавання нового рядка до таблиці
        function addRow() {
            const row = document.createElement('tr');
            const cellNumber = document.createElement('td');
            const cellData = document.createElement('td');

            cellNumber.textContent = counter;
            cellData.textContent = generateRandomData();

            row.appendChild(cellNumber);
            row.appendChild(cellData);

            dataTable.appendChild(row);

            counter++;
        }

        // Почати генерування рядків з заданим інтервалом
        function startGenerating() {
            const interval = parseInt(intervalInput.value);
            if (isNaN(interval) || interval <= 0) {
                alert('Please enter a valid interval greater than 0.');
                return;
            }

            startButton.disabled = true;
            stopButton.disabled = false;

            intervalId = setInterval(addRow, interval);
        }

        // Зупинити генерацію рядків
        function stopGenerating() {
            clearInterval(intervalId);
            intervalId = null;

            startButton.disabled = false;
            stopButton.disabled = true;
        }

        startButton.addEventListener('click', startGenerating);
        stopButton.addEventListener('click', stopGenerating);