const LAMBDA_URL = 'https://qo6kyegrr4ih4h7zafpv5gncxa0sslcy.lambda-url.us-east-1.on.aws/';

async function getVisitorCount() {
    try {
        const response = await fetch(LAMBDA_URL, { cache: 'no-store' });
        const data = await response.json();
        document.getElementById('counter').innerText = data.count;
    } catch (error) {
        document.getElementById('counter').innerText = 'N/A';
    }
}

getVisitorCount();