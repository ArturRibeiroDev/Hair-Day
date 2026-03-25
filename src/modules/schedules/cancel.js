import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay} from "./load.js"

const periods = document.querySelectorAll(".period")

// Gera evento click para cada Lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista.
  period.addEventListener("click", async (event) => {

    if (event.target.classList.contains("cancel-icon")) {
      // obtém a li pai do elemnto clicado.
      const item = event.target.closest("li")

      // Pega o ID do agendamento para remover.
      const { id } = item.dataset

      // Confirma que o id foi selecionado.
      if (id) {
      
      // Confirma se o usuário quer remover
      const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")

      if (isConfirm) {
        
        console.log("ID capturado:", id)

        // Faz a requisição na API para cancelar.
        await scheduleCancel({ id })
        
        // Recarrega os agendamentos.
        schedulesDay()

        }
      }
    }

  })
})