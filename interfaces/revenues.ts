export type RevenueType = {
  releaseType: "recebimento" | "despesa",
  id: number,
  name: string
  value: number,
  inInstallments: boolean,
  installmentsCount: number,
  installmentsStepType: "Diariamente" | "Semanalmente" | "Mensalmente" | "Anualmente",
  dateOfExpire: string
  type: "Fixo" | "Variável" | "Unico",
  category: "Pagamento" | "Outros",
  status: boolean,
  reminder: boolean
}