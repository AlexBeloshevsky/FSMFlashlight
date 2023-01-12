const api = "http://localhost:3001";
export async function getInitialState() {
	const response = await fetch(`${api}/getState`, { mode: "cors" });
    return await response.json();
}