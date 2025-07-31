export const prerender = false;

import type { APIRoute } from "astro";
import { validateMessage } from "../../lib/validateMessage.ts";
import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";
import path from "path";

export const POST: APIRoute = async ({ request }) => {
    try {
        // Read the request body as JSON
        const body = await request.json();

        // Validate the request body
        if (!body || typeof body !== "object") {
            return new Response(JSON.stringify({ success: false, error: "Invalid request body" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Validate data using the custom validation function
        const { valid, error } = validateMessage(body);

        // Check if the validation failed
        if (!valid) {
            return new Response(JSON.stringify({ success: false, error }), { status: 400 });
        }

        // JSON file path
        const filePath = path.resolve("src/data/messages.json");

        // Initialize an empty array to hold existing items
        let items: any[] = [];
        
        // Read existing items from the JSON file
        try {
            const fileContent = await fs.readFile(filePath, "utf-8");
            items = JSON.parse(fileContent);
        } catch (readErr) {
            // In case the file does not exist or is empty, initialize an empty array
            items = [];
        }

        // Add the new item to the array, ensuring it has a unique ID and submission date
        body.date = new Date().toISOString();
        body.id = uuidv4();
        items.push(body);

        // Save the updated array back to the JSON file
        await fs.writeFile(filePath, JSON.stringify(items, null, 2));

        // Return a success response
        return new Response(JSON.stringify({ success: true, message: "Message sent" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (err) {
        // Log the error for debugging
        console.error("Error processing data:", err);

        // Return an error response
        return new Response(JSON.stringify({ success: false, error: "Error sending message" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};