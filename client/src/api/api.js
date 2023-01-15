const api = "https://fsmflashlightserver.onrender.com";
export async function getInitialState() {
  const response = await fetch(`${api}/getState`, { mode: "cors" });
  return await response.json();
}
