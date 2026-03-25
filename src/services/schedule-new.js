import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when}) {
  // Faz a requisição para enviar os dados do agendamento.
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    })

    alert("Agendamento realizado com sucesso.")

  } catch (error) {
    alert("Não foi possível agendar, tente novamente mais tarde.")
    console.log(error)
  }
}