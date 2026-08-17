
export async function generateVideo(prompt: string, imageUrls: string[], outputPath: string) {
    const headers = {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json',
    };

    const response = await fetch('https://openrouter.ai/api/v1/videos', {
        method: 'POST',
        headers,
        body: JSON.stringify({
            model: 'google/veo-3.1',
            prompt: prompt,
            duration: 8,
            generate_audio: false,
            input_references: imageUrls.map(imageurl => ({
                "type": "image_url",
                "image_url": {
                  "url": imageurl
                }
            }))
        }),
    });
    const result = await response.json();
    const jobId = result.id;
    const pollingUrl = result.polling_url;
    console.log(`Job submitted: ${jobId}`);
    console.log(`Status: ${result.status}`);
}