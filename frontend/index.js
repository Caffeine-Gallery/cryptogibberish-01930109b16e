import { backend } from 'declarations/backend';

const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const loadingSpinner = document.getElementById('loading');

async function updateCount() {
    showLoading(true);
    try {
        const count = await backend.getCount();
        countElement.textContent = count.toString();
    } catch (error) {
        console.error('Error fetching count:', error);
    } finally {
        showLoading(false);
    }
}

incrementButton.addEventListener('click', async () => {
    showLoading(true);
    try {
        const newCount = await backend.increment();
        countElement.textContent = newCount.toString();
    } catch (error) {
        console.error('Error incrementing count:', error);
    } finally {
        showLoading(false);
    }
});

decrementButton.addEventListener('click', async () => {
    showLoading(true);
    try {
        const newCount = await backend.decrement();
        countElement.textContent = newCount.toString();
    } catch (error) {
        console.error('Error decrementing count:', error);
    } finally {
        showLoading(false);
    }
});

function showLoading(isLoading) {
    loadingSpinner.style.display = isLoading ? 'inline-block' : 'none';
    incrementButton.disabled = isLoading;
    decrementButton.disabled = isLoading;
}

// Initial count fetch
updateCount();
