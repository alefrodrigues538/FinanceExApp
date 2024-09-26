export type ExpenseType = {
  releaseType: "recebimento" | "despesa",
  id: number,
  name: string
  value: number,
  inInstallments: boolean,
  installmentsCount: number,
  installmentsStepType: "Diariamente" | "Semanalmente" | "Mensalmente" | "Anualmente",
  dateOfExpire: string
  type: "Cartão de credito" | "Fixo" | "Variável" | "Prestação",
  category: "Alimentação" | "Educação" | "Lazer" | "Moradia" | "Saúde" | "Transporte" | "Vestuário" | "Outros",
  status: boolean,
  reminder: boolean
}
