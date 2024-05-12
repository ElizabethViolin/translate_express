const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

// Function to detect language
export async function detectLanguage(text) {
    const response = await fetch(`${baseUrl}/detectLanguage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });
    return response.json();
}

// Function to translate text
export async function translateText(text, targetLanguage) {
    const response = await fetch(`${baseUrl}/translateText`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, targetLanguage })
    });
    return response.json();
}
