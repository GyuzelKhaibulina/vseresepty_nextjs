import { query } from "@/lib/db";
const path = process.env.PATH_API;

export async function GET(req) {

    const urlValue = new URLSearchParams(req.url);
    const type = urlValue.getAll(`${path}cooking/search?type`);
    const search = urlValue.getAll('search');

    const res = await query({
        query: `SELECT * FROM ${type} WHERE name LIKE '%${search}%'`,
    });

    let data = JSON.stringify(res);
    return new Response(data, {
        status: 200,
    });



    
}

